/* =====================================================
   A2G CATÁLOGO DIGITAL
===================================================== */


/* =====================================================
   DATOS DE DEMOSTRACIÓN
===================================================== */

const productos = [
    {
        "id": "LED528",
        "nombre": "LED 528",
        "marca": "Sin especificar",
        "categoria": "Iluminación",
        "subcategoria": "Luz LED bicolor",
        "precio": 1000,
        "icono": "▦",
        "imagen": "assets/led-528.jpg",
        "descripcion": "Luz LED bi-color de 38 W de potencia. Incluye batería y cargador; está indicada para fotografía y video.",
        "destacado": true,
        "potencia": "38 W",
        "tipo": "Bi-color",
        "alimentacion": "Batería incluida",
        "incluye": "Batería + cargador",
        "caracteristicas": [
            [
                "Luz LED bicolor",
                "Iluminación LED profesional de 38 W."
            ],
            [
                "Alimentación portátil",
                "Puede utilizarse con batería para trabajos fuera del estudio."
            ],
            [
                "Batería incluida",
                "El catálogo indica batería y cargador incluidos."
            ],
            [
                "Uso audiovisual",
                "Adecuada para fotografía y producción de video."
            ]
        ],
        "aplicaciones": [
            [
                "VIDEO",
                "Producción audiovisual · entrevistas"
            ],
            [
                "CONTENIDO",
                "YouTube · vlogs · streaming"
            ],
            [
                "FOTOGRAFÍA",
                "Retratos · producto · iluminación continua"
            ]
        ]
    },
    {
        "id": "NW-LED660RGB",
        "nombre": "NEEWER LED-660 RGB",
        "marca": "Neewer",
        "categoria": "Iluminación",
        "subcategoria": "Luz de video RGB",
        "precio": 2050,
        "icono": "▦",
        "descripcion": "Luz de vídeo RGB profesional con luz RGB y bi-color (fría y cálida). Sus efectos especiales amplían las opciones para vídeo, fotografía, publicidad, películas y eventos deportivos. Construcción en aleación de aluminio.",
        "destacado": true,
        "potencia": "No especificada",
        "tipo": "RGB + bi-color",
        "alimentacion": "No especificada",
        "incluye": "Consultar contenido del kit",
        "caracteristicas": [
            [
                "RGB + bi-color",
                "Permite combinar luz de color, fría y cálida."
            ],
            [
                "Efectos especiales",
                "Opciones creativas para producciones audiovisuales."
            ],
            [
                "Construcción",
                "Aleación de aluminio."
            ]
        ],
        "aplicaciones": [
            [
                "VIDEO",
                "Producción audiovisual y películas"
            ],
            [
                "PUBLICIDAD",
                "Contenido comercial y campañas"
            ],
            [
                "FOTOGRAFÍA",
                "Iluminación creativa y eventos"
            ]
        ]
    },
    {
        "id": "NW-LED520PRO",
        "nombre": "LED-520 PRO",
        "marca": "Neewer",
        "categoria": "Iluminación",
        "subcategoria": "Luz de video LED",
        "precio": 750,
        "icono": "▦",
        "descripcion": "Luz de vídeo LED profesional de 37 W, con temperatura de color de 3200 a 5600 K. Incluye batería NP-F570 y cargador, según el catálogo.",
        "destacado": true,
        "potencia": "37 W",
        "tipo": "3200–5600 K",
        "alimentacion": "Batería NP-F570",
        "incluye": "Batería NP-F570 + cargador",
        "caracteristicas": [
            [
                "Potencia",
                "37 W."
            ],
            [
                "Temperatura de color",
                "Rango de 3200 a 5600 K."
            ],
            [
                "Accesorios incluidos",
                "Batería NP-F570 y cargador."
            ]
        ],
        "aplicaciones": [
            [
                "VIDEO",
                "Grabación y entrevistas"
            ],
            [
                "CONTENIDO",
                "Vlogs y streaming"
            ],
            [
                "FOTOGRAFÍA",
                "Retratos y producto"
            ]
        ]
    },
    {
        "id": "GD-LED170II",
        "nombre": "GODOX LED 170 II",
        "marca": "Godox",
        "categoria": "Iluminación",
        "subcategoria": "Panel LED",
        "precio": 880,
        "icono": "▦",
        "descripcion": "Luz LED con 170 bombillas. Incluye filtro de difusión y filtro naranja; el catálogo también describe reflectores para crear distintos efectos de luz.",
        "destacado": false,
        "potencia": "No especificada",
        "tipo": "Panel LED",
        "alimentacion": "No especificada",
        "incluye": "Filtro de difusión + filtro naranja",
        "caracteristicas": [
            [
                "170 bombillas LED",
                "Diseñada para aportar iluminación en diferentes entornos."
            ],
            [
                "Filtros incluidos",
                "Filtro de difusión y filtro naranja."
            ],
            [
                "Control creativo",
                "Reflectores para crear diferentes efectos de luz."
            ]
        ],
        "aplicaciones": [
            [
                "VIDEO",
                "Iluminación complementaria"
            ],
            [
                "FOTOGRAFÍA",
                "Retratos y producto"
            ]
        ]
    },
    {
        "id": "NW-MS60B",
        "nombre": "MS60B Bi",
        "marca": "Neewer",
        "categoria": "Iluminación",
        "subcategoria": "Luz COB portátil",
        "precio": 2850,
        "icono": "◉",
        "descripcion": "Luz COB portátil con tecnología PWM, temperatura de color ajustable de 2700 a 6500 K y 12 efectos especiales. Incorpora ventilador de refrigeración silencioso y admite varias fuentes de alimentación.",
        "destacado": true,
        "potencia": "65 W",
        "tipo": "Bi-color · 2700–6500 K",
        "alimentacion": "Adaptador CA y placa de batería compatibles",
        "incluye": "Verificar kit específico",
        "caracteristicas": [
            [
                "Luz COB portátil",
                "Salida de 65 W."
            ],
            [
                "Temperatura ajustable",
                "2700–6500 K."
            ],
            [
                "Efectos especiales",
                "12 efectos para distintas escenas."
            ],
            [
                "Refrigeración",
                "Ventilador silencioso y cuerpo compacto."
            ]
        ],
        "aplicaciones": [
            [
                "VIDEO",
                "Producción audiovisual"
            ],
            [
                "ESTUDIO",
                "Iluminación de apoyo"
            ],
            [
                "CONTENIDO",
                "Vlogs y grabación independiente"
            ]
        ]
    },
    {
        "id": "NW-MS60C",
        "nombre": "MS60C RGB",
        "marca": "Neewer",
        "categoria": "Iluminación",
        "subcategoria": "Luz COB RGB",
        "precio": 3800,
        "icono": "◉",
        "descripcion": "Luz LED RGB para video de 65 W, con carcasa de aluminio, temperatura de color de 2700 a 6500 K, modo RGBCW y 17 efectos especiales.",
        "destacado": true,
        "potencia": "65 W",
        "tipo": "RGB / RGBCW · 2700–6500 K",
        "alimentacion": "No especificada",
        "incluye": "Consultar contenido del kit",
        "caracteristicas": [
            [
                "Luz RGB",
                "Modo RGBCW para trabajar con color."
            ],
            [
                "Temperatura de color",
                "2700–6500 K."
            ],
            [
                "Efectos especiales",
                "17 efectos creativos."
            ],
            [
                "Construcción",
                "Carcasa de aluminio."
            ]
        ],
        "aplicaciones": [
            [
                "VIDEO",
                "Producción audiovisual"
            ],
            [
                "CREACIÓN",
                "Contenido con iluminación de color"
            ],
            [
                "FOTOGRAFÍA",
                "Escenas creativas"
            ]
        ]
    },
    {
        "id": "GD-SL60IID",
        "nombre": "SL60IID",
        "marca": "Godox",
        "categoria": "Iluminación",
        "subcategoria": "Luz LED continua",
        "precio": 2100,
        "icono": "◉",
        "descripcion": "Luz LED de 60 W para video, indicada para grabar con luz diurna o en espacios con ventanas grandes. Ofrece iluminación continua blanca con temperatura de color de 5600 K ±300 K.",
        "destacado": true,
        "potencia": "60 W",
        "tipo": "5600 K ±300 K",
        "alimentacion": "No especificada",
        "incluye": "Consultar contenido del kit",
        "caracteristicas": [
            [
                "Iluminación continua",
                "Luz LED blanca de 60 W."
            ],
            [
                "Temperatura de color",
                "5600 K ±300 K."
            ],
            [
                "Uso versátil",
                "Adecuada para video y espacios con luz diurna."
            ]
        ],
        "aplicaciones": [
            [
                "VIDEO",
                "Entrevistas y producción"
            ],
            [
                "ESTUDIO",
                "Iluminación continua"
            ],
            [
                "CONTENIDO",
                "Grabación y streaming"
            ]
        ]
    },
    {
        "id": "GD-SL60IIBI",
        "nombre": "SL60II Bi",
        "marca": "Godox",
        "categoria": "Iluminación",
        "subcategoria": "Luz LED bicolor",
        "precio": 2865,
        "icono": "◉",
        "descripcion": "Luz LED continua bicolor de 75 W. La temperatura varía entre 2800 y 6500 K; incluye control mediante aplicación Bluetooth y 11 efectos FX.",
        "destacado": true,
        "potencia": "75 W",
        "tipo": "Bicolor · 2800–6500 K",
        "alimentacion": "No especificada",
        "incluye": "Consultar contenido del kit",
        "caracteristicas": [
            [
                "Luz bicolor",
                "Temperatura de color entre 2800 y 6500 K."
            ],
            [
                "Control por aplicación",
                "Control Bluetooth indicado en el catálogo."
            ],
            [
                "Efectos FX",
                "11 efectos integrados."
            ]
        ],
        "aplicaciones": [
            [
                "VIDEO",
                "Producción audiovisual"
            ],
            [
                "ESTUDIO",
                "Control de ambiente"
            ],
            [
                "FOTOGRAFÍA",
                "Luz continua para producto y retrato"
            ]
        ]
    },
    {
        "id": "KF34.042",
        "nombre": "KF34.042",
        "marca": "K&F Concept",
        "categoria": "Soportes y pedestales",
        "subcategoria": "Soporte de luz",
        "precio": 380,
        "icono": "⌁",
        "descripcion": "Soporte de luz para fotografía de 230 cm, hecho de metal, con bolsa de almacenamiento y tornillo de 1/4. Capacidad de carga de 5 kg y altura plegada de 96 cm.",
        "destacado": true,
        "potencia": "Altura: 230 cm",
        "tipo": "Soporte de luz",
        "alimentacion": "No aplica",
        "incluye": "Bolsa de almacenamiento",
        "caracteristicas": [
            [
                "Altura",
                "230 cm."
            ],
            [
                "Capacidad de carga",
                "5 kg."
            ],
            [
                "Transporte",
                "Altura plegada de 96 cm e incluye bolsa."
            ],
            [
                "Montaje",
                "Tornillo de 1/4."
            ]
        ],
        "aplicaciones": [
            [
                "ESTUDIO",
                "Montaje de luces"
            ],
            [
                "VIDEO",
                "Iluminación para grabación"
            ]
        ]
    },
    {
        "id": "NW-78.7",
        "nombre": "NEEWER 78.7",
        "marca": "Neewer",
        "categoria": "Soportes y pedestales",
        "subcategoria": "Pedestal plegable",
        "precio": 560,
        "icono": "⌁",
        "descripcion": "Pedestal plegable para luces de 2 metros, fabricado en aleación de aluminio. Es portátil y ligero, soporta 4 kg y se pliega hasta 50 cm.",
        "destacado": false,
        "potencia": "Altura máxima: 200 cm",
        "tipo": "Pedestal plegable",
        "alimentacion": "No aplica",
        "incluye": "No especificado",
        "caracteristicas": [
            [
                "Altura máxima",
                "200 cm."
            ],
            [
                "Carga máxima",
                "4 kg."
            ],
            [
                "Transporte",
                "Altura plegada de 50 cm."
            ],
            [
                "Material",
                "Aleación de aluminio."
            ]
        ],
        "aplicaciones": [
            [
                "ESTUDIO",
                "Montaje de luces"
            ],
            [
                "EXTERIOR",
                "Iluminación portátil"
            ]
        ]
    },
    {
        "id": "SMR-4689",
        "nombre": "SmallRig 4689",
        "marca": "SmallRig",
        "categoria": "Soportes y pedestales",
        "subcategoria": "Trípode",
        "precio": 726,
        "icono": "⌁",
        "descripcion": "Trípode ligero y versátil de aleación de aluminio, con capacidad de carga de 4 kg. Diseñado para grabar videos, transmitir en vivo y realizar vlogs. Altura máxima de 161 cm y plegada de 53 cm.",
        "destacado": false,
        "potencia": "Altura máxima: 161 cm",
        "tipo": "Trípode de aluminio",
        "alimentacion": "No aplica",
        "incluye": "No especificado",
        "caracteristicas": [
            [
                "Material",
                "Aleación de aluminio."
            ],
            [
                "Capacidad de carga",
                "4 kg."
            ],
            [
                "Altura",
                "161 cm máximo; 53 cm plegado."
            ]
        ],
        "aplicaciones": [
            [
                "VIDEO",
                "Grabación de video"
            ],
            [
                "CONTENIDO",
                "Vlogs y transmisiones en vivo"
            ]
        ]
    },
    {
        "id": "NW-X14III",
        "nombre": "Teleprompter X14 III",
        "marca": "Neewer",
        "categoria": "Creación de contenido",
        "subcategoria": "Teleprompter",
        "precio": 3200,
        "icono": "▤",
        "descripcion": "Teleprompter NEEWER X14 III de 14 pulgadas. Es plegable, no requiere montaje y se configura fácilmente; incluye control remoto RT-113 y control mediante la aplicación NEEWER por Bluetooth.",
        "destacado": true,
        "potencia": "Pantalla de 14 pulgadas",
        "tipo": "Teleprompter plegable",
        "alimentacion": "No especificada",
        "incluye": "Control remoto RT-113",
        "caracteristicas": [
            [
                "Formato",
                "Pantalla de 14 pulgadas."
            ],
            [
                "Configuración",
                "Diseño plegable sin montaje requerido."
            ],
            [
                "Control",
                "Control remoto RT-113 y aplicación NEEWER vía Bluetooth."
            ]
        ],
        "aplicaciones": [
            [
                "CONTENIDO",
                "YouTube y streaming"
            ],
            [
                "VIDEO",
                "Presentaciones y entrevistas"
            ],
            [
                "EDUCACIÓN",
                "Clases y tutoriales"
            ]
        ]
    },
    {
        "id": "GD-SK300IIV",
        "nombre": "SK300II-V",
        "marca": "Godox",
        "categoria": "Iluminación",
        "subcategoria": "Flash de estudio",
        "precio": 2140,
        "icono": "ϟ",
        "descripcion": "Flash de estudio con luz de modelado LED y temperatura de color de flash de 5600 K, con variación de ±200 K según la configuración de potencia. Integra receptor del sistema X.",
        "destacado": false,
        "potencia": "Flash de estudio",
        "tipo": "5600 K ±200 K",
        "alimentacion": "No especificada",
        "incluye": "No especificado",
        "caracteristicas": [
            [
                "Luz de modelado",
                "LED integrado."
            ],
            [
                "Temperatura de color",
                "5600 K ±200 K según potencia."
            ],
            [
                "Control inalámbrico",
                "Receptor del sistema X incorporado."
            ]
        ],
        "aplicaciones": [
            [
                "ESTUDIO",
                "Fotografía de retrato"
            ],
            [
                "PRODUCTO",
                "Fotografía comercial"
            ]
        ]
    },
    {
        "id": "GD-MS300V",
        "nombre": "MS300-V",
        "marca": "Godox",
        "categoria": "Iluminación",
        "subcategoria": "Flash de estudio",
        "precio": 2090,
        "icono": "ϟ",
        "descripcion": "Flash de estudio de 300 Ws con luz de modelado LED ajustable del 5 al 100 % y sistema inalámbrico de 2,4 GHz. La montura Bowens permite utilizar diversos modificadores.",
        "destacado": false,
        "potencia": "300 Ws",
        "tipo": "Flash de estudio",
        "alimentacion": "No especificada",
        "incluye": "No especificado",
        "caracteristicas": [
            [
                "Potencia",
                "300 Ws."
            ],
            [
                "Luz de modelado",
                "LED ajustable del 5 al 100 %."
            ],
            [
                "Sistema inalámbrico",
                "2,4 GHz."
            ],
            [
                "Compatibilidad",
                "Montura Bowens para modificadores."
            ]
        ],
        "aplicaciones": [
            [
                "ESTUDIO",
                "Fotografía de estudio"
            ],
            [
                "PRODUCTO",
                "Iluminación comercial"
            ]
        ]
    },
    {
        "id": "GD-DP400IIIV",
        "nombre": "DP400III-V",
        "marca": "Godox",
        "categoria": "Iluminación",
        "subcategoria": "Flash de estudio",
        "precio": 3000,
        "icono": "ϟ",
        "descripcion": "Flash de estudio profesional de 400 W, temperatura de color de 5800 K ±200 K y velocidad de reciclado de 0,1 a 1,0 segundos. Incorpora lámpara de modelado LED de 30 W.",
        "destacado": false,
        "potencia": "400 W",
        "tipo": "Flash de estudio · 5800 K ±200 K",
        "alimentacion": "No especificada",
        "incluye": "No especificado",
        "caracteristicas": [
            [
                "Potencia",
                "400 W."
            ],
            [
                "Temperatura de color",
                "5800 K ±200 K."
            ],
            [
                "Reciclado",
                "0,1–1,0 segundos."
            ],
            [
                "Luz de modelado",
                "LED de 30 W."
            ]
        ],
        "aplicaciones": [
            [
                "ESTUDIO",
                "Producción fotográfica"
            ],
            [
                "PRODUCTO",
                "Iluminación comercial"
            ]
        ]
    },
    {
        "id": "KF13.300",
        "nombre": "KF13.300",
        "marca": "K&F Concept",
        "categoria": "Accesorios y protección",
        "subcategoria": "Mochila para cámara",
        "precio": 1550,
        "icono": "▧",
        "descripcion": "Mochila para cámara de alta gama de 25 litros, con estilo urbano y funcionalidad práctica. Incluye compartimento para portátil de 15 pulgadas, diseño resistente al agua y compartimentos acolchados.",
        "destacado": false,
        "potencia": "Capacidad: 25 L",
        "tipo": "Mochila fotográfica",
        "alimentacion": "No aplica",
        "incluye": "Compartimento para portátil de 15 pulgadas",
        "caracteristicas": [
            [
                "Capacidad",
                "25 litros."
            ],
            [
                "Protección",
                "Diseño resistente al agua y compartimentos acolchados."
            ],
            [
                "Organización",
                "Compartimento para portátil de 15 pulgadas."
            ]
        ],
        "aplicaciones": [
            [
                "EXTERIOR",
                "Traslado de equipo"
            ],
            [
                "FOTOGRAFÍA",
                "Protección de cámara y accesorios"
            ]
        ]
    },
    {
        "id": "SMR-5053",
        "nombre": "SmallRig 5053",
        "marca": "SmallRig",
        "categoria": "Accesorios y protección",
        "subcategoria": "Clip de cámara",
        "precio": 800,
        "icono": "▧",
        "descripcion": "Clip para cámara con placa de montaje de liberación rápida. Su sistema de abrazadera admite una capacidad de carga vertical de 40 kg y permite fijar cámaras a mochilas, correas o cinturones.",
        "destacado": false,
        "potencia": "Carga vertical indicada: 40 kg",
        "tipo": "Clip de liberación rápida",
        "alimentacion": "No aplica",
        "incluye": "Placa de montaje",
        "caracteristicas": [
            [
                "Montaje rápido",
                "Placa de liberación rápida."
            ],
            [
                "Capacidad indicada",
                "Carga vertical de 40 kg."
            ],
            [
                "Compatibilidad de uso",
                "Mochilas, correas o cinturones."
            ]
        ],
        "aplicaciones": [
            [
                "EXTERIOR",
                "Transporte de cámara"
            ],
            [
                "FOTOGRAFÍA",
                "Acceso rápido al equipo"
            ]
        ]
    },
    {
        "id": "SMR-PAC2456B",
        "nombre": "SmallRig PAC2456B",
        "marca": "SmallRig",
        "categoria": "Cámara y video",
        "subcategoria": "Correa de mano",
        "precio": 250,
        "icono": "⌁",
        "descripcion": "Correa de mano universal compatible con jaulas de cámara y empuñaduras laterales externas que incorporan ranuras para correa en los lados superior e inferior.",
        "destacado": false,
        "potencia": "No aplica",
        "tipo": "Correa de mano universal",
        "alimentacion": "No aplica",
        "incluye": "No especificado",
        "caracteristicas": [
            [
                "Compatibilidad",
                "Jaulas de cámara y empuñaduras laterales con ranura para correa."
            ],
            [
                "Sujeción",
                "Conexión mediante ranuras superior e inferior."
            ]
        ],
        "aplicaciones": [
            [
                "VIDEO",
                "Rig de cámara"
            ],
            [
                "FOTOGRAFÍA",
                "Sujeción durante el uso"
            ]
        ]
    }
];

