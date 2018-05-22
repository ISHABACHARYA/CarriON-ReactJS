import React, { Component } from 'react';
import Button from '../../component/Button';
import {
    Image
} from 'react-bootstrap';
import {Animated} from "react-animated-css";
import bgmain from '../../templates/img/bgmain2.jpg';

export default class Intro extends Component {
    state = {
        height: 10,
    }
    componentWillMount() {
        this.setState({ height: window.innerHeight });
    }
    shouldComponentUpdate() {
        return false
    }
    render() {
        return (
            <Animated animationIn="pulse" animationOut="lightSpeedOut" animationInDelay={500} isVisible={ true }>
                <div style={ { height: this.state.height, backgroundImage: "url(" + bgmain + ")", overflow: 'hidden', backgroundSize: 'cover', paddingLeft: 10, paddingRight: 4 } }>
                    <div style={ { display: 'flex', flex: 1, paddingTop: 100, flexDirection: 'row' } }>
                        <div style={ { flex: 3 } }>
                        </div>
                        <div style={ { flex: 2, paddingRight: 15 } }>
                          <Button label={ 'Become Partner' } />
                        </div>
                        <div style={ { flex: 2 } }>
                            <Button label={ 'Make Delivery' } />
                        </div>
                    </div>
    
                    <div style={ { display: 'flex', flex: 1, flexDirection: 'row', paddingLeft: 40 } }>
                        <div style={ { flex: 1, paddingTop: 100, } }>
                            <div>
                                <Button label={ 'Rider Login' } />
                            </div>
                            <div style={ { paddingTop: 20 } }>
                                <Button label={ 'User Login' } />
                            </div>
                        </div>
                        <div style={ { flex: 4, alignItems: 'center', justifyContent: 'center', paddingTop: 50 } }>
                            <Image src={ require('../../templates/img/deli.png') } alt="Carri-On" style={ { height: 400,color:'#fff' } } responsive/>
                        </div>
                    </div>
                    
                </div>
            </Animated>
        )
    }
}