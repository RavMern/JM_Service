#build
FROM node:22.14 AS builder
#directorio en maquina virtual
WORKDIR /app
#copia las dependencias
COPY package*.json ./
#las instala
RUN npm install
#copia todos los archivos
COPY . .
#corre el build
RUN npm run build


#etapa de run
FROM node:22.14 AS runner
#directiorio app
WORKDIR /app
#instala serve
RUN npm install -g serve
#copia todos los archivos
COPY --from=builder /app/dist ./dist
#expone el puerto 3000 de docker
EXPOSE 3000 
#en caso de querer correrlo local usar:
#docker run -p 8080:3000 -d jm-service

# Asegurar que se escuche en todas las interfaces
CMD ["serve", "-s", "dist", "-l", "tcp://0.0.0.0:3000"]