/* =====================================================
   CATEGORÍAS
===================================================== */

const categorias = [

    {
        nombre: "Iluminación",
        icono: "💡"
    },

    {
        nombre: "Soportes y pedestales",
        icono: "📐"
    },

    {
        nombre: "Fondos y modificadores",
        icono: "◼"
    },

    {
        nombre: "Cámara y video",
        icono: "📷"
    },

    {
        nombre: "Audio",
        icono: "🎙"
    },

    {
        nombre: "Creación de contenido",
        icono: "📱"
    },

    {
        nombre: "Energía y almacenamiento",
        icono: "🔋"
    },

    {
        nombre: "Accesorios y protección",
        icono: "🎒"
    }

];


/* =====================================================
   ESTADO
===================================================== */

const state = {

    search: "",

    marca: "",

    categoria: "",

    sort: "default",

    visible: 9,

    selectedProduct: null

};


/* =====================================================
   ELEMENTOS
===================================================== */

const productGrid =
    document.getElementById("productGrid");

const resultsCount =
    document.getElementById("resultsCount");

const searchInput =
    document.getElementById("searchInput");

const sortSelect =
    document.getElementById("sortSelect");

const brandFilters =
    document.getElementById("brandFilters");

const categoryFilters =
    document.getElementById("categoryFilters");

