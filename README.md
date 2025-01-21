# 🛒 API y Carrito de Compras 🛍️

Este proyecto es una aplicación completa que incluye una **API** para gestionar productos y un **carrito de compras**, junto con un **cliente** desarrollado en Next.js para interactuar con la API.

## 🚀 Estructura del Proyecto

El proyecto está dividido en dos partes principales:

- **`client/`**: Aplicación frontend desarrollada con Next.js.
- **`server/`**: API backend desarrollada con Express.js.

### 🌍 Live Demo

[🖌️ Frontend](https://api-y-carrito-de-compras.vercel.app/)
```
https://api-y-carrito-de-compras.vercel.app/
```

[🖥️ Backend](https://api-y-carrito-de-compras-bakj.vercel.app/api/products) 
```
https://api-y-carrito-de-compras-bakj.vercel.app/api/products
```

### 📂 Estructura de Directorios

```
.
├── client/              # Frontend (Next.js)
│   ├── app/             # Páginas y componentes
│   ├── components/      # Componentes reutilizables
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Funciones utilitarias
│   ├── public/          # Archivos estáticos
│   └── ...              # Configuraciones y más
├── server/              # Backend (Express.js)
│   ├── src/             # Código fuente del servidor
│   │   ├── config/      # Configuraciones
│   │   ├── controllers/ # Controladores
│   │   ├── data/        # Datos estáticos
│   │   ├── routes/      # Rutas de la API
│   │   ├── services/    # Lógica de negocio
│   │   └── test/        # Pruebas
│   └── ...              # Configuraciones y más
└── README.md            # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **Frontend**: Next.js, TailwindCSS, TypeScript, React.
- **Backend**: Express.js, Swagger (documentación de API), Jest (pruebas).
- **Herramientas**: ESLint, Prettier, Git.

## 📦 Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/FeliPrado31/API-y-Carrito-de-Compras.git
   cd API-y-Carrito-de-Compras
   ```

2. Instala las dependencias del servidor:

   ```bash
   cd server
   npm install
   ```

3. Instala las dependencias del cliente:
   ```bash
   cd ../client
   npm install
   ```

## 🚀 Ejecución

### Servidor (Backend)

1. Navega a la carpeta `server`:

   ```bash
   cd server
   ```

2. Inicia el servidor:

   ```bash
   npm run dev
   ```

   El servidor estará disponible en `http://localhost:3001`.

### Cliente (Frontend)

1. Navega a la carpeta `client`:

   ```bash
   cd client
   ```

2. Inicia la aplicación:

   ```bash
   npm run dev
   ```

   La aplicación estará disponible en `http://localhost:3001`.

## 📚 Documentación de la API

La API está documentada con Swagger. Puedes acceder a la documentación en:

```
http://localhost:3001/api/docs/
```

## 🧪 Pruebas

Para ejecutar las pruebas unitarias y de integración:

1. En el servidor:

   ```bash
   cd server
   npm test
   ```

2. En el cliente:
   ```bash
   cd client
   npm test
   ```

## 🌟 Características

- **Gestión de Productos**: Obtén la lista de productos disponibles.
- **Carrito de Compras**: Añade productos al carrito y gestiona tu compra.
- **Optimización de Presupuesto**: Encuentra la mejor combinación de productos según tu presupuesto.
