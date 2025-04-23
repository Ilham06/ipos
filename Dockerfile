# Step 1: Gunakan image Node.js sebagai base image
FROM node:19.4.0-alpine AS build

# Step 2: Set working directory di dalam container
WORKDIR /app

# Step 3: Copy package.json dan package-lock.json
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy seluruh file aplikasi ke dalam container
COPY . .

# Step 6: Build aplikasi untuk production
RUN npm run build

# Step 7: Gunakan image Nginx untuk men-serve aplikasi frontend
FROM nginx:alpine

# Step 8: Salin build hasil build sebelumnya ke folder yang digunakan oleh Nginx
COPY --from=build /app/.next /usr/share/nginx/html

# Step 9: Expose port yang digunakan oleh Nginx
EXPOSE 80

# Step 10: Jalankan Nginx
CMD ["nginx", "-g", "daemon off;"]
