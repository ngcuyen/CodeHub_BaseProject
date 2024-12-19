FROM node:18-alpine

# Thiết lập thư mục làm việc trong container
WORKDIR /server

# Cài đặt các công cụ cần thiết để hỗ trợ build
RUN apk add --no-cache python3 make g++

# Cấu hình npm registry (tránh lỗi registry không tìm thấy)
RUN npm config set registry https://registry.npmjs.org/

# Copy package.json và package-lock.json
COPY package.json package-lock.json ./

# Cài đặt các dependency
RUN npm cache clean --force && npm install --no-optional --unsafe-perm

# Copy toàn bộ mã nguồn
COPY . .

# Mở cổng backend
EXPOSE 5050

# Khởi chạy ứng dụng backend
CMD ["npm", "run", "start"]
