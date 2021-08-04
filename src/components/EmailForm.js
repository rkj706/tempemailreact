import React, { Component } from 'react'
import TempEmail from './form_component/TempEmail';
import PersonalEmail from './form_component/PersonalEmail';
import OtpForm from './form_component/OtpForm';
import SuccessForm from './form_component/SuccessForm';
import "./EmailForm.css"

export default class EmailForm extends Component {

    state = {
        step : 1,
        username: '',
        domain: '',
        personal_email: '',
        otp: '',
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }


    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    // handle field change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step } = this.state;
        const { username, domain, personal_email, otp } = this.state;
        const values = { username, domain, personal_email, otp };

        switch (step) {
            case 1: 
                return (
                <TempEmail 
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
                );
            case 2: 
                return (
                <PersonalEmail 
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
                );
            case 3: 
                return (
                <OtpForm 
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
                );
            case 4:
                return (
                <SuccessForm 
                    values={values}
                />
                );

            default: 
                console.log('Hi!!');
            }
    }
}
