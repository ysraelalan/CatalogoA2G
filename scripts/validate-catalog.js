#!/usr/bin/env node
/*
 * A2G · Validador previo a la carga masiva.
 * Uso: node scripts/validate-catalog.js
 * Solo lectura: no modifica productos.json ni imágenes.
 */
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const jsonPath = path.join(root, 'productos.json');
const errors = [];
const warnings = [];
const report = [];

function fail(message) { errors.push(message); }
function warn(message) { warnings.push(message); }

if (!fs.existsSync(jsonPath)) {
  console.error('ERROR: No existe productos.json');
  process.exit(1);
}

let data;
try { data = JSON.parse(fs.readFileSync(jsonPath, 'utf8')); }
catch (error) {
  console.error(`ERROR: productos.json no es JSON válido: ${error.message}`);
  process.exit(1);
}

if (!data || !Array.isArray(data.productos)) {
  fail('La estructura esperada es un objeto con un arreglo "productos".');
} else {
  const products = data.productos;
  const required = ['id', 'nombre', 'marca', 'categoria', 'subcategoria', 'descripcion'];
  const ids = new Map();
  const missingImages = [];
  const missingFields = [];
  const invalidImages = [];

  products.forEach((product, index) => {
    const row = index + 1;
    required.forEach((field) => {
      if (product[field] === undefined || product[field] === null || String(product[field]).trim() === '') {
        missingFields.push(`fila ${row} (${product.id || 'sin ID'}): falta ${field}`);
      }
    });

    if (product.id) {
      ids.set(product.id, (ids.get(product.id) || 0) + 1);
    }

    if (!product.imagen) {
      missingImages.push(product.id || `fila ${row}`);
    } else {
      const relative = String(product.imagen).replace(/^\.\//, '');
      const resolved = path.resolve(root, relative);
      if (!resolved.startsWith(root + path.sep) || !fs.existsSync(resolved)) {
        invalidImages.push(`${product.id || `fila ${row}`}: ${product.imagen}`);
      }
    }

    if (product.precio !== undefined && (typeof product.precio !== 'number' || product.precio < 0)) {
      warn(`${product.id || `fila ${row}`}: revisar precio (${product.precio}).`);
    }
  });

  [...ids.entries()].filter(([, count]) => count > 1).forEach(([id]) => fail(`ID duplicado: ${id}`));
  missingFields.forEach(fail);
  invalidImages.forEach((item) => fail(`Ruta de imagen inexistente o fuera del proyecto: ${item}`));
  if (missingImages.length) warn(`${missingImages.length} productos sin imagen asignada: ${missingImages.join(', ')}`);

  report.push(`Productos en JSON: ${products.length}`);
  report.push(`IDs únicos: ${ids.size}`);
  report.push(`Productos sin imagen: ${missingImages.length}`);
  report.push(`Rutas de imagen inválidas: ${invalidImages.length}`);
  report.push(`Campos obligatorios faltantes: ${missingFields.length}`);
}

// Comprueba recursos locales declarados en HTML y CSS.
const htmlPath = path.join(root, 'index.html');
const cssPath = path.join(root, 'styles.css');
const jsPath = path.join(root, 'app.js');
for (const file of [htmlPath, cssPath, jsPath]) {
  if (!fs.existsSync(file)) fail(`Falta archivo principal: ${path.basename(file)}`);
}

if (fs.existsSync(htmlPath)) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const ids = [...html.matchAll(/\bid=["']([^"']+)["']/g)].map((m) => m[1]);
  const seen = new Set();
  ids.forEach((id) => {
    if (seen.has(id)) fail(`ID HTML duplicado: ${id}`);
    seen.add(id);
  });

  const references = [...html.matchAll(/(?:src|href)=["']([^"']+)["']/g)]
    .map((m) => m[1])
    .filter((url) => !/^(?:https?:|#|mailto:|tel:|data:|javascript:)/i.test(url));
  references.forEach((url) => {
    const clean = url.split(/[?#]/)[0];
    if (!clean) return;
    const resolved = path.resolve(root, clean);
    if (!resolved.startsWith(root + path.sep) || !fs.existsSync(resolved)) {
      fail(`Recurso local referido por HTML no encontrado: ${url}`);
    }
  });
  report.push(`IDs HTML únicos: ${seen.size}`);
}

if (fs.existsSync(cssPath)) {
  const css = fs.readFileSync(cssPath, 'utf8');
  const open = (css.match(/{/g) || []).length;
  const close = (css.match(/}/g) || []).length;
  if (open !== close) fail(`Llaves CSS desequilibradas: ${open} apertura(s), ${close} cierre(s).`);
  const urls = [...css.matchAll(/url\(["']?([^"')]+)["']?\)/g)].map((m) => m[1].trim());
  urls.filter((url) => !/^(?:https?:|data:|\/\/|#)/i.test(url)).forEach((url) => {
    const resolved = path.resolve(root, url);
    if (!resolved.startsWith(root + path.sep) || !fs.existsSync(resolved)) fail(`Recurso CSS local no encontrado: ${url}`);
  });
  report.push(`Llaves CSS: ${open} apertura(s) / ${close} cierre(s)`);
}

if (fs.existsSync(jsPath)) {
  const js = fs.readFileSync(jsPath, 'utf8');
  const open = (js.match(/{/g) || []).length;
  const close = (js.match(/}/g) || []).length;
  report.push(`Tamaño de app.js: ${Buffer.byteLength(js)} bytes`);
  // La comprobación sintáctica completa se ejecuta aparte con node --check.
}

console.log('A2G · INFORME DE PREVALIDACIÓN');
console.log('--------------------------------');
report.forEach((line) => console.log(`• ${line}`));
if (warnings.length) {
  console.log('\nADVERTENCIAS');
  warnings.forEach((line) => console.log(`! ${line}`));
}
if (errors.length) {
  console.log('\nERRORES');
  errors.forEach((line) => console.log(`✗ ${line}`));
  process.exitCode = 1;
} else {
  console.log('\nResultado: sin errores estructurales detectados.');
}