const activeFilters =
    document.getElementById("activeFilters");

const loadMore =
    document.getElementById("loadMore");


/* =====================================================
   NAVEGACIÓN
===================================================== */

function showPage(page) {

    document.querySelectorAll(".page")
        .forEach(section => {

            section.classList.remove("active");

        });


    const target =
        document.getElementById(`page-${page}`);

    if (target) {

        target.classList.add("active");

        if (page === "contacto") renderContactProductContext();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    document
        .querySelector(".main-nav")
        ?.classList.remove("open");
}


document.addEventListener(
    "click",
    event => {

        const target =
            event.target.closest("[data-page]");

        if (!target) return;

        event.preventDefault();

        showPage(
            target.dataset.page
        );

    }
);


/* =====================================================
   CATEGORÍAS
===================================================== */

function renderCategories() {
    const containers = [
        document.getElementById("homeCategories"),
        document.getElementById("catalogCategories")
    ].filter(Boolean);

    containers.forEach(container => {
        container.innerHTML = "";
        categorias.forEach((category, index) => {
            const count = productos.filter(product => product.categoria === category.nombre).length;
            const card = document.createElement("button");
            card.type = "button";
            card.className = container.id === "catalogCategories" ? "catalog-category" : "category-card";
            const categoryImages = {
                "Iluminación": "assets/referencias/iluminacion.webp",
                "Soportes y pedestales": "assets/referencias/fotografia.webp",
                "Fondos y modificadores": "assets/referencias/iluminacion.webp",
                "Cámara y video": "assets/referencias/video.webp",
                "Audio": "assets/referencias/audio.webp",
                "Creación de contenido": "assets/referencias/video.webp",
                "Accesorios": "assets/referencias/objetivos.webp",
                "Otros": "assets/referencias/fotografia.webp"
            };
            const imagePath = categoryImages[category.nombre] || "assets/referencias/fotografia.webp";
            card.style.setProperty("--category-image", `url("${imagePath}")`);
            card.innerHTML = `
                <span class="category-image" aria-hidden="true"></span>
                <span class="category-index">${String(index + 1).padStart(2, "0")}</span>
                <span class="category-icon" aria-hidden="true">${category.icono}</span>
                <span class="category-title">${category.nombre}</span>
                <span class="category-count">${count} ${count === 1 ? "producto" : "productos"}</span>
                <span class="category-arrow" aria-hidden="true">↗</span>
            `;
            card.addEventListener("click", () => {
                state.categoria = category.nombre;
                state.marca = "";
                state.visible = 9;
                showPage("productos");
                renderFilters();
                renderProducts();
                const filtersToggle = document.getElementById("filtersToggle");
                const filtersPanel = document.getElementById("filtersPanel");
                if (filtersToggle && filtersPanel) {
                    filtersToggle.setAttribute("aria-expanded", "false");
                    filtersPanel.classList.remove("is-open");
                }
                const productGrid = document.getElementById("productGrid");
                if (productGrid) {
                    const offset = window.innerWidth <= 600 ? 90 : 110;
                    const top = productGrid.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top, behavior: "smooth" });
                }
            });
            container.appendChild(card);
        });
    });
}

