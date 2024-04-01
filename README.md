# Project Management Web Application

This project is a simple web application for managing personal projects and tasks. It allows users to create, manage, and track their projects and tasks efficiently.

## How to Run the Application Locally

To run the application locally, follow these steps:

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/your-username/project-management-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd project-management-app
    ```

3. Open the `index.html` file in your web browser.

## Building the Docker Image and Running a Container

To build the Docker image and run a container using the image, follow these steps:

1. Make sure you have Docker installed on your machine.

2. Clone this repository to your local machine (if you haven't already):

    ```bash
    git clone https://github.com/your-username/project-management-app.git
    ```

3. Navigate to the project directory:

    ```bash
    cd project-management-app
    ```

4. Build the Docker image using the provided Dockerfile:

    ```bash
    docker build -t project-management-app .
    ```

5. Once the image is built successfully, run a container using the image:

    ```bash
    docker run -d -p 8080:80 project-management-app
    ```

6. Open your web browser and go to `http://localhost:8080` to access the application running in the Docker container.
7. docker tag my-first-app callmekevine/my-first-app:latest
8. docker push callmekevine/my-first-app:latest
9. docker push callmekevine/my-first-app:latest

## Assumptions and Decisions

During the development process, the following assumptions and decisions were made:

- The application is kept lightweight and simple, using HTML, CSS, and JavaScript for development to ensure ease of deployment and scalability.
- Docker was chosen as the containerization platform to encapsulate the application, making it easy to deploy and manage across different environments.
- The application includes basic features such as adding new tasks, viewing the list of tasks, and marking tasks as completed, to provide essential functionality for managing personal projects and tasks.
