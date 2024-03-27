const express = require('express');
const app = express();

const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
// app.get('/', (req, res) => {
//     res.status(200).send('Hello World!');
// })
// app.get('/json', (req, res) => {
//     res.status(200).json({ message: 'Hello World!', app: 'Natours' });
// })

// middlewares  section

if (process.env.NODE_ENV === 'development')
    app.use(morgan('dev'))
app.use(express.json()); //middleware only
// app.use((req, res, next) => {
//     console.log('Hello from the middleware');
//     next();
// })


// app.get('/api/v1/tours/:id', getTour);
// app.get('/api/v1/tours', getAllTours);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);
// Routes

// const userRouter = express.Router();
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);




// server
module.exports = app;