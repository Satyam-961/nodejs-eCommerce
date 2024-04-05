import http from "http";
import app from "./app/app.js";


// creating the server
const PORT = process.env.PORT || 3000;  
const server = http.createServer(app);      // nodejs core module and we pass express application  
server.listen(PORT, console.log(`Server is up and running on the port ${PORT}`));

