# A2G · Preparación previa a la carga de 1.074 productos

## Alcance de esta versión

- Se conserva el conjunto actual de productos de demostración; no se importan ni modifican masivamente los 1.074 registros.
- Se añade `scripts/validate-catalog.js`, un validador de solo lectura para estructura JSON, campos obligatorios, IDs duplicados y rutas de imágenes.
- Las imágenes de tarjetas y logotipos usan carga diferida y decodificación asíncrona; la imagen principal de la ficha se carga con prioridad normal/eager al abrir el detalle.
- `productos.json` se mantiene intacto para evitar sobrescribir datos activos o resolver silenciosamente diferencias entre fuentes.

## Ejecutar controles

Desde la carpeta raíz del proyecto:

```bash
node --check app.js
node scripts/validate-catalog.js
```

El validador devuelve errores con código de salida distinto de cero si encuentra estructura inválida, campos obligatorios vacíos, IDs duplicados, rutas rotas o IDs HTML duplicados. Las imágenes no asignadas se reportan como advertencia porque forman parte del trabajo de preparación visual.

## Hallazgos iniciales que deben resolverse antes de la importación masiva

1. El prototipo tiene 18 productos en `productos.json`, no los 1.074 definitivos.
2. Muchos registros todavía no tienen ruta de imagen; es normal en esta fase, pero cada producto debe enlazarse a una imagen validada antes de publicar.
3. `app.js` contiene su propio arreglo de productos de demostración, separado de `productos.json`. Antes de la carga masiva se debe decidir y probar una única fuente de verdad para evitar que ambos conjuntos diverjan. Esta versión no cambia esa arquitectura de forma automática para no arriesgar el funcionamiento existente.
4. Hay una diferencia de denominación para el producto `LED528` entre el JSON y el arreglo de demostración (`Genéricos y sin marca` / `Sin especificar`). Debe acordarse una etiqueta única al consolidar la fuente de datos.
5. No se ha realizado una prueba visual automatizada de navegador en esta versión. La aceptación final debe incluir escritorio y móvil, búsqueda, filtros combinados, ordenamiento, ficha de producto y navegación entre secciones.

## Prueba de aceptación sugerida con 20–30 productos

- Incluir productos de iluminación, soportes, modificadores, cámara/vídeo, audio, energía y accesorios.
- Confirmar un ID único por producto y una ruta válida por imagen aprobada.
- Verificar marca, categoría y subcategoría, además de los datos técnicos disponibles.
- Revisar que búsqueda y filtros combinados devuelvan resultados correctos y que «Limpiar» restablezca el catálogo.
- Comprobar que el botón de cargar más, las fichas y el retorno al catálogo funcionen.
- Verificar las páginas de marcas y novedades, navegación móvil y ausencia de errores en consola.
- Solo después de aprobar la muestra, procesar las imágenes y datos por lotes con una copia de seguridad versionada.
