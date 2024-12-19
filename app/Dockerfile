FROM node:18-alpine

WORKDIR /app

# Cài đặt các công cụ cần thiết
RUN apk add --no-cache python3 make g++

# Cấu hình registry npm và copy package.json
RUN npm config set registry https://registry.npmjs.org/
COPY package.json package-lock.json ./

# Xóa cache npm và cài đặt các dependency
RUN npm cache clean --force && npm install --no-optional --unsafe-perm

# Copy toàn bộ mã nguồn
COPY . .

# Mở cổng
EXPOSE 5173

# Chạy ứng dụng
CMD ["npm", "run", "dev"]
