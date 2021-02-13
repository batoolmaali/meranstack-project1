const express = require('express');
const connectDB= require('./config/db')
const app = express();
 connectDB();
app.get('/',(req, res) => res.send('API Running'));

//Define Routes
app.use('/api/users', require('./route/api/users'));
app.use('/api/profile', require('./route/api/profile'));
app.use('/api/post', require('./route/api/post'));
app.use('/api/auth', require('./route/api/auth'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
