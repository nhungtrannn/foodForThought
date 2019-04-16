import React, {Component} from 'react';
import axios from 'axios'; 

export default class CreateFood extends Component {

    constructor(props) {
        super(props);

        this.onChangeFoodDescription = this.onChangeFoodDescription.bind(this);
        this.onChangeFoodCalories = this.onChangeFoodCalories.bind(this);
        this.onChangeFoodPriority = this.onChangeFoodPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            food_description: '',
            food_calories: '',
            food_priority: '',
            food_completed: false
        }
    }

    onChangeFoodDescription(e) {
        this.setState({
            food_description: e.target.value 
        });
    }

    onChangeFoodCalories(e) {
        this.setState({
            food_calories: e.target.value 
        });
    }

    onChangeFoodPriority(e) {
        this.setState({
            food_priority: e.target.value 
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`form submitted:`);
        console.log(`Food Description: ${this.state.food_description}`);
        console.log(`Food Calories: ${this.state.food_calories}`);
        console.log(`Food Priority: ${this.state.food_priority}`);
        console.log(`Food Completed: ${this.state.food_completed}`);

        const newFood = {
            food_description: this.state.food_description,
            food_calories: this.state.food_calories,
            food_priority: this.state.food_priority,
            food_completed: this.state.food_completed
        }

        axios.post('http://localhost:4000/food/add', newFood)
            .then(res => console.log(res.data));

        this.setState({
            food_description: '',
            food_calories: '',
            food_priority: '',
            food_completed: false
        })
    }

 
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Add New Food</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.food_description}
                               onChange={this.onChangeFoodDescription}
                               />
                    </div>
                    <div className="form-group">
                        <label>Calories: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.food_calories}
                               onChange={this.onChangeFoodCalories}
                               />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityBreakfast"
                                   value="Breakfast"
                                   checked={this.state.food_priority==='Breakfast'}
                                   onChange={this.onChangeFoodPriority}
                                   />
                            <label className="form-check-label">Breakfast</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityLunch"
                                   value="Lunch"
                                   checked={this.state.food_priority==='Lunch'}
                                   onChange={this.onChangeFoodPriority}
                                   />
                            <label className="form-check-label">Lunch</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityDinner"
                                   value="Dinner"
                                   checked={this.state.food_priority==='Dinner'}
                                   onChange={this.onChangeFoodPriority}
                                   />
                            <label className="form-check-label">Dinner</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="prioritySnack"
                                   value="Snack"
                                   checked={this.state.food_priority==='Snack'}
                                   onChange={this.onChangeFoodPriority}
                                   />
                            <label className="form-check-label">Snack</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Food" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}