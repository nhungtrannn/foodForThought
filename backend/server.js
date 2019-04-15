const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const foodRoutes = express.Router();
const PORT = 4000;

let Food = require('./food.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/food', { useNewUrlParser: true})
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

foodRoutes.route('/').get(function(req, res) {
    Food.find(function(err, food) {
        if (err) {
            console.log(err);
        } else {
            res.json(food);
        }
    });
});

foodRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Food.findById(id, function(err, food) {
        res.json(food);
    });
});

foodRoutes.route('/add').post(function(req, req) {
    let food = new Food(req.body);
    food.save()
        .then(food => {
            res.status(200).json({'food': 'food added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new food failed');
        });
});

foodRoutes.route('/update/:id').post(function(req, res) {
    Food.findById(req.params.id, function(err, food) {
        if (!food)
            res.status(404).send('data is not found');
        else
            food.food_description = req.body.food_description;
            food.food_responsible = req.body.food_responsible;
            food.food_priority = req.body.food_priority;
            food.food_completed = req.body.food_completed;

            food.save().then(food => {
                res.json('Food update');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/food', foodRoutes);


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});