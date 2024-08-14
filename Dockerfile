# Use the official Puppeteer image from Docker Hub
FROM ghcr.io/puppeteer/puppeteer:latest

USER root

# Set the working directory
WORKDIR /usr/src/app

# Install Node.js dependencies
COPY package*.json ./
RUN npm install

# Copy your script into the container
COPY index.js ./

# Run the script
CMD ["node", "index.js"]
