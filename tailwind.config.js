/** Configuración de Tailwind de Terra Nua (antes estaba dentro de index.html).
 * Para regenerar styles.css después de agregar clases nuevas al HTML:
 *   npx tailwindcss@3.4.17 -i src/input.css -o styles.css --minify
 */
module.exports = {
  "content": [
    "./index.html"
  ],
  "darkMode": "class",
  "theme": {
    "extend": {
      "colors": {
        "surface-tint": "#4a6638",
        "surface": "#fef9ef",
        "error-container": "#ffdad6",
        "inverse-primary": "#afd098",
        "on-tertiary-fixed-variant": "#5e4100",
        "on-secondary-fixed": "#390c00",
        "inverse-on-surface": "#f5f0e6",
        "on-tertiary-fixed": "#271900",
        "on-secondary-container": "#78351e",
        "on-primary": "#ffffff",
        "secondary": "#934a31",
        "primary-container": "#2f4a1f",
        "on-error": "#ffffff",
        "on-secondary-fixed-variant": "#75331c",
        "on-primary-fixed": "#082100",
        "primary-fixed": "#cbedb2",
        "outline": "#74796d",
        "on-error-container": "#93000a",
        "on-surface": "#1d1c16",
        "surface-container-low": "#f8f3e9",
        "surface-container": "#f2ede3",
        "secondary-container": "#fea182",
        "background": "#fef9ef",
        "surface-variant": "#e7e2d8",
        "on-primary-fixed-variant": "#334e22",
        "on-primary-container": "#99b983",
        "on-background": "#1d1c16",
        "primary": "#19330a",
        "primary-fixed-dim": "#afd098",
        "tertiary-fixed-dim": "#f3be5b",
        "error": "#ba1a1a",
        "outline-variant": "#c4c8bb",
        "on-tertiary": "#ffffff",
        "surface-container-lowest": "#ffffff",
        "surface-container-high": "#ede8de",
        "secondary-fixed": "#ffdbd0",
        "secondary-fixed-dim": "#ffb59d",
        "on-surface-variant": "#43483e",
        "tertiary-container": "#5a3e00",
        "tertiary-fixed": "#ffdea9",
        "tertiary": "#3d2900",
        "on-tertiary-container": "#dba847",
        "surface-dim": "#dedad0",
        "surface-container-highest": "#e7e2d8",
        "inverse-surface": "#32302a",
        "on-secondary": "#ffffff",
        "surface-bright": "#fef9ef"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px"
      },
      "spacing": {
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
        "space-md": "1rem",
        "margin-mobile": "1.25rem",
        "gutter-mobile": "1rem",
        "space-sm": "0.5rem",
        "space-2xl": "4rem",
        "gutter": "1.5rem",
        "margin": "3rem",
        "space-xs": "0.25rem"
      },
      "fontFamily": {
        "headline-lg-mobile": [
          "Playfair Display",
          "serif"
        ],
        "label-sm": [
          "Nunito Sans",
          "sans-serif"
        ],
        "headline-sm": [
          "Playfair Display",
          "serif"
        ],
        "label-lg": [
          "Nunito Sans",
          "sans-serif"
        ],
        "headline-md": [
          "Playfair Display",
          "serif"
        ],
        "display-mobile": [
          "Playfair Display",
          "serif"
        ],
        "title-md": [
          "Nunito Sans",
          "sans-serif"
        ],
        "headline-lg": [
          "Playfair Display",
          "serif"
        ],
        "title-lg": [
          "Nunito Sans",
          "sans-serif"
        ],
        "body-sm": [
          "Nunito Sans",
          "sans-serif"
        ],
        "body-md": [
          "Nunito Sans",
          "sans-serif"
        ],
        "body-lg": [
          "Nunito Sans",
          "sans-serif"
        ],
        "display": [
          "Playfair Display",
          "serif"
        ]
      },
      "fontSize": {
        "headline-lg-mobile": [
          "1.75rem",
          {
            "lineHeight": "2.25rem",
            "fontWeight": "600"
          }
        ],
        "label-sm": [
          "0.75rem",
          {
            "lineHeight": "1rem",
            "letterSpacing": "0.06em",
            "fontWeight": "600"
          }
        ],
        "headline-sm": [
          "1.25rem",
          {
            "lineHeight": "1.75rem",
            "fontWeight": "500"
          }
        ],
        "label-lg": [
          "0.875rem",
          {
            "lineHeight": "1.25rem",
            "letterSpacing": "0.04em",
            "fontWeight": "600"
          }
        ],
        "headline-md": [
          "1.75rem",
          {
            "lineHeight": "2.25rem",
            "fontWeight": "500"
          }
        ],
        "display-mobile": [
          "2.25rem",
          {
            "lineHeight": "2.75rem",
            "letterSpacing": "-0.01em",
            "fontWeight": "600"
          }
        ],
        "title-md": [
          "1rem",
          {
            "lineHeight": "1.5rem",
            "fontWeight": "600"
          }
        ],
        "headline-lg": [
          "2.5rem",
          {
            "lineHeight": "3rem",
            "letterSpacing": "-0.01em",
            "fontWeight": "600"
          }
        ],
        "title-lg": [
          "1.125rem",
          {
            "lineHeight": "1.625rem",
            "fontWeight": "700"
          }
        ],
        "body-sm": [
          "0.875rem",
          {
            "lineHeight": "1.375rem",
            "fontWeight": "400"
          }
        ],
        "body-md": [
          "1rem",
          {
            "lineHeight": "1.6rem",
            "fontWeight": "400"
          }
        ],
        "body-lg": [
          "1.125rem",
          {
            "lineHeight": "1.75rem",
            "fontWeight": "400"
          }
        ],
        "display": [
          "3.5rem",
          {
            "lineHeight": "4rem",
            "letterSpacing": "-0.02em",
            "fontWeight": "600"
          }
        ]
      }
    }
  },
  "plugins": []
};
