# Technical Portfolio

Portfolio técnico minimalista para demostrar evidencia que respalde un CV en Seguridad Informática. Construido con HTML5, CSS3 y JavaScript vanilla. Diseñado para publicarse en GitHub Pages.

## Estructura del proyecto

```
Portfolio/
├── index.html          # Página principal (one-page)
├── style.css           # Estilos globales y variables CSS
├── script.js           # Datos dinámicos e interacciones
├── assets/
│   ├── icons/          # SVG de contacto (mail, LinkedIn, GitHub)
│   ├── img/            # Badges y certificados
│   └── docs/           # Documentos y artículos en HTML
│       ├── _layout.css
│       ├── methodologies/
│       ├── research/
│       └── templates/
└── README.md
```

## Vista previa local

Abrí `index.html` directamente en el navegador, o usá un servidor local:

```bash
# Python 3
python -m http.server 8080

# Node.js (si tenés npx)
npx serve .
```

Luego visitá `http://localhost:8080`.

## Checklist de personalización

### 1. Datos personales y contacto

Editá el objeto `portfolioData` al inicio de [`script.js`](script.js):

- `name` — tu nombre completo
- `contact.email` — correo electrónico
- `contact.linkedin` — URL de LinkedIn
- `contact.github` — URL de GitHub

También reemplazá `[Tu Nombre Completo]` en [`index.html`](index.html) y en el footer.

### 2. Tarjetas del portfolio

Cada tarjeta se configura en `portfolioData.cards`. Para agregar contenido:

| Tipo | Qué editar |
|---|---|
| Documento | Agregar item con `type: "doc"` y `href` apuntando al HTML |
| Script | Agregar item con `type: "script"`, `description`, `language` y `href` (GitHub) |
| Artículo | Crear HTML en `assets/docs/research/` y agregar al array |

Actualizá el campo `footer` con el conteo correcto (ej. `"3 documentos"`).

### 3. Documentos HTML

1. Copiá [`assets/docs/templates/doc-template.html`](assets/docs/templates/doc-template.html)
2. Guardalo en `methodologies/` o `research/`
3. Reemplazá título, breadcrumb y contenido
4. Agregá la entrada en `portfolioData.cards`

### 4. Certificados y badges

- **Cisco:** reemplazá `assets/img/placeholder-cisco-badge.svg` con tu badge o actualizá el link en `index.html` apuntando a Credly
- **Siglo 21:** reemplazá `assets/img/placeholder-certificado.svg` con la imagen del certificado

### 5. HTB / TryHackMe (opcional)

Si querés incluir perfiles de plataformas de práctica, agregá links en la sección "Aprendizaje autodidacta" de [`index.html`](index.html). No están incluidos por defecto.

## Deploy en GitHub Pages

1. Creá un repositorio en GitHub (ej. `tu-usuario.github.io` o `portfolio`)
2. Subí todos los archivos del proyecto
3. En **Settings → Pages**:
   - Source: **Deploy from a branch**
   - Branch: `main`
   - Folder: `/ (root)`
4. Guardá y esperá unos minutos. Tu sitio estará en `https://tu-usuario.github.io`

### Notas de deploy

- Todas las rutas son relativas (compatibles con subdirectorios)
- No se requiere build ni dependencias
- Los documentos HTML se leen directamente en el navegador

## Agregar contenido futuro

| Acción | Pasos |
|---|---|
| Nuevo documento | Copiar plantilla → escribir contenido → agregar en `portfolioData.cards` → actualizar footer |
| Nuevo script | Agregar item con `description`, `language`, `href` en la tarjeta `automation` |
| Nuevo artículo | Crear HTML en `assets/docs/research/` → agregar al array de `research` |
| PDF futuro | Convertir a HTML o agregar item con `type: "pdf"` y link directo |

## Tecnologías

- HTML5 semántico
- CSS3 con variables custom properties
- JavaScript ES6+ vanilla
- Sin frameworks, librerías ni build tools

## Licencia

Contenido personal — ajustá según tu preferencia al publicar.
