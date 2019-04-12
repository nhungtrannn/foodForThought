import React, {Component} from 'react';

export default class CreateFood extends Component {

    constructor(props) {
        super(props);

        this.state = {
            food_description: '',
            food_responsible: '',
            food_priority: '',
            food_completed: false
        }
    }

    onChangeFoodDescription(e) {
        this.setState({
            food_description: e.target.value 
        })
    }
 
    render() {
        return (
            <div>
                <p>Welcome to Create Food Component</p>
            </div>
        )
    }
}