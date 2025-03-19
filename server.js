import express from 'express';

const app = express();
// has folder static files
app.use(express.static('static_files'));

app.listen(3000);
console.log("Server started at post 3000.")