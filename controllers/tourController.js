// const fs = require('fs');
// const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));
const Tour = require('../models/tourModel');
//Functions 

// const checkID = (req, res, next, val) => {
//     if (val * 1 > tours.length) {
//         return res.status(404).json({
//             status: 'fail',
//             message: 'Invalid ID'
//         });
//     }
//     next();
// }
// The above shown checkID is no longer needed when u connect to datbase because from there only id will be checked and then only come

const checkBody = (req, res, next) => {
    // console.log('HHHHHHHHHHHHHHHHEEEEEEEEEEEEEEEEEE');
    if (!req.body.name || !req.body.price) {
        return res.status(400).json({
            status: 'fail',
            message: 'Missing name or price'
        });
    }
    next();
}
const getAllTours = (req, res) => {
    console.log(req.query);
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours
        }
    })
};
const getTour = (req, res) => {
    console.log(req.params);
    id = req.params.id * 1;
    const tour = tours.find((el) => el.id === id);
    if (!tour) {
        res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }
    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    })
}
const createTour = (req, res) => {
    // console.log(req.body);
    // const newId = tours[tours.length - 1] + 1;
    // const newTour = Object.assign({ id: newId }, req.body);
    // tours.push(newTour);
    // fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {

    // })
    // console.log(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            tour: newTour
        }
    })
    // res.send('Done');
}
const updateTour = (req, res) => {

    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Updated tour here...>'
        }
    })
}
const deleteTour = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null
    })
}

module.exports = {
    getAllTours,
    getTour,
    createTour,
    updateTour,
    deleteTour,
    checkBody
}