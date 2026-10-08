# Landing page ENI

## Archivos
- `index.html`: HTML semántico, contenido y enlaces institucionales.
- `assets/styles.css`: estilos personalizados y adaptación responsive.
- `assets/main.js`: menú móvil accesible; no necesita Bootstrap JS.

## Implementación
1. Descomprimir el paquete manteniendo su estructura.
2. Abrir `index.html` en un navegador, usar Live Server en VS Code o publicar la carpeta completa en un servidor estático.
3. Bootstrap 5.3.3 se carga desde jsDelivr y requiere internet. Para una instalación sin CDN, descargar su CSS y cambiar el enlace en `index.html` por la ruta local. Los estilos propios mantienen una presentación básica sin conexión.
4. Editar textos en `index.html` y colores en las variables de `assets/styles.css`.

## Contenido y alcance
Propuesta informativa independiente, sin formularios ni recepción de datos. El identificador SENA/ENI es tipográfico: no se ha reproducido el logotipo institucional. Los principios editoriales se identifican como tales. No se inventan cursos, testimonios, estadísticas ni convocatorias vigentes.

Información consultada el 8 de octubre de 2026:
- Portal solicitado: https://www.sena.edu.co/es-co/comunidades/instructores/paginas/default.aspx
- Versión oficial histórica con contenido legible: https://historico.sena.edu.co/es-co/comunidades/instructores/Paginas/default.aspx
- Formación y convocatorias: https://historico.sena.edu.co/es-co/comunidades/instructores/Paginas/convocatorias.aspx

La misión de bienvenida es una adaptación del objetivo institucional, no una cita literal. Los enlaces a convocatorias llevan al portal histórico oficial; verificar su destino antes de una publicación institucional. No se confirma disponibilidad de cursos.

## Accesibilidad y revisión
Incluye idioma español, enlace para saltar al contenido, foco visible, menú con `aria-expanded`, cierre con Escape, preguntas con elementos `details`, contraste y respeto de movimiento reducido. Diseño con puntos de cambio a 991 y 767 px.
Comprobar visualmente a 375, 768 y 1440 px antes de publicación institucional. No se ejecutó una revisión visual en navegador en este entorno.
