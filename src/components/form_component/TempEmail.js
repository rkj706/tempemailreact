import React, { Component } from 'react'

export class TempEmail extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;

        return (
            <div className="form">
                <h4>Create your own temporary email address</h4>
                <input 
                    className="text-input"
                    type="text" 
                    placeholder="Enter your username" 
                    value={values.username} 
                    onChange={handleChange('username')}
                />  
                <input 
                    className="text-input"
                    type="text" 
                    placeholder="domain" 
                    value={values.domain} 
                    onChange={handleChange('domain')}
                />  
                <button className="btn btn-primary" onClick={this.continue}>
                    next
                </button>

            </div>
        )
    }
}

export default TempEmail
