# CV Web — Rigoberto Sánchez Morales

Página personal de una sola página construida con HTML, CSS y JavaScript puro.

## Archivos
- `index.html`: contenido y estructura.
- `styles.css`: diseño responsive, animaciones y estilos de impresión.
- `script.js`: menú móvil, revelado progresivo y acción para imprimir/guardar como PDF.
- `assets/rigoberto-sanchez.jpg`: fotografía de perfil.

## Cómo abrir
Abre `index.html` directamente en un navegador moderno. Para probarla localmente con un servidor:
```bash
python -m http.server 8000
```
Después visita `http://localhost:8000`.

## Guardar el CV como PDF
Pulsa **Guardar CV en PDF** y, en el diálogo de impresión del navegador, selecciona **Guardar como PDF**. La hoja de estilos de impresión adapta la página al papel.

## Antes de publicar
1. Sustituye las fechas provisionales de experiencia y formación por las fechas reales.
2. Añade logros, responsabilidades concretas y dos o tres proyectos verificables.
3. Confirma los nombres oficiales de las instituciones y el nombre exacto del posgrado.
4. Revisa los enlaces y los datos de contacto.
5. Si quieres una página sin servicios externos, elimina las dos líneas `preconnect` y el enlace de Google Fonts del `index.html`; se usará una tipografía de respaldo.

No se han inventado fechas, métricas, certificaciones ni proyectos.
