# Cómo actualizar la página de Terra Nua

La página vive en GitHub Pages: https://terranua.github.io/terranua/

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La página completa: textos, productos y funciones. |
| `styles.css` | Los estilos (colores, tamaños, diseño). Se genera con Tailwind. |
| `img/` | Logo y fotos de los jabones. |
| `tailwind.config.js`, `src/input.css` | Solo se usan para volver a generar `styles.css`. |

## Cambiar productos (lo más común)

1. Abre la página publicada (recárgala si ya la tenías abierta) y entra al **panel de administrador**: abre el carrito ("Pedido", arriba a la derecha) y toca el ícono de escudo junto a "Tu Pedido Terra Nua".
2. Agrega, edita, pausa o marca productos como "Próximamente". Los cambios se guardan **solo en tu navegador**.
3. Presiona **"Descargar HTML actualizado"**. Se descarga un `index.html` nuevo con tus cambios.
4. Sube ese `index.html` al repositorio de GitHub y reemplaza el anterior. En uno o dos minutos tus clientes verán los cambios.

> Las fotos que subas desde tu celular o computadora quedan dentro del `index.html`.
> Si prefieres, guarda la foto en la carpeta `img/` del repositorio y en el panel escribe la dirección `img/nombre-de-la-foto.jpg`.

## Si editas el HTML a mano y usas clases nuevas de Tailwind

Los estilos ya están compilados en `styles.css`. Si agregas al HTML una clase de Tailwind que la página no usaba antes (por ejemplo `bg-red-500`), regenera los estilos con [Node.js](https://nodejs.org) instalado, desde la carpeta del repositorio:

```bash
npx tailwindcss@3.4.17 -i src/input.css -o styles.css --minify
```

Cambiar textos o productos desde el panel **no** requiere este paso.
