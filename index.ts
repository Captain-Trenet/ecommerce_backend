require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http').createServer(express);
const PORT = process.env.PORT ?? 3500;

http.listen(PORT,()=> console.log(`Server is running on port ${PORT}`));

