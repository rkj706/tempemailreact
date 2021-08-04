import React, { Component } from 'react'

export class SuccessForm extends Component {
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
                <h4>Temporary email address created successfully! </h4>
                <input 
                    className="form-contro-lg text-input bg-info rounded text-center"
                    type="text" 
                    value={values.username + values.domain}
                    readOnly 
                />  
                <div className="form-check my-2">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                        Forward emails to my personal address
                    </label>
                </div> 

                <div className="form-check my-2 font-weight-light">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                    <label className="form-check-label" for="flexCheckChecked">
                        Save to temp email
                    </label>
                </div>

                <button className="btn btn-primary my-2" onClick={this.continue}>
                    next
                </button>

            </div>
        )
    }
}

export default SuccessForm
