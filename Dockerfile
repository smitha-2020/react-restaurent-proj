FROM node:18-alpine
WORKDIR /frontend
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
EXPOSE 3000
ENV HOST=0.0.0.0
CMD ["npm", "start"]

