# Use Node.js 18 LTS as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application files
COPY . .

# Expose port (will be overridden by Dokploy if needed)
EXPOSE 4000

# Set environment to production
ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]
