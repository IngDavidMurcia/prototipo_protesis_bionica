
# Micrositio · Prótesis Biónicas

Sitio informativo estático desarrollado con Next.js + Tailwind para divulgar el estado del proyecto del Semillero SITAI.

## 1) Instalación
```bash
npm install
npm run dev
```

## 2) Despliegue en Vercel
- Subir esta carpeta a un repositorio Git.
- Importar el repositorio en Vercel.
- Framework preset: Next.js.
- No requiere variables de entorno.
- Build command: `next build`
- Output: automático.

## 3) Imágenes
Copiar las imágenes reales a:
```text
public/media/
```
usando exactamente los nombres definidos en `data/content.ts` y listados también en el sitio.

## 4) Documento resumen
Copiar a:
```text
public/docs/Resumen_Ejecutivo_Brazo_Bionico_2026_v3.0.docx
```

## 5) Contenido editable
El texto principal está concentrado en:
```text
data/content.ts
```
Ahí puedes actualizar:
- estado TRL,
- prioridades,
- nota de propiedad intelectual,
- galería,
- guía de medios.

## 6) Recomendación de almacenamiento local
Guardar la fuente del sitio en:
```text
11_DIVULGACION_PUBLICACIONES/Web/Fuente
```
y las imágenes seleccionadas en:
```text
11_DIVULGACION_PUBLICACIONES/Web/Media_Seleccionada
```
