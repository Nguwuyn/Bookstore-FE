require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const productsRoute = require('./routers/productsRoute');

// Middleware and routes
app.use(express.json());
app.use('/products', productsRoute);

const PORT = process.env.APP_PORT ;

app.get('/', (req, res) => {
    res.send('Hi Chat');
});

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected...');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch(err => console.log(err));