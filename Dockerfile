# Use nginx base image
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy the application code to the working directory
COPY index.html .
COPY styles.css .
COPY script.js .

# Expose port 80
EXPOSE 80

# Add labels to provide metadata about the image
LABEL Name="project-management-app" \
      Version="1.0" \
      Description="Web application for project management"

# Command to run the nginx server
CMD ["nginx", "-g", "daemon off;"]
