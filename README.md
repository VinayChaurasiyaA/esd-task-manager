# Vite Frontend & Node.js Backend with Express and Mongoose

This repository contains a sample project that demonstrates how to set up a frontend using Vite and a backend using Node.js, Express, and Mongoose. Vite is a fast and efficient build tool for frontend development, and Express is a popular web framework for Node.js, while Mongoose is a MongoDB object modeling tool.

## Getting Started

To get started with the project, follow the instructions below.

### Prerequisites

- Node.js: Make sure you have Node.js installed on your system. You can download it from the official website: [https://nodejs.org/](https://nodejs.org/)

### Installation

1. Clone the repository to your local machine:

```sh
git clone [<repository-url>](https://github.com/VinayChaurasiyaA/esd-task-manager.git)
```
2. Navigate to the frontend directory and install the frontend dependencies:
 ```sh    
    cd client
    npm install
```
3. Navigate to the backend directory and install the backend dependencies:
 ```sh 
 cd server
npm install
```
### Running the Application

To run the application, you need to start both the frontend and backend servers.

1. Start the frontend development server:
```sh 
    cd client
    npm run dev
```

This will start the frontend server on `http://localhost:5173`.

1. Start the backend server: 
```sh 
    cd server
    npm start
```

This will start the backend server on `http://localhost:5000`.

### Usage

The application consists of a simple frontend that communicates with the backend to perform CRUD operations on a MongoDB database. You can use the frontend to create, read, update, and delete data.

Visit `http://localhost:3000` in your browser to access the frontend and interact with the application.

### Project Structure

- `frontend`: Contains the Vite frontend application.
- `backend`: Contains the Node.js backend application with Express and Mongoose setup.

### Contributing

If you'd like to contribute to this project, please follow the standard GitHub flow: Fork the repository, make changes, and create a pull request. We appreciate your contributions!

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Acknowledgments

- Vite: [https://vitejs.dev/](https://vitejs.dev/)
- Express: [https://expressjs.com/](https://expressjs.com/)
- Mongoose: [https://mongoosejs.com/](https://mongoosejs.com/)

### Contact

If you have any questions or need assistance with the project, feel free to contact the project maintainers or open an issue on GitHub.

Happy coding!
