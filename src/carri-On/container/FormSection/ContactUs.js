import React, { Component } from 'react';
import {
    Form,
    FormControl,
    ControlLabel,
    FormGroup,
} from 'react-bootstrap';
import Button from '../../component/Button';
import { Animated } from 'react-animated-css';

export default class ContactUs extends Component {
    render() {
        var { visibility } = this.props;
        return (
            <Animated
                animationIn="fadeInDownBig"
                animationOut="zoomOutDown"
                animationInDelay={ 800 }
                isVisible={ visibility }
            >
                <div>
                    <div style={ { paddingBottom: 20, fontWeight: 'bold', fontSize: 24 } }>
                        Quotation 
                    </div>
                        <Form horizontal>
                            <FormGroup  >
                                <ControlLabel>Name</ControlLabel>
                                <FormControl
                                    type="text"
                                    placeholder="@Prashant Thapa"
                                />
                            </FormGroup>
                            <FormGroup >
                                <ControlLabel>Phone Number</ControlLabel>
                                <FormControl type="email" placeholder="@123456789" />
                            </FormGroup>
    
                            <FormGroup >
                                <ControlLabel>Email</ControlLabel>
                                <FormControl type="email" placeholder="abc@example.com" />
                            </FormGroup>
    
                            <FormGroup >
                                <ControlLabel>Textarea</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="textarea" style={ { height: 100, width: 350 } } />
                            </FormGroup>
                        </Form>
                        <Button label={ 'Message US' } />
                </div>
            </Animated>
        )
    }
}