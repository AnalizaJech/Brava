export type Category = 'Bolsos' | 'Viaje' | 'Mochilas' | 'Accesorios' | 'Chaquetas' | 'Calzado';
export interface ProductImage { path: string; label: string; width: number; height: number }
export interface ColorVariant { name: string; hex: string; gallery: readonly ProductImage[] }
export interface SupplierVariant { color: string; size: string; supplierSku: string; supplierVariant: string; supplierTitle: string; supplierAvailable: boolean; supplierPriceUsd: number }
export interface Product { id: string; sku: string; name: string; brand: string; category: Category; price: number; supplierPrice: number; sourceUrl: string; color: string; colors: readonly ColorVariant[]; description: string; dimensions: string; sizes: readonly string[]; audience: string; tag?: string; live?: boolean; specs: readonly {label:string;value:string}[]; variants: readonly SupplierVariant[]; sizeChart: readonly {size:string;values:readonly {label:string;cm:number}[]}[] }
export interface CartLine { productId: string; size: string; color: string; quantity: number }
export const STORE = { name: 'BRAVA', phone: '51984119743', currency: 'PEN', maxQuantity: 5, tiktokUrl: null as string | null, complaintsUrl: null as string | null } as const;
export const PRODUCTS: readonly Product[] = [
  {
    "id": "schott-perfecto-618",
    "sku": "BV-01",
    "name": "Perfecto 618",
    "brand": "Schott N.Y.C.",
    "category": "Chaquetas",
    "price": 0,
    "supplierPrice": 1020.0,
    "sourceUrl": "https://www.schottnyc.com/products/618-classic-perfecto-steerhide-leather-motorcycle-jacket",
    "color": "Black",
    "colors": [
      {
        "name": "Black",
        "hex": "#242323",
        "gallery": [
          {
            "path": "images/products/schott-perfecto-618/0-0.webp",
            "label": "Frente · cerrada",
            "width": 2560,
            "height": 3200
          },
          {
            "path": "images/products/schott-perfecto-618/0-1.webp",
            "label": "Modelo · abierta",
            "width": 2560,
            "height": 3200
          },
          {
            "path": "images/products/schott-perfecto-618/0-2.webp",
            "label": "Modelo · cerrada",
            "width": 2560,
            "height": 3200
          },
          {
            "path": "images/products/schott-perfecto-618/0-3.webp",
            "label": "Modelo · espalda",
            "width": 2560,
            "height": 3200
          },
          {
            "path": "images/products/schott-perfecto-618/0-4.webp",
            "label": "Espalda",
            "width": 2560,
            "height": 3200
          },
          {
            "path": "images/products/schott-perfecto-618/0-5.webp",
            "label": "Forro",
            "width": 2560,
            "height": 3200
          }
        ]
      },
      {
        "name": "Brown",
        "hex": "#694433",
        "gallery": [
          {
            "path": "images/products/schott-perfecto-618/1-0.webp",
            "label": "Frente",
            "width": 2560,
            "height": 3200
          },
          {
            "path": "images/products/schott-perfecto-618/1-1.webp",
            "label": "Cuello",
            "width": 2560,
            "height": 3200
          },
          {
            "path": "images/products/schott-perfecto-618/1-2.webp",
            "label": "Modelo · frente",
            "width": 2560,
            "height": 3200
          },
          {
            "path": "images/products/schott-perfecto-618/1-3.webp",
            "label": "Modelo · espalda",
            "width": 2560,
            "height": 3200
          },
          {
            "path": "images/products/schott-perfecto-618/1-4.webp",
            "label": "Forro",
            "width": 2560,
            "height": 3200
          }
        ]
      }
    ],
    "description": "Cuero vacuno steerhide de alto gramaje. Corte biker con cinturón, cierre asimétrico y paneles de movilidad en la espalda.",
    "dimensions": "Largo nominal 63,5 cm · compara la tabla de cada talla.",
    "sizes": [
      "32",
      "34",
      "36",
      "38",
      "40",
      "42",
      "44",
      "46",
      "48",
      "50",
      "52",
      "54"
    ],
    "audience": "Hombre",
    "tag": "Por encargo · USA",
    "live": true,
    "specs": [
      {
        "label": "Marca / modelo",
        "value": "Schott N.Y.C. · 618"
      },
      {
        "label": "Selección",
        "value": "Hombre · Modelo estándar"
      },
      {
        "label": "Medidas",
        "value": "Largo nominal 63,5 cm · compara la tabla de cada talla."
      },
      {
        "label": "Material",
        "value": "Cuero vacuno · fabricación en USA."
      },
      {
        "label": "Disponibilidad",
        "value": "Selección por encargo. Stock en Perú no confirmado; sujeto a disponibilidad del proveedor."
      },
      {
        "label": "Verificación",
        "value": "Ficha oficial consultada el 7 de octubre de 2026. Medidas aproximadas."
      }
    ],
    "variants": [
      {
        "color": "Black",
        "size": "32",
        "supplierSku": "618-blk-32",
        "supplierVariant": "49851211612446",
        "supplierAvailable": true,
        "supplierPriceUsd": 1020.0,
        "supplierTitle": "Black / 32"
      },
      {
        "color": "Black",
        "size": "34",
        "supplierSku": "618-blk-34",
        "supplierVariant": "49851211645214",
        "supplierAvailable": true,
        "supplierPriceUsd": 1020.0,
        "supplierTitle": "Black / 34"
      },
      {
        "color": "Black",
        "size": "36",
        "supplierSku": "618-blk-36",
        "supplierVariant": "49851211677982",
        "supplierAvailable": true,
        "supplierPriceUsd": 1020.0,
        "supplierTitle": "Black / 36"
      },
      {
        "color": "Black",
        "size": "38",
        "supplierSku": "618-blk-38",
        "supplierVariant": "49851211710750",
        "supplierAvailable": true,
        "supplierPriceUsd": 1020.0,
        "supplierTitle": "Black / 38"
      },
      {
        "color": "Black",
        "size": "40",
        "supplierSku": "618-blk-40",
        "supplierVariant": "49851211743518",
        "supplierAvailable": true,
        "supplierPriceUsd": 1020.0,
        "supplierTitle": "Black / 40"
      },
      {
        "color": "Black",
        "size": "42",
        "supplierSku": "618-blk-42",
        "supplierVariant": "49851211776286",
        "supplierAvailable": true,
        "supplierPriceUsd": 1020.0,
        "supplierTitle": "Black / 42"
      },
      {
        "color": "Black",
        "size": "44",
        "supplierSku": "618-blk-44",
        "supplierVariant": "49851211809054",
        "supplierAvailable": true,
        "supplierPriceUsd": 1020.0,
        "supplierTitle": "Black / 44"
      },
      {
        "color": "Black",
        "size": "46",
        "supplierSku": "618-blk-46",
        "supplierVariant": "49851211841822",
        "supplierAvailable": true,
        "supplierPriceUsd": 1020.0,
        "supplierTitle": "Black / 46"
      },
      {
        "color": "Black",
        "size": "48",
        "supplierSku": "618-blk-48",
        "supplierVariant": "49851211874590",
        "supplierAvailable": true,
        "supplierPriceUsd": 1125.0,
        "supplierTitle": "Black / 48"
      },
      {
        "color": "Black",
        "size": "50",
        "supplierSku": "618-blk-50",
        "supplierVariant": "49851211907358",
        "supplierAvailable": true,
        "supplierPriceUsd": 1125.0,
        "supplierTitle": "Black / 50"
      },
      {
        "color": "Black",
        "size": "52",
        "supplierSku": "618-blk-52",
        "supplierVariant": "49851211940126",
        "supplierAvailable": true,
        "supplierPriceUsd": 1225.0,
        "supplierTitle": "Black / 52"
      },
      {
        "color": "Black",
        "size": "54",
        "supplierSku": "618-blk-54",
        "supplierVariant": "49851211972894",
        "supplierAvailable": true,
        "supplierPriceUsd": 1225.0,
        "supplierTitle": "Black / 54"
      },
      {
        "color": "Brown",
        "size": "32",
        "supplierSku": "618-brn-32",
        "supplierVariant": "49851212005662",
        "supplierAvailable": true,
        "supplierPriceUsd": 1020.0,
        "supplierTitle": "Brown / 32"
      },
      {
        "color": "Brown",
        "size": "34",
        "supplierSku": "618-brn-34",
        "supplierVariant": "49851212038430",
        "supplierAvailable": true,
        "supplierPriceUsd": 1020.0,
        "supplierTitle": "Brown / 34"
      },
      {
        "color": "Brown",
        "size": "36",
        "supplierSku": "618-brn-36",
        "supplierVariant": "49851212071198",
        "supplierAvailable": true,
        "supplierPriceUsd": 1020.0,
        "supplierTitle": "Brown / 36"
      },
      {
        "color": "Brown",
        "size": "38",
        "supplierSku": "618-brn-38",
        "supplierVariant": "49851212103966",
        "supplierAvailable": true,
        "supplierPriceUsd": 1020.0,
        "supplierTitle": "Brown / 38"
      },
      {
        "color": "Brown",
        "size": "40",
        "supplierSku": "618-brn-40",
        "supplierVariant": "49851212136734",
        "supplierAvailable": true,
        "supplierPriceUsd": 1020.0,
        "supplierTitle": "Brown / 40"
      },
      {
        "color": "Brown",
        "size": "42",
        "supplierSku": "618-brn-42",
        "supplierVariant": "49851212169502",
        "supplierAvailable": true,
        "supplierPriceUsd": 1020.0,
        "supplierTitle": "Brown / 42"
      },
      {
        "color": "Brown",
        "size": "44",
        "supplierSku": "618-brn-44",
        "supplierVariant": "49851212202270",
        "supplierAvailable": true,
        "supplierPriceUsd": 1020.0,
        "supplierTitle": "Brown / 44"
      },
      {
        "color": "Brown",
        "size": "46",
        "supplierSku": "618-brn-46",
        "supplierVariant": "49851212235038",
        "supplierAvailable": true,
        "supplierPriceUsd": 1020.0,
        "supplierTitle": "Brown / 46"
      },
      {
        "color": "Brown",
        "size": "48",
        "supplierSku": "618-brn-48",
        "supplierVariant": "49851212267806",
        "supplierAvailable": true,
        "supplierPriceUsd": 1125.0,
        "supplierTitle": "Brown / 48"
      },
      {
        "color": "Brown",
        "size": "50",
        "supplierSku": "618-brn-50",
        "supplierVariant": "49851212300574",
        "supplierAvailable": true,
        "supplierPriceUsd": 1125.0,
        "supplierTitle": "Brown / 50"
      },
      {
        "color": "Brown",
        "size": "52",
        "supplierSku": "618-brn-52",
        "supplierVariant": "49851212333342",
        "supplierAvailable": true,
        "supplierPriceUsd": 1225.0,
        "supplierTitle": "Brown / 52"
      },
      {
        "color": "Brown",
        "size": "54",
        "supplierSku": "618-brn-54",
        "supplierVariant": "49851212366110",
        "supplierAvailable": true,
        "supplierPriceUsd": 1225.0,
        "supplierTitle": "Brown / 54"
      }
    ],
    "sizeChart": [
      {
        "size": "32",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 48.3
          },
          {
            "label": "Hombros",
            "cm": 38.7
          },
          {
            "label": "Manga",
            "cm": 82.5
          },
          {
            "label": "Largo espalda",
            "cm": 61.0
          }
        ]
      },
      {
        "size": "34",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 48.3
          },
          {
            "label": "Hombros",
            "cm": 40.6
          },
          {
            "label": "Manga",
            "cm": 83.8
          },
          {
            "label": "Largo espalda",
            "cm": 61.0
          }
        ]
      },
      {
        "size": "36",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 50.8
          },
          {
            "label": "Hombros",
            "cm": 42.5
          },
          {
            "label": "Manga",
            "cm": 85.1
          },
          {
            "label": "Largo espalda",
            "cm": 61.0
          }
        ]
      },
      {
        "size": "38",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 53.3
          },
          {
            "label": "Hombros",
            "cm": 44.5
          },
          {
            "label": "Manga",
            "cm": 86.4
          },
          {
            "label": "Largo espalda",
            "cm": 61.0
          }
        ]
      },
      {
        "size": "40",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 55.9
          },
          {
            "label": "Hombros",
            "cm": 46.4
          },
          {
            "label": "Manga",
            "cm": 87.6
          },
          {
            "label": "Largo espalda",
            "cm": 63.5
          }
        ]
      },
      {
        "size": "42",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 58.4
          },
          {
            "label": "Hombros",
            "cm": 48.3
          },
          {
            "label": "Manga",
            "cm": 88.9
          },
          {
            "label": "Largo espalda",
            "cm": 63.5
          }
        ]
      },
      {
        "size": "44",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 61.0
          },
          {
            "label": "Hombros",
            "cm": 50.2
          },
          {
            "label": "Manga",
            "cm": 90.2
          },
          {
            "label": "Largo espalda",
            "cm": 63.5
          }
        ]
      },
      {
        "size": "46",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 63.5
          },
          {
            "label": "Hombros",
            "cm": 52.1
          },
          {
            "label": "Manga",
            "cm": 91.4
          },
          {
            "label": "Largo espalda",
            "cm": 66.0
          }
        ]
      },
      {
        "size": "48",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 66.0
          },
          {
            "label": "Hombros",
            "cm": 54.0
          },
          {
            "label": "Manga",
            "cm": 92.7
          },
          {
            "label": "Largo espalda",
            "cm": 66.0
          }
        ]
      },
      {
        "size": "50",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 68.6
          },
          {
            "label": "Hombros",
            "cm": 55.9
          },
          {
            "label": "Manga",
            "cm": 94.0
          },
          {
            "label": "Largo espalda",
            "cm": 68.6
          }
        ]
      },
      {
        "size": "52",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 71.1
          },
          {
            "label": "Hombros",
            "cm": 57.8
          },
          {
            "label": "Manga",
            "cm": 95.2
          },
          {
            "label": "Largo espalda",
            "cm": 68.6
          }
        ]
      },
      {
        "size": "54",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 73.7
          },
          {
            "label": "Hombros",
            "cm": 59.7
          },
          {
            "label": "Manga",
            "cm": 96.5
          },
          {
            "label": "Largo espalda",
            "cm": 68.6
          }
        ]
      }
    ]
  },
  {
    "id": "schott-racer-141",
    "sku": "BV-02",
    "name": "Café Racer 141",
    "brand": "Schott N.Y.C.",
    "category": "Chaquetas",
    "price": 0,
    "supplierPrice": 1060.0,
    "sourceUrl": "https://www.schottnyc.com/products/141-classic-racer-leather-motorcycle-jacket",
    "color": "Black",
    "colors": [
      {
        "name": "Black",
        "hex": "#242323",
        "gallery": [
          {
            "path": "images/products/schott-racer-141/0-0.webp",
            "label": "Frente · cerrada",
            "width": 2560,
            "height": 3200
          },
          {
            "path": "images/products/schott-racer-141/0-1.webp",
            "label": "Modelo · abierta",
            "width": 2560,
            "height": 3200
          },
          {
            "path": "images/products/schott-racer-141/0-2.webp",
            "label": "Modelo · cerrada",
            "width": 2560,
            "height": 3200
          },
          {
            "path": "images/products/schott-racer-141/0-3.webp",
            "label": "Modelo · espalda",
            "width": 2560,
            "height": 3200
          },
          {
            "path": "images/products/schott-racer-141/0-4.webp",
            "label": "Espalda",
            "width": 2560,
            "height": 3200
          },
          {
            "path": "images/products/schott-racer-141/0-5.webp",
            "label": "Ajuste lateral",
            "width": 2560,
            "height": 3200
          }
        ]
      },
      {
        "name": "Brown",
        "hex": "#694433",
        "gallery": [
          {
            "path": "images/products/schott-racer-141/1-0.webp",
            "label": "Frente · cerrada",
            "width": 2560,
            "height": 3200
          },
          {
            "path": "images/products/schott-racer-141/1-1.webp",
            "label": "Modelo · abierta",
            "width": 2560,
            "height": 3200
          },
          {
            "path": "images/products/schott-racer-141/1-2.webp",
            "label": "Modelo · cerrada",
            "width": 2560,
            "height": 3200
          },
          {
            "path": "images/products/schott-racer-141/1-3.webp",
            "label": "Modelo · espalda",
            "width": 2560,
            "height": 3200
          },
          {
            "path": "images/products/schott-racer-141/1-4.webp",
            "label": "Espalda",
            "width": 2560,
            "height": 3200
          },
          {
            "path": "images/products/schott-racer-141/1-5.webp",
            "label": "Ajuste lateral",
            "width": 2560,
            "height": 3200
          }
        ]
      }
    ],
    "description": "Cuero vacuno naked cowhide. Cuello con broche, puños con cremallera y forro térmico extraíble para ajustar el abrigo.",
    "dimensions": "Versión Regular · largo nominal 66 cm; varía según talla.",
    "sizes": [
      "32",
      "34",
      "36",
      "38",
      "40",
      "42",
      "44",
      "46",
      "48",
      "50",
      "52",
      "54"
    ],
    "audience": "Hombre",
    "tag": "Por encargo · USA",
    "live": false,
    "specs": [
      {
        "label": "Marca / modelo",
        "value": "Schott N.Y.C. · 141"
      },
      {
        "label": "Selección",
        "value": "Hombre · Length: 26\" (Regular)"
      },
      {
        "label": "Medidas",
        "value": "Versión Regular · largo nominal 66 cm; varía según talla."
      },
      {
        "label": "Material",
        "value": "Cuero vacuno · fabricación en USA."
      },
      {
        "label": "Disponibilidad",
        "value": "Selección por encargo. Stock en Perú no confirmado; sujeto a disponibilidad del proveedor."
      },
      {
        "label": "Verificación",
        "value": "Ficha oficial consultada el 7 de octubre de 2026. Medidas aproximadas."
      }
    ],
    "variants": [
      {
        "color": "Black",
        "size": "32",
        "supplierSku": "141-blk-32",
        "supplierVariant": "49851188085022",
        "supplierAvailable": true,
        "supplierPriceUsd": 1060.0,
        "supplierTitle": "26\" (Regular) / Black / 32"
      },
      {
        "color": "Black",
        "size": "34",
        "supplierSku": "141-blk-34",
        "supplierVariant": "49851188117790",
        "supplierAvailable": true,
        "supplierPriceUsd": 1060.0,
        "supplierTitle": "26\" (Regular) / Black / 34"
      },
      {
        "color": "Black",
        "size": "36",
        "supplierSku": "141-blk-36",
        "supplierVariant": "49851188150558",
        "supplierAvailable": true,
        "supplierPriceUsd": 1060.0,
        "supplierTitle": "26\" (Regular) / Black / 36"
      },
      {
        "color": "Black",
        "size": "38",
        "supplierSku": "141-blk-38",
        "supplierVariant": "49851188183326",
        "supplierAvailable": true,
        "supplierPriceUsd": 1060.0,
        "supplierTitle": "26\" (Regular) / Black / 38"
      },
      {
        "color": "Black",
        "size": "40",
        "supplierSku": "141-blk-40",
        "supplierVariant": "49851188216094",
        "supplierAvailable": true,
        "supplierPriceUsd": 1060.0,
        "supplierTitle": "26\" (Regular) / Black / 40"
      },
      {
        "color": "Black",
        "size": "42",
        "supplierSku": "141-blk-42",
        "supplierVariant": "49851188248862",
        "supplierAvailable": true,
        "supplierPriceUsd": 1060.0,
        "supplierTitle": "26\" (Regular) / Black / 42"
      },
      {
        "color": "Black",
        "size": "44",
        "supplierSku": "141-blk-44",
        "supplierVariant": "49851188281630",
        "supplierAvailable": true,
        "supplierPriceUsd": 1060.0,
        "supplierTitle": "26\" (Regular) / Black / 44"
      },
      {
        "color": "Black",
        "size": "46",
        "supplierSku": "141-blk-46",
        "supplierVariant": "49851188314398",
        "supplierAvailable": true,
        "supplierPriceUsd": 1060.0,
        "supplierTitle": "26\" (Regular) / Black / 46"
      },
      {
        "color": "Black",
        "size": "48",
        "supplierSku": "141-blk-48",
        "supplierVariant": "49851188347166",
        "supplierAvailable": true,
        "supplierPriceUsd": 1170.0,
        "supplierTitle": "26\" (Regular) / Black / 48"
      },
      {
        "color": "Black",
        "size": "50",
        "supplierSku": "141-blk-50",
        "supplierVariant": "49851188379934",
        "supplierAvailable": true,
        "supplierPriceUsd": 1170.0,
        "supplierTitle": "26\" (Regular) / Black / 50"
      },
      {
        "color": "Black",
        "size": "52",
        "supplierSku": "141-blk-52",
        "supplierVariant": "49851188412702",
        "supplierAvailable": true,
        "supplierPriceUsd": 1280.0,
        "supplierTitle": "26\" (Regular) / Black / 52"
      },
      {
        "color": "Black",
        "size": "54",
        "supplierSku": "141-blk-54",
        "supplierVariant": "49851188445470",
        "supplierAvailable": true,
        "supplierPriceUsd": 1280.0,
        "supplierTitle": "26\" (Regular) / Black / 54"
      },
      {
        "color": "Brown",
        "size": "32",
        "supplierSku": "141-brn-32",
        "supplierVariant": "50102774792478",
        "supplierAvailable": false,
        "supplierPriceUsd": 1060.0,
        "supplierTitle": "26\" (Regular) / Brown / 32"
      },
      {
        "color": "Brown",
        "size": "34",
        "supplierSku": "141-brn-34",
        "supplierVariant": "49851188511006",
        "supplierAvailable": true,
        "supplierPriceUsd": 1060.0,
        "supplierTitle": "26\" (Regular) / Brown / 34"
      },
      {
        "color": "Brown",
        "size": "36",
        "supplierSku": "141-brn-36",
        "supplierVariant": "49851188543774",
        "supplierAvailable": true,
        "supplierPriceUsd": 1060.0,
        "supplierTitle": "26\" (Regular) / Brown / 36"
      },
      {
        "color": "Brown",
        "size": "38",
        "supplierSku": "141-brn-38",
        "supplierVariant": "49851188576542",
        "supplierAvailable": true,
        "supplierPriceUsd": 1060.0,
        "supplierTitle": "26\" (Regular) / Brown / 38"
      },
      {
        "color": "Brown",
        "size": "40",
        "supplierSku": "141-brn-40",
        "supplierVariant": "49851188609310",
        "supplierAvailable": true,
        "supplierPriceUsd": 1060.0,
        "supplierTitle": "26\" (Regular) / Brown / 40"
      },
      {
        "color": "Brown",
        "size": "42",
        "supplierSku": "141-brn-42",
        "supplierVariant": "49851188642078",
        "supplierAvailable": true,
        "supplierPriceUsd": 1060.0,
        "supplierTitle": "26\" (Regular) / Brown / 42"
      },
      {
        "color": "Brown",
        "size": "44",
        "supplierSku": "141-brn-44",
        "supplierVariant": "49851188674846",
        "supplierAvailable": true,
        "supplierPriceUsd": 1060.0,
        "supplierTitle": "26\" (Regular) / Brown / 44"
      },
      {
        "color": "Brown",
        "size": "46",
        "supplierSku": "141-brn-46",
        "supplierVariant": "49851188707614",
        "supplierAvailable": true,
        "supplierPriceUsd": 1060.0,
        "supplierTitle": "26\" (Regular) / Brown / 46"
      },
      {
        "color": "Brown",
        "size": "48",
        "supplierSku": "141-brn-48",
        "supplierVariant": "49851188740382",
        "supplierAvailable": true,
        "supplierPriceUsd": 1170.0,
        "supplierTitle": "26\" (Regular) / Brown / 48"
      },
      {
        "color": "Brown",
        "size": "50",
        "supplierSku": "141-brn-50",
        "supplierVariant": "49851188773150",
        "supplierAvailable": true,
        "supplierPriceUsd": 1170.0,
        "supplierTitle": "26\" (Regular) / Brown / 50"
      },
      {
        "color": "Brown",
        "size": "52",
        "supplierSku": "141-brn-52",
        "supplierVariant": "49851188805918",
        "supplierAvailable": true,
        "supplierPriceUsd": 1280.0,
        "supplierTitle": "26\" (Regular) / Brown / 52"
      },
      {
        "color": "Brown",
        "size": "54",
        "supplierSku": "141-brn-54",
        "supplierVariant": "49851188838686",
        "supplierAvailable": true,
        "supplierPriceUsd": 1280.0,
        "supplierTitle": "26\" (Regular) / Brown / 54"
      }
    ],
    "sizeChart": [
      {
        "size": "32",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 50.8
          },
          {
            "label": "Hombros",
            "cm": 42.9
          },
          {
            "label": "Manga",
            "cm": 61.0
          },
          {
            "label": "Largo espalda",
            "cm": 63.5
          }
        ]
      },
      {
        "size": "34",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 53.3
          },
          {
            "label": "Hombros",
            "cm": 44.5
          },
          {
            "label": "Manga",
            "cm": 61.6
          },
          {
            "label": "Largo espalda",
            "cm": 63.5
          }
        ]
      },
      {
        "size": "36",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 55.9
          },
          {
            "label": "Hombros",
            "cm": 46.0
          },
          {
            "label": "Manga",
            "cm": 62.2
          },
          {
            "label": "Largo espalda",
            "cm": 63.5
          }
        ]
      },
      {
        "size": "38",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 58.4
          },
          {
            "label": "Hombros",
            "cm": 47.6
          },
          {
            "label": "Manga",
            "cm": 62.9
          },
          {
            "label": "Largo espalda",
            "cm": 63.5
          }
        ]
      },
      {
        "size": "40",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 61.0
          },
          {
            "label": "Hombros",
            "cm": 49.2
          },
          {
            "label": "Manga",
            "cm": 63.5
          },
          {
            "label": "Largo espalda",
            "cm": 66.0
          }
        ]
      },
      {
        "size": "42",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 63.5
          },
          {
            "label": "Hombros",
            "cm": 50.8
          },
          {
            "label": "Manga",
            "cm": 64.1
          },
          {
            "label": "Largo espalda",
            "cm": 66.0
          }
        ]
      },
      {
        "size": "44",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 66.0
          },
          {
            "label": "Hombros",
            "cm": 52.4
          },
          {
            "label": "Manga",
            "cm": 64.8
          },
          {
            "label": "Largo espalda",
            "cm": 66.0
          }
        ]
      },
      {
        "size": "46",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 68.6
          },
          {
            "label": "Hombros",
            "cm": 54.0
          },
          {
            "label": "Manga",
            "cm": 65.4
          },
          {
            "label": "Largo espalda",
            "cm": 66.0
          }
        ]
      },
      {
        "size": "48",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 71.1
          },
          {
            "label": "Hombros",
            "cm": 55.6
          },
          {
            "label": "Manga",
            "cm": 66.0
          },
          {
            "label": "Largo espalda",
            "cm": 68.6
          }
        ]
      },
      {
        "size": "50",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 73.7
          },
          {
            "label": "Hombros",
            "cm": 57.1
          },
          {
            "label": "Manga",
            "cm": 66.7
          },
          {
            "label": "Largo espalda",
            "cm": 68.6
          }
        ]
      },
      {
        "size": "52",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 76.2
          },
          {
            "label": "Hombros",
            "cm": 58.7
          },
          {
            "label": "Manga",
            "cm": 67.3
          },
          {
            "label": "Largo espalda",
            "cm": 68.6
          }
        ]
      },
      {
        "size": "54",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 78.7
          },
          {
            "label": "Hombros",
            "cm": 60.3
          },
          {
            "label": "Manga",
            "cm": 67.9
          },
          {
            "label": "Largo espalda",
            "cm": 68.6
          }
        ]
      }
    ]
  },
  {
    "id": "schott-perfecto-626vnw",
    "sku": "BV-03",
    "name": "Perfecto 626VNW",
    "brand": "Schott N.Y.C.",
    "category": "Chaquetas",
    "price": 0,
    "supplierPrice": 1075.0,
    "sourceUrl": "https://www.schottnyc.com/products/626vnw-women-s-vintaged-cowhide-motorcycle-jacket",
    "color": "Black",
    "colors": [
      {
        "name": "Black",
        "hex": "#242323",
        "gallery": [
          {
            "path": "images/products/schott-perfecto-626vnw/0-0.webp",
            "label": "Frente · cerrada",
            "width": 2560,
            "height": 3200
          },
          {
            "path": "images/products/schott-perfecto-626vnw/0-1.webp",
            "label": "Modelo · cerrada",
            "width": 2550,
            "height": 3300
          },
          {
            "path": "images/products/schott-perfecto-626vnw/0-2.webp",
            "label": "Modelo · abierta",
            "width": 2550,
            "height": 3300
          },
          {
            "path": "images/products/schott-perfecto-626vnw/0-3.webp",
            "label": "Espalda",
            "width": 2560,
            "height": 3200
          },
          {
            "path": "images/products/schott-perfecto-626vnw/0-4.webp",
            "label": "Modelo · espalda",
            "width": 2550,
            "height": 3300
          },
          {
            "path": "images/products/schott-perfecto-626vnw/0-5.webp",
            "label": "Detalle de cierre",
            "width": 2560,
            "height": 3200
          }
        ]
      }
    ],
    "description": "Cuero vacuno con acabado envejecido, tres bolsillos con cierre, medio cinturón y forro negro satinado.",
    "dimensions": "Largo nominal 57,2 cm · medidas de la prenda en la tabla.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "audience": "Mujer",
    "tag": "Por encargo · USA",
    "live": true,
    "specs": [
      {
        "label": "Marca / modelo",
        "value": "Schott N.Y.C. · 626VNW"
      },
      {
        "label": "Selección",
        "value": "Mujer · Modelo estándar"
      },
      {
        "label": "Medidas",
        "value": "Largo nominal 57,2 cm · medidas de la prenda en la tabla."
      },
      {
        "label": "Material",
        "value": "Cuero vacuno · fabricación en USA."
      },
      {
        "label": "Disponibilidad",
        "value": "Selección por encargo. Stock en Perú no confirmado; sujeto a disponibilidad del proveedor."
      },
      {
        "label": "Verificación",
        "value": "Ficha oficial consultada el 7 de octubre de 2026. Medidas aproximadas."
      }
    ],
    "variants": [
      {
        "color": "Black",
        "size": "XS",
        "supplierSku": "626vnw-blk-xs",
        "supplierVariant": "49738322968862",
        "supplierAvailable": true,
        "supplierPriceUsd": 1075.0,
        "supplierTitle": "Black / XS"
      },
      {
        "color": "Black",
        "size": "S",
        "supplierSku": "626vnw-blk-s",
        "supplierVariant": "49738323001630",
        "supplierAvailable": true,
        "supplierPriceUsd": 1075.0,
        "supplierTitle": "Black / S"
      },
      {
        "color": "Black",
        "size": "M",
        "supplierSku": "626vnw-blk-m",
        "supplierVariant": "49738323034398",
        "supplierAvailable": true,
        "supplierPriceUsd": 1075.0,
        "supplierTitle": "Black / M"
      },
      {
        "color": "Black",
        "size": "L",
        "supplierSku": "626vnw-blk-l",
        "supplierVariant": "49738323067166",
        "supplierAvailable": true,
        "supplierPriceUsd": 1075.0,
        "supplierTitle": "Black / L"
      },
      {
        "color": "Black",
        "size": "XL",
        "supplierSku": "626vnw-blk-xl",
        "supplierVariant": "49738323099934",
        "supplierAvailable": true,
        "supplierPriceUsd": 1075.0,
        "supplierTitle": "Black / XL"
      },
      {
        "color": "Black",
        "size": "2XL",
        "supplierSku": "626vnw-blk-2xl",
        "supplierVariant": "49738323132702",
        "supplierAvailable": true,
        "supplierPriceUsd": 1075.0,
        "supplierTitle": "Black / 2XL"
      }
    ],
    "sizeChart": [
      {
        "size": "XS",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 45.1
          },
          {
            "label": "Hombros",
            "cm": 36.5
          },
          {
            "label": "Manga",
            "cm": 59.7
          },
          {
            "label": "Largo espalda",
            "cm": 55.9
          }
        ]
      },
      {
        "size": "S",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 47.6
          },
          {
            "label": "Hombros",
            "cm": 38.1
          },
          {
            "label": "Manga",
            "cm": 60.3
          },
          {
            "label": "Largo espalda",
            "cm": 57.1
          }
        ]
      },
      {
        "size": "M",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 504.8
          },
          {
            "label": "Hombros",
            "cm": 39.7
          },
          {
            "label": "Manga",
            "cm": 61.0
          },
          {
            "label": "Largo espalda",
            "cm": 57.1
          }
        ]
      },
      {
        "size": "L",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 53.3
          },
          {
            "label": "Hombros",
            "cm": 41.6
          },
          {
            "label": "Manga",
            "cm": 61.6
          },
          {
            "label": "Largo espalda",
            "cm": 59.7
          }
        ]
      },
      {
        "size": "XL",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 56.5
          },
          {
            "label": "Hombros",
            "cm": 43.5
          },
          {
            "label": "Manga",
            "cm": 62.2
          },
          {
            "label": "Largo espalda",
            "cm": 59.7
          }
        ]
      },
      {
        "size": "2XL",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 59.7
          },
          {
            "label": "Hombros",
            "cm": 45.4
          },
          {
            "label": "Manga",
            "cm": 62.9
          },
          {
            "label": "Largo espalda",
            "cm": 59.7
          }
        ]
      }
    ]
  },
  {
    "id": "schott-perfecto-137w",
    "sku": "BV-04",
    "name": "Perfecto 137W",
    "brand": "Schott N.Y.C.",
    "category": "Chaquetas",
    "price": 0,
    "supplierPrice": 970.0,
    "sourceUrl": "https://www.schottnyc.com/products/137w-women-s-leather-motorcycle-jacket",
    "color": "Black",
    "colors": [
      {
        "name": "Black",
        "hex": "#242323",
        "gallery": [
          {
            "path": "images/products/schott-perfecto-137w/0-0.webp",
            "label": "Frente · cerrada",
            "width": 2560,
            "height": 3200
          },
          {
            "path": "images/products/schott-perfecto-137w/0-1.webp",
            "label": "Modelo · frente",
            "width": 2560,
            "height": 3200
          },
          {
            "path": "images/products/schott-perfecto-137w/0-2.webp",
            "label": "Modelo · perfil",
            "width": 2560,
            "height": 3200
          },
          {
            "path": "images/products/schott-perfecto-137w/0-3.webp",
            "label": "Modelo · espalda",
            "width": 2560,
            "height": 3200
          },
          {
            "path": "images/products/schott-perfecto-137w/0-4.webp",
            "label": "Espalda",
            "width": 2560,
            "height": 3200
          },
          {
            "path": "images/products/schott-perfecto-137w/0-5.webp",
            "label": "Interior",
            "width": 2560,
            "height": 3200
          }
        ]
      }
    ],
    "description": "Cuero vacuno de plena flor, cierre asimétrico, medio cinturón y espalda con paneles de movimiento. Forro acolchado en rombos.",
    "dimensions": "Largo nominal 58,4 cm · compara la tabla por talla.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "audience": "Mujer",
    "tag": "Por encargo · USA",
    "live": false,
    "specs": [
      {
        "label": "Marca / modelo",
        "value": "Schott N.Y.C. · 137W"
      },
      {
        "label": "Selección",
        "value": "Mujer · Modelo estándar"
      },
      {
        "label": "Medidas",
        "value": "Largo nominal 58,4 cm · compara la tabla por talla."
      },
      {
        "label": "Material",
        "value": "Cuero vacuno · fabricación en USA."
      },
      {
        "label": "Disponibilidad",
        "value": "Selección por encargo. Stock en Perú no confirmado; sujeto a disponibilidad del proveedor."
      },
      {
        "label": "Verificación",
        "value": "Ficha oficial consultada el 7 de octubre de 2026. Medidas aproximadas."
      }
    ],
    "variants": [
      {
        "color": "Black",
        "size": "XS",
        "supplierSku": "137w-blk-xs",
        "supplierVariant": "49738338795806",
        "supplierAvailable": true,
        "supplierPriceUsd": 970.0,
        "supplierTitle": "Black / XS"
      },
      {
        "color": "Black",
        "size": "S",
        "supplierSku": "137w-blk-s",
        "supplierVariant": "49738338828574",
        "supplierAvailable": true,
        "supplierPriceUsd": 970.0,
        "supplierTitle": "Black / S"
      },
      {
        "color": "Black",
        "size": "M",
        "supplierSku": "137w-blk-m",
        "supplierVariant": "49738338861342",
        "supplierAvailable": true,
        "supplierPriceUsd": 970.0,
        "supplierTitle": "Black / M"
      },
      {
        "color": "Black",
        "size": "L",
        "supplierSku": "137w-blk-l",
        "supplierVariant": "49738338894110",
        "supplierAvailable": true,
        "supplierPriceUsd": 970.0,
        "supplierTitle": "Black / L"
      },
      {
        "color": "Black",
        "size": "XL",
        "supplierSku": "137w-blk-xl",
        "supplierVariant": "49738338926878",
        "supplierAvailable": true,
        "supplierPriceUsd": 970.0,
        "supplierTitle": "Black / XL"
      },
      {
        "color": "Black",
        "size": "2XL",
        "supplierSku": "137w-blk-2xl",
        "supplierVariant": "49738338959646",
        "supplierAvailable": true,
        "supplierPriceUsd": 970.0,
        "supplierTitle": "Black / 2XL"
      }
    ],
    "sizeChart": [
      {
        "size": "XS",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 44.5
          },
          {
            "label": "Hombros",
            "cm": 36.8
          },
          {
            "label": "Manga",
            "cm": 59.1
          },
          {
            "label": "Largo espalda",
            "cm": 58.4
          }
        ]
      },
      {
        "size": "S",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 47.0
          },
          {
            "label": "Hombros",
            "cm": 38.4
          },
          {
            "label": "Manga",
            "cm": 59.1
          },
          {
            "label": "Largo espalda",
            "cm": 58.4
          }
        ]
      },
      {
        "size": "M",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 49.5
          },
          {
            "label": "Hombros",
            "cm": 40.0
          },
          {
            "label": "Manga",
            "cm": 60.3
          },
          {
            "label": "Largo espalda",
            "cm": 58.4
          }
        ]
      },
      {
        "size": "L",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 52.7
          },
          {
            "label": "Hombros",
            "cm": 41.9
          },
          {
            "label": "Manga",
            "cm": 61.0
          },
          {
            "label": "Largo espalda",
            "cm": 61.0
          }
        ]
      },
      {
        "size": "XL",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 55.9
          },
          {
            "label": "Hombros",
            "cm": 43.8
          },
          {
            "label": "Manga",
            "cm": 61.6
          },
          {
            "label": "Largo espalda",
            "cm": 61.0
          }
        ]
      },
      {
        "size": "2XL",
        "values": [
          {
            "label": "Pecho plano",
            "cm": 59.1
          },
          {
            "label": "Hombros",
            "cm": 45.7
          },
          {
            "label": "Manga",
            "cm": 62.2
          },
          {
            "label": "Largo espalda",
            "cm": 61.0
          }
        ]
      }
    ]
  },
  {
    "id": "portland-crossbody",
    "sku": "BV-05",
    "name": "Crossbody Tote",
    "brand": "Portland Leather Goods",
    "category": "Bolsos",
    "price": 0,
    "supplierPrice": 240.0,
    "sourceUrl": "https://www.portlandleathergoods.com/products/crossbody-tote",
    "color": "Honey",
    "colors": [
      {
        "name": "Honey",
        "hex": "#ba8245",
        "gallery": [
          {
            "path": "images/products/portland-crossbody/0-0.webp",
            "label": "Frente",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-crossbody/0-1.webp",
            "label": "Perfil",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-crossbody/0-2.webp",
            "label": "Abierta · interior",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-crossbody/0-3.webp",
            "label": "Con modelo",
            "width": 1400,
            "height": 1400
          }
        ]
      },
      {
        "name": "Black",
        "hex": "#242323",
        "gallery": [
          {
            "path": "images/products/portland-crossbody/1-0.webp",
            "label": "Frente",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-crossbody/1-1.webp",
            "label": "Perfil",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-crossbody/1-2.webp",
            "label": "Abierta · interior",
            "width": 1600,
            "height": 1600
          },
          {
            "path": "images/products/portland-crossbody/1-3.webp",
            "label": "Con modelo",
            "width": 1400,
            "height": 1400
          }
        ]
      }
    ],
    "description": "Tote con cremallera, bolsillo interior y exterior. Correa cruzada regulable y desmontable, además de asas dobles.",
    "dimensions": "Boca máx. 35,6 · base 27,9 · alto 33 · fondo 12,7 cm. Correa 104,1–124,5 cm.",
    "sizes": [
      "Única"
    ],
    "audience": "Unisex",
    "tag": "Por encargo · USA",
    "live": true,
    "specs": [
      {
        "label": "Marca / modelo",
        "value": "Portland Leather Goods · Crossbody Tote"
      },
      {
        "label": "Selección",
        "value": "Unisex · Style: Zipper"
      },
      {
        "label": "Medidas",
        "value": "Boca máx. 35,6 · base 27,9 · alto 33 · fondo 12,7 cm. Correa 104,1–124,5 cm."
      },
      {
        "label": "Material",
        "value": "Cuero de plena flor. País de venta: USA; fabricación no verificada en esta ficha."
      },
      {
        "label": "Disponibilidad",
        "value": "Selección por encargo. Stock en Perú no confirmado; sujeto a disponibilidad del proveedor."
      },
      {
        "label": "Verificación",
        "value": "Ficha oficial consultada el 7 de octubre de 2026. Medidas aproximadas."
      }
    ],
    "variants": [
      {
        "color": "Black",
        "size": "Única",
        "supplierSku": "XBOD-BLK-ZIP",
        "supplierVariant": "33023275696210",
        "supplierAvailable": false,
        "supplierPriceUsd": 240.0,
        "supplierTitle": "Black / Zipper"
      },
      {
        "color": "Honey",
        "size": "Única",
        "supplierSku": "XBOD-HNY-ZIP",
        "supplierVariant": "33023275565138",
        "supplierAvailable": false,
        "supplierPriceUsd": 240.0,
        "supplierTitle": "Honey / Zipper"
      }
    ],
    "sizeChart": []
  },
  {
    "id": "portland-mini",
    "sku": "BV-06",
    "name": "Mini Crossbody Tote",
    "brand": "Portland Leather Goods",
    "category": "Bolsos",
    "price": 0,
    "supplierPrice": 152.0,
    "sourceUrl": "https://www.portlandleathergoods.com/products/mini-crossbody-tote",
    "color": "Honey",
    "colors": [
      {
        "name": "Honey",
        "hex": "#ba8245",
        "gallery": [
          {
            "path": "images/products/portland-mini/0-0.webp",
            "label": "Frente",
            "width": 1400,
            "height": 1400
          }
        ]
      },
      {
        "name": "Black",
        "hex": "#242323",
        "gallery": [
          {
            "path": "images/products/portland-mini/1-0.webp",
            "label": "Frente",
            "width": 1400,
            "height": 1400
          }
        ]
      }
    ],
    "description": "Formato compacto con bolsillo exterior y cremallera. Correa desmontable para llevar al hombro o cruzada.",
    "dimensions": "Boca 30,5 · base 24,1 · alto 22,9 · fondo 11,4 cm. Correa 99,1–121,9 cm.",
    "sizes": [
      "Única"
    ],
    "audience": "Unisex",
    "tag": "Por encargo · USA",
    "live": true,
    "specs": [
      {
        "label": "Marca / modelo",
        "value": "Portland Leather Goods · Mini Crossbody Tote"
      },
      {
        "label": "Selección",
        "value": "Unisex · Style: Zipper"
      },
      {
        "label": "Medidas",
        "value": "Boca 30,5 · base 24,1 · alto 22,9 · fondo 11,4 cm. Correa 99,1–121,9 cm."
      },
      {
        "label": "Material",
        "value": "Cuero de plena flor. País de venta: USA; fabricación no verificada en esta ficha."
      },
      {
        "label": "Disponibilidad",
        "value": "Selección por encargo. Stock en Perú no confirmado; sujeto a disponibilidad del proveedor."
      },
      {
        "label": "Verificación",
        "value": "Ficha oficial consultada el 7 de octubre de 2026. Medidas aproximadas."
      }
    ],
    "variants": [
      {
        "color": "Honey",
        "size": "Única",
        "supplierSku": "XBOD-HNY-MIZ",
        "supplierVariant": "39653361909842",
        "supplierAvailable": true,
        "supplierPriceUsd": 152.0,
        "supplierTitle": "Honey / Zipper"
      },
      {
        "color": "Black",
        "size": "Única",
        "supplierSku": "XBOD-BLK-MIZ",
        "supplierVariant": "39653364236370",
        "supplierAvailable": true,
        "supplierPriceUsd": 152.0,
        "supplierTitle": "Black / Zipper"
      }
    ],
    "sizeChart": []
  },
  {
    "id": "portland-classic",
    "sku": "BV-07",
    "name": "Classic Tote · Large",
    "brand": "Portland Leather Goods",
    "category": "Bolsos",
    "price": 0,
    "supplierPrice": 196.0,
    "sourceUrl": "https://www.portlandleathergoods.com/products/classic-tote",
    "color": "Honey",
    "colors": [
      {
        "name": "Honey",
        "hex": "#ba8245",
        "gallery": [
          {
            "path": "images/products/portland-classic/0-0.webp",
            "label": "Frente",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-classic/0-1.webp",
            "label": "Perfil",
            "width": 1400,
            "height": 1400
          }
        ]
      },
      {
        "name": "Black",
        "hex": "#242323",
        "gallery": [
          {
            "path": "images/products/portland-classic/1-0.webp",
            "label": "Frente",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-classic/1-1.webp",
            "label": "Perfil",
            "width": 1400,
            "height": 1400
          }
        ]
      }
    ],
    "description": "Tote de cuero con cierre superior, asas de cuero English Bridle y bolsillos interior y exterior. Incluye lazo para llaves.",
    "dimensions": "Versión Large con cremallera. Consulta las medidas oficiales del modelo en la fuente.",
    "sizes": [
      "Única"
    ],
    "audience": "Unisex",
    "tag": "Por encargo · USA",
    "live": false,
    "specs": [
      {
        "label": "Marca / modelo",
        "value": "Portland Leather Goods · Leather Tote Bag"
      },
      {
        "label": "Selección",
        "value": "Unisex · Style: Zipper / Size: Large"
      },
      {
        "label": "Medidas",
        "value": "Versión Large con cremallera. Consulta las medidas oficiales del modelo en la fuente."
      },
      {
        "label": "Material",
        "value": "Cuero de plena flor. País de venta: USA; fabricación no verificada en esta ficha."
      },
      {
        "label": "Disponibilidad",
        "value": "Selección por encargo. Stock en Perú no confirmado; sujeto a disponibilidad del proveedor."
      },
      {
        "label": "Verificación",
        "value": "Ficha oficial consultada el 7 de octubre de 2026. Medidas aproximadas."
      }
    ],
    "variants": [
      {
        "color": "Honey",
        "size": "Única",
        "supplierSku": "TOTE-HNY-LG-Z",
        "supplierVariant": "39356394209362",
        "supplierAvailable": false,
        "supplierPriceUsd": 196.0,
        "supplierTitle": "Honey / Zipper / Large"
      },
      {
        "color": "Black",
        "size": "Única",
        "supplierSku": "TOTE-BLK-LG-Z",
        "supplierVariant": "39356394930258",
        "supplierAvailable": true,
        "supplierPriceUsd": 196.0,
        "supplierTitle": "Black / Zipper / Large"
      }
    ],
    "sizeChart": []
  },
  {
    "id": "portland-backpack",
    "sku": "BV-08",
    "name": "Tote Backpack · Large",
    "brand": "Portland Leather Goods",
    "category": "Mochilas",
    "price": 0,
    "supplierPrice": 214.0,
    "sourceUrl": "https://www.portlandleathergoods.com/products/tote-backpack",
    "color": "Honey",
    "colors": [
      {
        "name": "Honey",
        "hex": "#ba8245",
        "gallery": [
          {
            "path": "images/products/portland-backpack/0-0.webp",
            "label": "Frente",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-backpack/0-1.webp",
            "label": "Modelo · perfil",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-backpack/0-2.webp",
            "label": "Modelo · espalda",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-backpack/0-3.webp",
            "label": "Apertura",
            "width": 1400,
            "height": 1400
          }
        ]
      },
      {
        "name": "Black",
        "hex": "#242323",
        "gallery": [
          {
            "path": "images/products/portland-backpack/1-0.webp",
            "label": "Frente",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-backpack/1-1.webp",
            "label": "Espalda",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-backpack/1-2.webp",
            "label": "Modelo · perfil",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-backpack/1-3.webp",
            "label": "Modelo · pose",
            "width": 1400,
            "height": 1400
          }
        ]
      }
    ],
    "description": "Mochila con cierre superior, bolsillo exterior con cremallera y correas ajustables. La versión Large incorpora bolsillo interior.",
    "dimensions": "Boca 26,7 · base 29,2 · alto 30,5 · fondo 13,3 cm. Correas 66–86,4 cm.",
    "sizes": [
      "Única"
    ],
    "audience": "Unisex",
    "tag": "Por encargo · USA",
    "live": false,
    "specs": [
      {
        "label": "Marca / modelo",
        "value": "Portland Leather Goods · Tote Backpack"
      },
      {
        "label": "Selección",
        "value": "Unisex · Size: Large"
      },
      {
        "label": "Medidas",
        "value": "Boca 26,7 · base 29,2 · alto 30,5 · fondo 13,3 cm. Correas 66–86,4 cm."
      },
      {
        "label": "Material",
        "value": "Cuero de plena flor. País de venta: USA; fabricación no verificada en esta ficha."
      },
      {
        "label": "Disponibilidad",
        "value": "Selección por encargo. Stock en Perú no confirmado; sujeto a disponibilidad del proveedor."
      },
      {
        "label": "Verificación",
        "value": "Ficha oficial consultada el 7 de octubre de 2026. Medidas aproximadas."
      }
    ],
    "variants": [
      {
        "color": "Honey",
        "size": "Única",
        "supplierSku": "BKPK-HNY-SH",
        "supplierVariant": "33245313728594",
        "supplierAvailable": true,
        "supplierPriceUsd": 214.0,
        "supplierTitle": "Honey / Large"
      },
      {
        "color": "Black",
        "size": "Única",
        "supplierSku": "BKPK-BLK-SH",
        "supplierVariant": "39261216604242",
        "supplierAvailable": true,
        "supplierPriceUsd": 214.0,
        "supplierTitle": "Black / Large"
      }
    ],
    "sizeChart": []
  },
  {
    "id": "portland-quesadilla",
    "sku": "BV-09",
    "name": "Quesadilla Wallet",
    "brand": "Portland Leather Goods",
    "category": "Accesorios",
    "price": 0,
    "supplierPrice": 60.0,
    "sourceUrl": "https://www.portlandleathergoods.com/products/quesadilla-wallet",
    "color": "Nutmeg",
    "colors": [
      {
        "name": "Nutmeg",
        "hex": "#825735",
        "gallery": [
          {
            "path": "images/products/portland-quesadilla/0-0.webp",
            "label": "Cerrada",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-quesadilla/0-1.webp",
            "label": "Abierta · interior",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-quesadilla/0-2.webp",
            "label": "Modelo · abierta",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-quesadilla/0-3.webp",
            "label": "Modelo · cerrada",
            "width": 1400,
            "height": 1400
          }
        ]
      },
      {
        "name": "Black",
        "hex": "#242323",
        "gallery": [
          {
            "path": "images/products/portland-quesadilla/1-0.webp",
            "label": "Cerrada",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-quesadilla/1-1.webp",
            "label": "Abierta · interior",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-quesadilla/1-2.webp",
            "label": "Modelo · abierta",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-quesadilla/1-3.webp",
            "label": "Modelo · cerrada",
            "width": 1400,
            "height": 1400
          }
        ]
      }
    ],
    "description": "Billetera curva con broche, tres espacios para tarjetas, dos para billetes y bolsillo de monedas con cremallera.",
    "dimensions": "16,5 × 8,9 × 1,3 cm · medidas aproximadas.",
    "sizes": [
      "Única"
    ],
    "audience": "Unisex",
    "tag": "Por encargo · USA",
    "live": true,
    "specs": [
      {
        "label": "Marca / modelo",
        "value": "Portland Leather Goods · Quesadilla Wallet"
      },
      {
        "label": "Selección",
        "value": "Unisex · Modelo estándar"
      },
      {
        "label": "Medidas",
        "value": "16,5 × 8,9 × 1,3 cm · medidas aproximadas."
      },
      {
        "label": "Material",
        "value": "Cuero de plena flor. País de venta: USA; fabricación no verificada en esta ficha."
      },
      {
        "label": "Disponibilidad",
        "value": "Selección por encargo. Stock en Perú no confirmado; sujeto a disponibilidad del proveedor."
      },
      {
        "label": "Verificación",
        "value": "Ficha oficial consultada el 7 de octubre de 2026. Medidas aproximadas."
      }
    ],
    "variants": [
      {
        "color": "Black",
        "size": "Única",
        "supplierSku": "WALL-BLK-QSA",
        "supplierVariant": "41262443888722",
        "supplierAvailable": true,
        "supplierPriceUsd": 60.0,
        "supplierTitle": "Black"
      },
      {
        "color": "Nutmeg",
        "size": "Única",
        "supplierSku": "WALL-NUT-QSA",
        "supplierVariant": "41262443855954",
        "supplierAvailable": true,
        "supplierPriceUsd": 60.0,
        "supplierTitle": "Nutmeg"
      }
    ],
    "sizeChart": []
  },
  {
    "id": "portland-bifold",
    "sku": "BV-10",
    "name": "Bifold Wallet",
    "brand": "Portland Leather Goods",
    "category": "Accesorios",
    "price": 0,
    "supplierPrice": 48.0,
    "sourceUrl": "https://www.portlandleathergoods.com/products/bifold-leather-wallet",
    "color": "Phoenix",
    "colors": [
      {
        "name": "Phoenix",
        "hex": "#a33236",
        "gallery": [
          {
            "path": "images/products/portland-bifold/0-0.webp",
            "label": "Abierta",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-bifold/0-1.webp",
            "label": "Cerrada",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-bifold/0-2.webp",
            "label": "Interior",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-bifold/0-3.webp",
            "label": "Exterior",
            "width": 1400,
            "height": 1400
          }
        ]
      },
      {
        "name": "Black",
        "hex": "#242323",
        "gallery": [
          {
            "path": "images/products/portland-bifold/1-0.webp",
            "label": "Abierta",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-bifold/1-1.webp",
            "label": "Cerrada",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-bifold/1-2.webp",
            "label": "Interior",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-bifold/1-3.webp",
            "label": "Exterior",
            "width": 1400,
            "height": 1400
          }
        ]
      }
    ],
    "description": "Billetera plegable de cuero de plena flor: cuatro bolsillos interiores para tarjetas y compartimento para billetes.",
    "dimensions": "Cerrada: ancho 11,4 × alto 8,6 cm. Abierta: ancho 21,9 cm.",
    "sizes": [
      "Única"
    ],
    "audience": "Unisex",
    "tag": "Por encargo · USA",
    "live": true,
    "specs": [
      {
        "label": "Marca / modelo",
        "value": "Portland Leather Goods · Bifold Leather Wallet"
      },
      {
        "label": "Selección",
        "value": "Unisex · Modelo estándar"
      },
      {
        "label": "Medidas",
        "value": "Cerrada: ancho 11,4 × alto 8,6 cm. Abierta: ancho 21,9 cm."
      },
      {
        "label": "Material",
        "value": "Cuero de plena flor. País de venta: USA; fabricación no verificada en esta ficha."
      },
      {
        "label": "Disponibilidad",
        "value": "Selección por encargo. Stock en Perú no confirmado; sujeto a disponibilidad del proveedor."
      },
      {
        "label": "Verificación",
        "value": "Ficha oficial consultada el 7 de octubre de 2026. Medidas aproximadas."
      }
    ],
    "variants": [
      {
        "color": "Black",
        "size": "Única",
        "supplierSku": "WALL-BLK-BIFO",
        "supplierVariant": "33109578448978",
        "supplierAvailable": true,
        "supplierPriceUsd": 48.0,
        "supplierTitle": "Black"
      },
      {
        "color": "Phoenix",
        "size": "Única",
        "supplierSku": "WALL-PHX-BIFO",
        "supplierVariant": "42392489984082",
        "supplierAvailable": false,
        "supplierPriceUsd": 48.0,
        "supplierTitle": "Phoenix"
      }
    ],
    "sizeChart": []
  },
  {
    "id": "portland-passport",
    "sku": "BV-11",
    "name": "Passport Wristlet",
    "brand": "Portland Leather Goods",
    "category": "Viaje",
    "price": 0,
    "supplierPrice": 40.0,
    "sourceUrl": "https://www.portlandleathergoods.com/products/passport-wristlet",
    "color": "Cognac",
    "colors": [
      {
        "name": "Cognac",
        "hex": "#985a38",
        "gallery": [
          {
            "path": "images/products/portland-passport/0-0.webp",
            "label": "Cerrado",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-passport/0-1.webp",
            "label": "Abierto · interior",
            "width": 1400,
            "height": 1400
          }
        ]
      },
      {
        "name": "Black",
        "hex": "#242323",
        "gallery": [
          {
            "path": "images/products/portland-passport/1-0.webp",
            "label": "Cerrado",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-passport/1-1.webp",
            "label": "Abierto · interior",
            "width": 1400,
            "height": 1401
          }
        ]
      }
    ],
    "description": "Portapasaporte con cierre de broche, dos espacios para tarjetas y correa de muñeca desmontable.",
    "dimensions": "14,6 × 11,4 cm. Correa desmontable de 17,8 cm.",
    "sizes": [
      "Única"
    ],
    "audience": "Unisex",
    "tag": "Por encargo · USA",
    "live": false,
    "specs": [
      {
        "label": "Marca / modelo",
        "value": "Portland Leather Goods · Passport Wristlet"
      },
      {
        "label": "Selección",
        "value": "Unisex · Modelo estándar"
      },
      {
        "label": "Medidas",
        "value": "14,6 × 11,4 cm. Correa desmontable de 17,8 cm."
      },
      {
        "label": "Material",
        "value": "Cuero de plena flor. País de venta: USA; fabricación no verificada en esta ficha."
      },
      {
        "label": "Disponibilidad",
        "value": "Selección por encargo. Stock en Perú no confirmado; sujeto a disponibilidad del proveedor."
      },
      {
        "label": "Verificación",
        "value": "Ficha oficial consultada el 7 de octubre de 2026. Medidas aproximadas."
      }
    ],
    "variants": [
      {
        "color": "Black",
        "size": "Única",
        "supplierSku": "WALL-BLK-PASS",
        "supplierVariant": "42264140251218",
        "supplierAvailable": true,
        "supplierPriceUsd": 40.0,
        "supplierTitle": "Black"
      },
      {
        "color": "Cognac",
        "size": "Única",
        "supplierSku": "WALL-COG-PASS",
        "supplierVariant": "42264140218450",
        "supplierAvailable": true,
        "supplierPriceUsd": 40.0,
        "supplierTitle": "Cognac"
      }
    ],
    "sizeChart": []
  },
  {
    "id": "portland-makeup",
    "sku": "BV-12",
    "name": "Makeup Bag · Large",
    "brand": "Portland Leather Goods",
    "category": "Viaje",
    "price": 0,
    "supplierPrice": 52.0,
    "sourceUrl": "https://www.portlandleathergoods.com/products/leather-makeup-bag",
    "color": "Cognac",
    "colors": [
      {
        "name": "Cognac",
        "hex": "#985a38",
        "gallery": [
          {
            "path": "images/products/portland-makeup/0-0.webp",
            "label": "Cerrado",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-makeup/0-1.webp",
            "label": "Modelo · abierto",
            "width": 1400,
            "height": 1400
          }
        ]
      },
      {
        "name": "Black",
        "hex": "#242323",
        "gallery": [
          {
            "path": "images/products/portland-makeup/1-0.webp",
            "label": "Cerrado",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-makeup/1-1.webp",
            "label": "Modelo · abierto",
            "width": 1400,
            "height": 1400
          },
          {
            "path": "images/products/portland-makeup/1-2.webp",
            "label": "Modelo · pose",
            "width": 1400,
            "height": 1400
          }
        ]
      }
    ],
    "description": "Neceser con cremallera e interior de gamuza sin forro. Una forma amplia para ordenar tus esenciales de viaje.",
    "dimensions": "Boca 26,7 · base 19,1 · alto 13,3 · fondo 8,9 cm.",
    "sizes": [
      "Única"
    ],
    "audience": "Unisex",
    "tag": "Por encargo · USA",
    "live": false,
    "specs": [
      {
        "label": "Marca / modelo",
        "value": "Portland Leather Goods · Makeup Bag"
      },
      {
        "label": "Selección",
        "value": "Unisex · Size: Large"
      },
      {
        "label": "Medidas",
        "value": "Boca 26,7 · base 19,1 · alto 13,3 · fondo 8,9 cm."
      },
      {
        "label": "Material",
        "value": "Cuero de plena flor. País de venta: USA; fabricación no verificada en esta ficha."
      },
      {
        "label": "Disponibilidad",
        "value": "Selección por encargo. Stock en Perú no confirmado; sujeto a disponibilidad del proveedor."
      },
      {
        "label": "Verificación",
        "value": "Ficha oficial consultada el 7 de octubre de 2026. Medidas aproximadas."
      }
    ],
    "variants": [
      {
        "color": "Cognac",
        "size": "Única",
        "supplierSku": "MAKE-COG-LG",
        "supplierVariant": "33022494539858",
        "supplierAvailable": false,
        "supplierPriceUsd": 52.0,
        "supplierTitle": "Cognac / Large"
      },
      {
        "color": "Black",
        "size": "Única",
        "supplierSku": "MAKE-BLK-LG",
        "supplierVariant": "29693241655378",
        "supplierAvailable": false,
        "supplierPriceUsd": 52.0,
        "supplierTitle": "Black / Large"
      }
    ],
    "sizeChart": []
  }
];
