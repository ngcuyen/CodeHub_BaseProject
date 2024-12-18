FROM node:alpine3.18
WORKDIR /server
# Copy package.json và package-lock.json vào container
COPY package.json ./
COPY package-lock.json ./

# Cài đặt các phụ thuộc của backend
RUN npm install
COPY . .
EXPOSE 5050
CMD [ "npm","run", "start" ]