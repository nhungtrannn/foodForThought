import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class FoodList extends Component {

    constructor(props) {
        super(props);
        this.state = {food: []};
    }



    componentDidMount() {
        axios.get('http://localhost:4000/food')
            .then(response => {
                this.setState({food: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <h3>Food List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Calories</th>
                            <th>Breakfast/Lunch/Dinner</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}