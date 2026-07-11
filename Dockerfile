# Use the official Node.js 18 Alpine image as the base image
FROM node:18-alpine

# Set the working directory inside the Docker container
WORKDIR /chahal_harpreet_ui_garden

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install all project dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Create the optimized production build of the React application
RUN npm run build

# Install the 'serve' package globally to serve the production build
RUN npm install -g serve

# Expose port 8083 so the application can be accessed from outside the container
EXPOSE 8083

# Start the React production build using the serve package on port 8083
CMD ["serve", "-s", "build", "-l", "8083"]