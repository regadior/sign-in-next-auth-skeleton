# Etapa 1: Desarrollo
FROM node:20-alpine AS dev

# Instalar dependencias solo cuando sea necesario
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Instalar dependencias basadas en el gestor de paquetes preferido
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Copiar la aplicación
COPY . .

# Ejecutar el servidor de desarrollo de Next.js
CMD ["npm", "run", "dev"]
