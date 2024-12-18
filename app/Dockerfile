FROM node:alpine3.18
WORKDIR /app
# Copy package.json và package-lock.json vào container
COPY package.json ./
COPY package-lock.json ./

# Kiểm tra phiên bản npm và node
RUN node -v
RUN npm -v

# Cài đặt phụ thuộc
RUN npm install || { echo 'npm install failed'; exit 1; }
COPY . .
EXPOSE 5173
CMD [ "npm","run", "start" ]