/* =====================================================
   MARCAS
===================================================== */

function getBrands() {

    return [
        ...new Set(
            productos.map(
                product => product.marca
            )
        )
    ].sort();

}


function renderBrands() {

    const brands =
        getBrands();


    brandFilters.innerHTML = "";

    brands.forEach(brand => {

        const count =
            productos.filter(
                product =>
                    product.marca === brand
            ).length;


        const label =
            document.createElement("label");

        label.className =
            "filter-option";


        label.innerHTML = `

            <input
                type="radio"
                name="brand"
                value="${brand}"
            >

            ${brand}

            <span>
                (${count})
            </span>

        `;


        const radio =
            label.querySelector("input");


        radio.checked =
            state.marca === brand;


        radio.addEventListener(
            "change",
            () => {

                state.marca =
                    radio.value;

                state.visible = 9;

                renderProducts();

            }
        );


        brandFilters.appendChild(label);

    });

}


/* =====================================================
   FILTROS DE CATEGORÍA
===================================================== */

function renderCategoryFilters() {

    categoryFilters.innerHTML = "";


    categorias.forEach(category => {

        const count =
            productos.filter(
                product =>
                    product.categoria ===
                    category.nombre
            ).length;


        const label =
            document.createElement("label");

        label.className =
            "filter-option";


        label.innerHTML = `

            <input
                type="radio"
                name="category"
                value="${category.nombre}"
            >

            ${category.nombre}

            <span>
                (${count})
            </span>

        `;


        const radio =
            label.querySelector("input");


        radio.checked =
            state.categoria ===
            category.nombre;


        radio.addEventListener(
            "change",
            () => {

                state.categoria =
                    radio.value;

                state.visible = 9;

                renderProducts();

            }
        );


        categoryFilters.appendChild(label);

    });

}


