# Use official Node.js image as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port (Next.js dev default is 3000, but server uses 300, so use 3001 for client)
EXPOSE 3001

# Set environment variable to run Next.js dev server on port 3001
ENV PORT=3001

# Start the Next.js app in development mode on port 3001
CMD ["npm", "run", "dev", "--", "-p", "3001"]


