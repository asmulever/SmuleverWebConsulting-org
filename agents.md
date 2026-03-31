# Diseño profesional Smulever Web Consulting

## Paleta 60-30-10 (confianza, claridad, sofisticación)
- **Primary / Base:** `#0B1F3B` (deep navy; fondo dominante de hero, footer y textos importantes que transmiten estabilidad).
- **Secondary / Soporte:** `#1E3A5F` (blue-gray; tarjetas y bloques que mantienen contraste sin ser agresivos).
- **Background:** `#F4F7FA` (neutral moderno para interiores y márgenes, garantiza lectura extendida).
- **Accent mínimo:** `#F2A900` (amarillo controlado para CTA primarios y micro detalles decisivos, nunca masivo).
- **Textos:** `#0A0A0A` para fondos claros y `#FFFFFF` cuando se colocan sobre superficies oscuras.

## Reglas generales de diseño
1. **Alto contraste y legibilidad**: Siempre respetar el contraste WCAG AA; usar `#0A0A0A` sobre fondos claros y `#FFFFFF` sobre `#0B1F3B`/`#1E3A5F`.
2. **Espaciado amplio y minimalismo estructural**: Cada `panel` mantiene `padding: clamp(2rem, 3vw, 3.2rem)` y `gap` mínimo de `1.5rem` en grids. El ritmo se apoya en márgenes generosos y bloques claramente delimitados (sin texturas distractoras).
3. **Uso estratégico del acento**: `#F2A900` se reserva únicamente a los CTA primarios y a indicadores de decisión (botones, micro iconos, estados activados). No se aplica a texto corrido ni fondos.
4. **Gradientes sutiles y funcionales**: Cuando se requiera volumen, se usan gradientes suaves entre `#0B1F3B` y `rgba(30,58,95,0.6)` sobre bloques, no decorativos.
5. **Dark-mode first (opcional)**: Diseñar con fondo oscuro como primera opción; el modo claro reutiliza la paleta con `#F4F7FA` sin perder jerarquía.

## Tipografía y jerarquía visual
- **Inter** en pesos 400, 500, 600, 700.  
- **Jerarquía:**  
  - `h1`: 2.6rem, peso 600/700, color `#0B1F3B`.  
  - `h2`: 2rem, con `border-bottom: 2px solid rgba(91,121,255,0.5)` opcional.  
  - `h3`: 1.4rem para tarjetas/casos.  
  - Parrafos: 1rem / line-height 1.6; máximo ~75 caracteres.  
  - Textos secundarios: 0.85rem, color `#4B4D78`.
- **CTA:** `.primary-cta` con `#F2A900`, `.secondary-cta` bordeado en `rgba(91,121,255,0.4)`; ambos con `border-radius: 999px` y `transition: transform 0.2s ease`.

## Guidelines UI
1. **Grillas y paneles**: utilizar paneles rectangulares con `box-shadow: 0 30px 60px rgba(6,18,51,0.25)` y `border-radius: 32px`. Los grids responden con `auto-fit`/`minmax(220px, 1fr)`.
2. **Iconografía y confianza**: solo iconos lineales o tipográficos en blanco/azul para reforzar autoridad; evitar ilustraciones caricaturescas.
3. **Componentes recurrentes**: `hero`, `service-grid`, `cases-grid`, `process-list`, `credentials-row`, `contact-grid`. Mantener consistencia en padding, tipografía y color.
4. **Botones y microinteracciones**: `primary-cta` con `box-shadow` tenue y `hover` de `translateY(-2px)`; evitar animaciones ruidosas.
5. **Dark Mode**: si se implementa, los paneles pueden usar `#0B1F3B` con textos blancos; el modo claro usa `#F4F7FA` sin cambiar estructura ni espaciados.

Esta guía define la nueva identidad visual: sobria, técnica y orientada a resultados, evitando la estética genérica y sin referencias personales o herramientas puntuales.