function renderFilters() {

    renderBrands();

    renderCategoryFilters();

}


/* =====================================================
   FILTRAR PRODUCTOS
===================================================== */

function getFilteredProducts() {

    let result =
        [...productos];


    if (state.search) {

        const search =
            state.search
                .toLowerCase();


        result =
            result.filter(product =>

                `${product.nombre}
                ${product.marca}
                ${product.categoria}
                ${product.subcategoria}
                ${product.id}`

                .toLowerCase()
                .includes(search)

            );

    }


    if (state.marca) {

        result =
            result.filter(
                product =>
                    product.marca ===
                    state.marca
            );

    }


    if (state.categoria) {

        result =
            result.filter(
                product =>
                    product.categoria ===
                    state.categoria
            );

    }


    switch (state.sort) {

        case "name":

            result.sort(
                (a, b) =>
                    a.nombre.localeCompare(
                        b.nombre
                    )
            );

            break;


        case "price-low":

            result.sort(
                (a, b) =>
                    a.precio - b.precio
            );

            break;


        case "price-high":

            result.sort(
                (a, b) =>
                    b.precio - a.precio
            );

            break;

    }


    return result;

}


/* =====================================================
   TARJETA
===================================================== */

function productCard(product) {

    const card =
        document.createElement("article");

    card.className =
        "product-card";


    card.innerHTML = `

        <div class="product-image">
            ${product.imagen ? `<img src="${product.imagen}" alt="${product.nombre}" loading="lazy" decoding="async">` : `<span class="product-placeholder" aria-hidden="true">${product.icono}</span>`}
        </div>

        <div class="product-info">

            <div class="product-brand">
                ${product.marca}
            </div>

            <div class="product-name">
                ${product.nombre}
            </div>

            <div class="product-category">
                ${product.categoria}
            </div>

            <div class="product-price">
                Bs. ${product.precio.toLocaleString(
                    "es-BO"
                )}
            </div>

        </div>

    `;


    card.addEventListener(
        "click",
        () => {

            showProduct(product.id);

        }
    );


    return card;

}


