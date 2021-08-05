import React, { Component } from 'react'

export class OtpForm extends Component {
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
                    className="text-input bg-light"
                    type="text" 
                    value={values.personal_email} 
                    readOnly
                />  
                <input  
                    className="text-input"
                    type="password" 
                    placeholder="Enter the OTP" 
                    value={values.otp} 
                    onChange={handleChange('otp')}
                /> 
                <button onClick={this.continue} disabled={!values.otp}>
                    VERIFY
                </button>

            </div>
        )
    }
}

export default OtpForm
