# Especificación técnica de la interfaz Airbnb Clone

## 1. Guía de estilo visual

### Paleta de colores
- Rosa Airbnb principal: #FF5A5F
- Rosa secundario suave: #FF7A7F
- Negro principal para texto: #222222
- Gris oscuro: #484848
- Gris medio: #717171
- Gris claro: #EBEBEB
- Fondo limpio: #F7F7F7
- Blanco: #FFFFFF

### Tipografía
- Usar una tipografía sans-serif moderna y legible, preferiblemente Inter, SF Pro Display o una alternativa del sistema.
- Jerarquía tipográfica clara para títulos, subtítulos, metadata y texto de soporte.
- Mantener una escala consistente para garantizar lectura y equilibrio visual.

### Bordes y formas
- Radios de borde amplios y suaves: 12px, 16px, 20px y 24px según el componente.
- Uso ligero de sombras para elevar tarjetas y módulos sin romper la limpieza visual.
- Diseño visualmente aireado, con mucho espacio negativo y secciones claramente separadas.

### Espaciado
- Usar una escala de espaciado consistente basada en múltiplos de 4px.
- Espaciado estándar para componentes: 8px, 12px, 16px, 24px, 32px, 48px.
- Mantener proporciones equilibradas entre secciones, tarjetas y márgenes.

## 2. Árbol modular de componentes

### Componentes compartidos
- Layout principal
  - Contenedor global de la aplicación
  - Maneja estructura base, márgenes y espacio de contenido
- Header global
  - Logo o marca
  - Buscador compacto o destacado según la vista
  - Menú de usuario
  - Acciones de navegación global
- Footer global o barra de navegación inferior móvil
  - En desktop, footer tradicional y limpio
  - En móvil, barra inferior con acciones esenciales

### Componentes de la Home
- Hero search section
  - Campo de búsqueda principal o compacto
  - CTA claro para iniciar la exploración
- Category filter chips o carrusel de categorías
  - Íconos representativos por tipo de alojamiento
  - Comportamiento horizontal y scrollable en móvil
- Discovery section
  - Bloque editorial o destacado para inspirar al usuario
- Property cards iniciales
  - Muestra de alojamientos destacados o recomendados

### Componentes del Catálogo
- Search/filter toolbar
  - Filtros rápidos y accesibles
  - Botones de categoría, precio o tipo de alojamiento
- Listing grid
  - Grid responsivo de tarjetas de propiedades
- Property card
  - Imagen principal con soporte para carrusel integrado
  - Precio, valoración, ubicación y etiquetas clave
- Map panel simulado
  - Área lateral o inferior que sugiere contexto geográfico y selección visual
- Sorting controls
  - Opciones de ordenamiento por relevancia, precio o rating

### Componentes del Detalle de Habitación
- Gallery section
  - Mosaico en desktop
  - Carrusel en móvil
- Room overview
  - Título, ubicación, descripción breve y metadatos clave
- Amenities section
  - Lista visual de servicios y comodidades
- Host info card
  - Información del anfitrión o anfitriona y detalles de confianza
- Booking card flotante o fija
  - Precio por noche
  - Botón de reserva principal
  - Selector de fechas o disponibilidad simplificada
- Reviews section
  - Reseñas destacadas con puntuación y comentarios cortos

## 3. Reglas de interacción y estados

### Comportamiento general
- Todas las interacciones deben sentirse ligeras, rápidas y fluidas.
- Los cambios de vista deben ejecutarse mediante navegación client-side de Next.js sin recargas completas del navegador.
- Las transiciones deben ser sutiles, con duración breve y easing suave.

### Hover y focus states
- Los botones y tarjetas deben mostrar estados hover claros y consistentes.
- El foco debe ser visible y accesible para navegación con teclado.
- Los elementos interactivos deben transmitir feedback visual inmediato.

### Estados de carga
- Mostrar estados de carga o esqueleto cuando los datos no estén disponibles instantáneamente.
- Evitar pantallas vacías o parpadeos innecesarios durante la navegación.
- Mantener la experiencia estable incluso con contenido asíncrono.

### Estados vacíos y errores
- Si no hay resultados, mostrar un mensaje claro y visualmente limpio.
- Si falla la carga de datos, mostrar un estado de error amigable y sin romper la interfaz.

### Responsive behavior
- En móvil, priorizar diseño vertical, botones grandes y contenido apilado.
- En tablet y desktop, aprovechar el espacio para grid, columnas y vistas más ricas.
- La galería, la tarjeta de reserva y los filtros deben adaptarse con lógica responsive clara.

### Accesibilidad y semántica
- Usar etiquetas semánticas correctas para secciones, botones, formularios y listas.
- Asegurar contraste suficiente entre texto y fondos.
- Mantener jerarquía lógica de encabezados y estructura de contenido.
- Garantizar una navegación entendible para usuarios de teclado y lectores de pantalla.

## 4. Criterios de implementación recomendados
- Construir componentes pequeños y reutilizables.
- Mantener los datos en estructuras simples y claras para facilitar evolución posterior.
- Evitar lógica excesiva dentro de componentes visuales.
- Priorizar consistencia visual sobre efectos innecesarios.
- Tratar la experiencia como si fuera una implementación real de producto y no solo una maqueta estática.