/* =====================================================
   RENDER PRODUCTOS
===================================================== */

function renderProducts() {

    const filtered =
        getFilteredProducts();


    resultsCount.textContent =
        `${filtered.length} productos`;


    productGrid.innerHTML = "";


    const visible =
        filtered.slice(
            0,
            state.visible
        );


    visible.forEach(
        product => {

            productGrid.appendChild(
                productCard(product)
            );

        }
    );


    loadMore.style.display =
        state.visible <
        filtered.length
            ? "block"
            : "none";


    renderActiveFilters();

    const backToCategories = document.getElementById("backToCategories");
    if (backToCategories) backToCategories.hidden = !state.categoria;
}


/* =====================================================
   FILTROS ACTIVOS
===================================================== */

function renderActiveFilters() {

    activeFilters.innerHTML = "";


    if (state.marca) {

        addChip(
            state.marca,
            () => {

                state.marca = "";

                renderFilters();

                renderProducts();

            }
        );

    }


    if (state.categoria) {

        addChip(
            state.categoria,
            () => {

                state.categoria = "";

                renderFilters();

                renderProducts();

            }
        );

    }


    if (state.search) {

        addChip(
            `"${state.search}"`,
            () => {

                state.search = "";

                searchInput.value = "";

                renderProducts();

            }
        );

    }

}


function addChip(text, callback) {

    const chip =
        document.createElement("button");

    chip.className =
        "filter-chip";

    chip.textContent =
        `${text} ×`;

    chip.addEventListener(
        "click",
        callback
    );

    activeFilters.appendChild(chip);

}


/* =====================================================
   BUSCADOR
===================================================== */

searchInput.addEventListener(
    "input",
    event => {

        state.search =
            event.target.value.trim();

        state.visible = 9;

        renderProducts();

    }
);


/* =====================================================
   ORDEN
===================================================== */

sortSelect.addEventListener(
    "change",
    event => {

        state.sort =
            event.target.value;

        renderProducts();

    }
);


/* =====================================================
   LIMPIAR
===================================================== */

document
    .getElementById("clearFilters")
    .addEventListener(
        "click",
        () => {

            state.search = "";

            state.marca = "";

            state.categoria = "";

            state.sort = "default";

            state.visible = 9;


            searchInput.value = "";

            sortSelect.value =
                "default";


            renderFilters();

            renderProducts();

        }
    );


