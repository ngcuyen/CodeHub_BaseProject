FROM node:alpine3.18
WORKDIR /app
# Copy package.json và package-lock.json vào container
COPY package.json ./

# Cài đặt phụ thuộc
RUN npm install 

COPY . .
EXPOSE 5173
CMD [ "npm", "run", "start" ]