# 🖥️ Servidor - API de Carrito de Compras 🛒

Este es el backend del proyecto **API y Carrito de Compras**, desarrollado con **Express.js**.

## 🚀 Empezando

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Inicia el servidor:
   ```bash
   npm run dev
   ```

   El servidor estará disponible en `http://localhost:3001`.

## 🛠️ Tecnologías Utilizadas

- **Express.js**: Framework para construir APIs en Node.js.
- **Swagger**: Documentación de la API.
- **Jest**: Framework de pruebas.
- **Winston**: Librería de logs.

## 📂 Estructura del Proyecto

```
.
├── src/             # Código fuente del servidor
│   ├── config/      # Configuraciones
│   ├── controllers/ # Controladores
│   ├── data/        # Datos estáticos
│   ├── routes/      # Rutas de la API
│   ├── services/    # Lógica de negocio
│   └── test/        # Pruebas
└── ...              # Configuraciones y más
```

## 📚 Documentación de la API

La API está documentada con Swagger. Puedes acceder a la documentación en:

```
http://localhost:3001/api-docs
```

## 🧪 Pruebas

Para ejecutar las pruebas unitarias y de integración:
```bash
npm test
```

## 🌟 Características

- **Gestión de Productos**: Obtén la lista de productos disponibles.
- **Carrito de Compras**: Añade productos al carrito y gestiona tu compra.