/* =====================================================
   VOLVER AL SELECTOR DE CATEGORÍAS
===================================================== */
const backToCategories = document.getElementById("backToCategories");
if (backToCategories) {
    backToCategories.addEventListener("click", () => {
        state.categoria = "";
        state.marca = "";
        state.visible = 9;
        renderFilters();
        renderProducts();
        const categoryWrap = document.querySelector(".catalog-category-wrap");
        if (categoryWrap) {
            const offset = window.innerWidth <= 600 ? 90 : 110;
            const top = categoryWrap.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    });
}


/* =====================================================
   MOSTRAR MÁS
===================================================== */

loadMore.addEventListener(
    "click",
    () => {

        state.visible += 9;

        renderProducts();

    }
);


/* =====================================================
   FICHA PRODUCTO
===================================================== */

function showProduct(id) {
    const product = productos.find(item => item.id === id);
    if (!product) return;
    state.selectedProduct = product;

    const detail = document.getElementById("productDetail");
    const related = productos
        .filter(item => item.id !== product.id && (item.categoria === product.categoria || item.marca === product.marca))
        .slice(0, 3);

    const featureItems = product.caracteristicas || [["Descripción", product.descripcion]];
    const useItems = product.aplicaciones || [["USO", product.categoria]];
    const mainImage = product.imagen
        ? `<img src="${product.imagen}" alt="${product.nombre}" class="detail-product-photo" loading="eager" decoding="async">`
        : `<div class="detail-placeholder" aria-hidden="true">${product.icono}</div>`;

    detail.innerHTML = `
        <div class="detail-topline">
            <button class="detail-back" type="button" data-page="productos">← Volver al catálogo</button>
            <span>${product.categoria}</span>
        </div>
        <article class="product-showcase">
            <div class="showcase-media">${mainImage}<span class="media-index">A2G / ${product.id}</span></div>
            <div class="showcase-title">
                <div class="detail-price-band" aria-label="Precio del producto">
                    <div class="detail-price-copy"><span class="detail-band-label">Precio</span><strong class="detail-band-value">Bs. ${product.precio.toLocaleString("es-BO")}</strong></div>
                    <button class="btn-dark detail-consult-button" type="button" data-page="contacto">Consultar producto <span aria-hidden="true">↗</span></button>
                </div>
                <div class="detail-brand"><span class="detail-band-label">Marca</span><span class="detail-band-value">${product.marca || "Sin especificar"}</span></div>
                <div class="detail-model-band"><span class="detail-band-label">Modelo</span><h1>${product.nombre || "Modelo no especificado"}</h1></div>
                <div class="detail-description-band"><span class="detail-band-label">Descripción</span><p>${product.descripcion}</p></div>
            </div>
            <div class="detail-metrics">
                <div class="metric metric-primary"><span>Potencia / dato principal</span><strong>${product.potencia || "Consultar ficha"}</strong></div>
                <div class="metric"><span>Tipo</span><strong>${product.tipo || product.subcategoria}</strong></div>
                <div class="metric"><span>Alimentación</span><strong>${product.alimentacion || "No especificada"}</strong></div>
                <div class="metric"><span>Incluye</span><strong>${product.incluye || "Consultar contenido"}</strong></div>
            </div>
            <section class="detail-copy-section">
                <h2>Características</h2>
                <div class="feature-list">
                    ${featureItems.map(([title, copy]) => `<article class="feature-item"><h3>${title}</h3><p>${copy}</p></article>`).join("")}
                </div>
            </section>
            <section class="detail-copy-section use-section">
                <h2>Ideal para:</h2>
                <div class="use-list">
                    ${useItems.map(([title, copy]) => `<article class="use-item"><span class="use-symbol" aria-hidden="true">${title.includes("FOTO") ? "◎" : title.includes("VIDEO") ? "▷" : title.includes("ESTUDIO") ? "▦" : "＋"}</span><div><strong>${title}</strong><p>${copy}</p></div></article>`).join("")}
                </div>
            </section>
        </article>
        <section class="related-section">
            <div class="section-heading"><div><span class="eyebrow">SEGUIR EXPLORANDO</span><h2>Productos relacionados</h2></div><button class="text-button" data-page="productos">Ver catálogo →</button></div>
            <div class="product-grid" id="relatedProducts"></div>
        </section>
    `;

    const relatedContainer = document.getElementById("relatedProducts");
    related.forEach(item => relatedContainer.appendChild(productCard(item)));
    showPage("producto");
}


/* =====================================================
   MARCAS
===================================================== */

function renderBrandPage() {
    const container = document.getElementById("brandPage");
    container.innerHTML = "";

    const brandCount = document.getElementById("brandCount");
    const brandProductCount = document.getElementById("brandProductCount");

    // Marcas reconocibles cuyos logotipos fueron proporcionados por A2G.
    // Se muestran aunque todavía no tengan productos cargados en el catálogo.
    const brandLogoFiles = {
        "Amaran": "assets/marcas/Amaran_idHp9IjSQ2_1.jpeg",
        "Aputure": "assets/marcas/Aputure.png",
        "BOYA": "assets/marcas/BOYA_idtmOPXA9E_1.png",
        "DJI": "assets/marcas/DJI_id5sH6ECbd_0.svg",
        "Godox": "assets/marcas/Godox.svg",
        "K&F Concept": "assets/marcas/K&F concept.png",
        "Neewer": "assets/marcas/Neewer_idi4gHwGrI_2.png",
        "SmallRig": "assets/marcas/SmallRig.svg",
        "SYNCO": "assets/marcas/SYNCO_idlBgZ4VQK_0.png",
        "Telesin": "assets/marcas/Telesin.jpg",
        "Ulanzi": "assets/marcas/Ulanzi_idTPiTTHNj_1.svg"
    };

    const catalogBrands = getBrands();
    const genericNames = ["Sin especificar", "Genéricos y sin marca"];
    const visibleBrands = [...new Set([
        ...Object.keys(brandLogoFiles),
        ...catalogBrands.filter(name => genericNames.includes(name)),
        ...catalogBrands.filter(name => !Object.keys(brandLogoFiles).includes(name) && !genericNames.includes(name))
    ])];

    if (brandCount) brandCount.textContent = visibleBrands.length;
    if (brandProductCount) brandProductCount.textContent = productos.length;

    visibleBrands.forEach(brand => {
        const products = productos.filter(product => product.marca === brand);
        const card = document.createElement("article");
        const isGeneric = genericNames.includes(brand);
        const hasProducts = products.length > 0;
        card.className = `brand-large${isGeneric ? " brand-large-generic" : ""}${!hasProducts && !isGeneric ? " brand-large-coming-soon" : ""}`;

        const logoMarkup = brandLogoFiles[brand]
            ? `<div class="brand-page-logo-wrap"><img class="brand-page-logo" src="${brandLogoFiles[brand]}" alt="Logotipo de ${brand}" loading="lazy" decoding="async"></div>`
            : `<div class="brand-page-logo-wrap brand-page-logo-placeholder" aria-hidden="true"><span>${isGeneric ? "GENÉRICO" : brand}</span></div>`;

        const status = hasProducts ? `${products.length} productos disponibles` : (isGeneric ? "Producto sin marca identificada" : "Próximamente en el catálogo");
        const buttonMarkup = hasProducts
            ? `<button class="text-button" type="button">Ver productos →</button>`
            : `<span class="brand-coming-soon-label">${isGeneric ? "Sin marca identificada" : "Sin productos en este catálogo"}</span>`;

        card.innerHTML = `
            ${logoMarkup}
            <div class="brand-page-card-info">
                <span class="eyebrow">${isGeneric ? "SIN MARCA IDENTIFICADA" : "FABRICANTE"}</span>
                <h2>${brand}</h2>
                <p>${status}</p>
                ${buttonMarkup}
            </div>
        `;

        const button = card.querySelector("button");
        if (button) {
            button.addEventListener("click", () => {
                state.marca = brand;
                state.categoria = "";
                showPage("productos");
                renderFilters();
                renderProducts();
            });
        }

        container.appendChild(card);
    });
}

/* =====================================================
   NOVEDADES
===================================================== */

function renderNews() {

    const container =
        document.getElementById(
            "newProducts"
        );


    container.innerHTML = "";


    productos
        .filter(
            product =>
                product.destacado
        )
        .forEach(product => {

            container.appendChild(
                productCard(product)
            );

        });

}


/* =====================================================
   MARCAS INICIO
===================================================== */

function renderHomeBrands() {
    const container = document.getElementById("homeBrands");
    if (!container) return;
    container.innerHTML = "";

    getBrands().slice(0, 5).forEach(brand => {
        const element = document.createElement("button");
        element.type = "button";
        element.className = "brand-item";
        element.textContent = brand;
        element.setAttribute("aria-label", `Ver productos de ${brand}`);
        element.addEventListener("click", () => {
            state.marca = brand;
            state.categoria = "";
            state.visible = 9;
            showPage("productos");
            renderFilters();
            renderProducts();
        });
        container.appendChild(element);
    });
}

/* =====================================================
   CONTEXTO DE CONSULTA DE PRODUCTO
===================================================== */
function renderContactProductContext() {
    const context = document.getElementById("contactProductContext");
    if (!context) return;
    const product = state.selectedProduct;
    if (!product) {
        context.hidden = true;
        context.innerHTML = "";
        return;
    }
    context.hidden = false;
    context.innerHTML = `
        <span>CONSULTA SOBRE PRODUCTO</span>
        <strong>${product.marca} · ${product.nombre}</strong>
        <small>Código ${product.id} · Bs. ${product.precio.toLocaleString("es-BO")}</small>
    `;
}


/* =====================================================
   FILTROS PLEGABLES EN MÓVIL
===================================================== */
const filtersToggle = document.getElementById("filtersToggle");
const filtersPanel = document.getElementById("filtersPanel");

if (filtersToggle && filtersPanel) {
    filtersToggle.addEventListener("click", () => {
        const isOpen = filtersToggle.getAttribute("aria-expanded") === "true";
        filtersToggle.setAttribute("aria-expanded", String(!isOpen));
        filtersPanel.classList.toggle("is-open", !isOpen);
    });

    // Al ampliar a escritorio, el CSS devuelve el panel a su posición normal.
    // Se limpia el estado móvil para que al volver a móvil inicie plegado.
    window.addEventListener("resize", () => {
        if (window.innerWidth > 600) {
            filtersToggle.setAttribute("aria-expanded", "false");
            filtersPanel.classList.remove("is-open");
        }
    });
}


/* =====================================================
   MENÚ MOBILE
===================================================== */

document
    .getElementById("menuToggle")
    .addEventListener(
        "click",
        () => {

            document
                .querySelector(".main-nav")
                .classList.toggle("open");

        }
    );


/* =====================================================
   INICIALIZACIÓN
===================================================== */

renderCategories();

renderFilters();

renderProducts();

renderBrandPage();

renderNews();

renderHomeBrands();

/* =====================================================
   INTRODUCCIÓN A2G · SALIDA SUAVE HACIA LA PORTADA
===================================================== */
(() => {
    const intro = document.getElementById("brandIntro");
    if (!intro) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Mantiene el logo visible brevemente y luego lo reduce hacia su posición en la portada.
    const displayDuration = reducedMotion ? 250 : 1250;
    const transitionDuration = reducedMotion ? 50 : 1500;

    window.setTimeout(() => {
        document.body.classList.add("intro-finished");
        intro.classList.add("is-leaving");
        window.setTimeout(() => intro.remove(), transitionDuration);
    }, displayDuration);
})();
