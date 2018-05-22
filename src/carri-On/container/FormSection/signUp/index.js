import React, { Component } from 'react';
import {
    FormControl,
    ControlLabel,
    FormGroup,
} from 'react-bootstrap';
import Button from '../../../component/Button';
import { Animated } from 'react-animated-css';

export default class SignUp extends Component {
    render() {
        var {visibility} = this.props;
        return (
            <Animated
                animationIn="fadeInDownBig" 
                animationOut="zoomOutDown" 
                animationInDelay={ 800 } 
                isVisible={ visibility }
            >
                <div>
                    <div style={{paddingBottom:20,fontWeight:'bold',fontSize:24}}>
                        SIGN UP
                    </div>
                    <form>
                        <div style={ { display: 'flex', flexDirection: 'row' } }>
                            <FormGroup>
                                <ControlLabel>First Name</ControlLabel>
    
                                <FormControl
                                    type="text"
                                    placeholder="@Steve"
                                />
                                <FormControl.Feedback />
                            </FormGroup>
                            <div style={ { width: 10 } }>
    
                            </div>
                            <FormGroup>
                                <ControlLabel>Last Name</ControlLabel>
    
                                <FormControl
                                    type="text"
                                    placeholder="@joobs"
                                />
                                <FormControl.Feedback />
                            </FormGroup>
                        </div>
    
                            <FormGroup >
                                <ControlLabel>Phone Number</ControlLabel>
                                <FormControl type="number" placeholder="@123456789" />
                            </FormGroup>
    
                            <FormGroup >
                                <ControlLabel>Email</ControlLabel>
                                <FormControl type="email" placeholder="abc@example.com" />
                            </FormGroup>
    
                            <FormGroup >
                                <ControlLabel>Password</ControlLabel>
                                <FormControl type="password" placeholder="@Password123" />
                            </FormGroup>
    
                            <FormGroup >
                                <ControlLabel>Repeat Password</ControlLabel>
                                <FormControl type="password" placeholder="@Password123" />
                            </FormGroup>
                        <Button label={'Sign Up'} />
                    </form>
                </div>
            </Animated>
        )
    }
}