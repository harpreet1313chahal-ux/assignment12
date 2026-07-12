# Use the official Node.js 18 Alpine image
FROM node:18-alpine

# Set the working directory
WORKDIR /chahal_harpreet_ui_garden_build_checks

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy project files
COPY . .

# Build the React application
RUN npm run build

# Install the static file server
RUN npm install -g serve

# Expose port 8018
EXPOSE 8018

# Serve the production build
CMD ["serve", "-s", "build", "-l", "8018"]