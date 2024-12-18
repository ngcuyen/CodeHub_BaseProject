FROM node:alpine3.18
WORKDIR /app
# Update Alpine packages and install necessary dependencies
RUN apk add --no-cache python3 make g++

# Copy package.json and package-lock.json into the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --unsafe-perm

COPY . .
EXPOSE 5173
CMD [ "npm", "run", "start" ]