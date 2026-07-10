# Contexto del proyecto Airbnb Clone

## Descripción general
Este proyecto consiste en implementar un frontend inspirado en Airbnb usando Next.js 16, TypeScript, Tailwind CSS y el App Router. La interfaz se compondrá de tres páginas principales: la página de inicio, el catálogo de resultados y la vista de detalle de una habitación.

## Páginas a construir

### 1. Página de inicio (/)
Muestra una barra superior con logo, buscador y menú de usuario. Debajo aparecen filtros por categoría y una cuadrícula responsiva de tarjetas de alojamiento. El usuario puede escribir en el buscador para filtrar tarjetas en tiempo real y seleccionar una categoría activa para resaltar contenido.

### 2. Página de catálogo (/catalog)
Presenta los resultados de búsqueda en formato de lista y grid, con un encabezado que indica cuántos alojamientos se muestran y un selector de ordenación por precio. También incluye un bloque de mapa simulado a la derecha en desktop o debajo en móvil.

### 3. Página de detalle de habitación (/rooms/[id])
Muestra una galería de fotos con navegación anterior/siguiente, información del alojamiento, valoración, reseñas, datos del anfitrión, servicios y una tarjeta de reserva con contador de huéspedes y botón de acción.

## Componentes principales identificados

### Página de inicio
- Navbar: logo, buscador, acciones de usuario
- CategoryFilters: fila horizontal de filtros por categoría
- ListingGrid: contenedor responsivo de tarjetas
- ListingCard: tarjeta de alojamiento con imagen, título, precio y valoración

### Página de catálogo
- ResultsHeader: contador de resultados y selector de ordenación
- ListingCard: reutilizado desde la home
- MapPanel: bloque de mapa placeholder

### Página de detalle
- Gallery: galería superior con navegación
- RoomHeader: título, valoración, reseñas y ubicación
- HostInfo: avatar, nombre y años como anfitrión
- AmenitiesGrid: lista de servicios
- BookingCard: precio, contador de huéspedes y CTA

## Usuario objetivo
El usuario es un viajero que desea encontrar un alojamiento interesante, comparar opciones rápidamente y revisar detalles concretos antes de reservar. Su objetivo principal es descubrir una propiedad atractiva, entender su precio y características, y avanzar hacia una decisión de reserva.
