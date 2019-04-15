import React, {Component} from 'react';

export default class CreateFood extends Component {

    constructor(props) {
        super(props);

        this.onChangeFoodDescription = this.onChangeFoodDescription.bind(this);
        this.onChangeFoodResponsible = this.onChangeFoodResponsible.bind(this);
        this.onChangeFoodPriority = this.onChangeFoodPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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
        });
    }

    onChangeFoodResponsible(e) {
        this.setState({
            food_responsible: e.target.value 
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
        console.log(`Food Responsible: ${this.state.food_responsible}`);
        console.log(`Food Priority: ${this.state.food_priority}`);
        console.log(`Food Completed: ${this.state.food_completed}`);

        this.setState({
            food_description: '',
            food_responsible: '',
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
                        <label>Responsible: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.food_responsible}
                               onChange={this.onChangeFoodResponsible}
                               />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityLow"
                                   value="Low"
                                   checked={this.state.food_priority==='Low'}
                                   onChange={this.onChangeFoodPriority}
                                   />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityMedium"
                                   value="Medium"
                                   checked={this.state.food_priority==='Medium'}
                                   onChange={this.onChangeFoodPriority}
                                   />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityHigh"
                                   value="High"
                                   checked={this.state.food_priority==='High'}
                                   onChange={this.onChangeFoodPriority}
                                   />
                            <label className="form-check-label">High</label>
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