FROM node:18

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the workdir
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy the entire project
COPY . .

# Open the mapped port
EXPOSE 5555

# Start the application
CMD ["npm", "run", "start:dev"]