import React from 'react';

import './sign-in.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor() {
        super();
        
        this.state = {
            'email': '',
            'password': ''
        }
    }
    
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: ''})
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <p>Sign in with your name and password</p>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label='email' required/>

                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='password' required/>
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={ SignInWithGoogle } isGoogleSignIn>
                            {''}
                            Sign in with Google
                            {''}
                        </CustomButton>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default SignIn;
