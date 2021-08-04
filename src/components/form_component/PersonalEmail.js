import React, { Component } from 'react'

export class PersonalEmail extends Component {

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

                <button className="back-button text-primary" onClick={this.back}>
                    BACK
                </button>
                <h4>Personal email address</h4>
                <input  
                    className="text-input"
                    type="text" 
                    placeholder="Enter your email address to verify" 
                    value={values.personal_email} 
                    onChange={handleChange('personal_email')}
                />  
                <button onClick={this.continue}>
                    GET OTP
                </button>

            </div>
        )
    }
}

export default PersonalEmail
