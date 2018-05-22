import React, { Component } from 'react';
import ContactUs from './ContactUs';
import SignUp from './signUp';
import VisibilitySensor from 'react-visibility-sensor';
import MediaQuery from 'react-responsive';
import bgmain from '../../templates/img/bgmain3.jpg';

export default class FormSection extends Component {
    state = {
        height: 10,
        width: 10,
        visibility: false,
        active:true,
    }
    componentWillMount() {
        this.setState({ height: window.innerHeight, width: window.innerWidth });
    }
    handleScroll(response) {
        if (response) {
            this.setState({ visibility: true ,active :false})
        }
    }
    render() {
        return (
            <div>
                <MediaQuery query="(min-device-width: 1224px)">

                    <VisibilitySensor
                        onChange={ (x) => this.handleScroll(x) }
                        partialVisibility
                        delayedCall
                        minTopValue={ 20 }
                        active={this.state.active}
                    >
                        <div style={ { display: 'flex', flex: 1, flexDirection: 'column', backgroundImage: "url(" +  bgmain + ")",overflow:'hidden',backgroundSize:'cover',height: this.state.height - 60, width: this.state.width, alignItems: 'center', justifyContent: 'center', } }>
                            <div style={ { display: 'flex', flex: 1, color: '#fff', fontSize: 24, fontWeight: 'bold', alignItems: 'center', justifyContent: 'center' } }>
                                Connect With Us ?
                            </div>
                            <div style={ { display: 'flex', flex: 6, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', } }>
                                <div style={ { display: 'flex', flex: 2, color: '#fff', alignItems: 'flex-start', justifyContent: 'flex-start' } }>
                                    <ContactUs visibility={ this.state.visibility } />
                                </div>
                                <div style={ { flex: 3, marginLeft: 300, color: '#fff' } }>
                                    <SignUp visibility={ this.state.visibility } />
                                </div>
                            </div>
                        </div>
                    </VisibilitySensor>
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1224px)">

                    <VisibilitySensor
                        onChange={ (x) => this.handleScroll(x) }
                        partialVisibility
                        delayedCall
                        minTopValue={ 20 }
                    >
                        <div style={ { display: 'flex', flex: 1, flexDirection: 'column', backgroundImage: "url(" + bgmain + ")", height: this.state.height *2, width: this.state.width, alignItems: 'center', justifyContent: 'center' } }>
                            <div style={ { display: 'flex', flex: 1, color: '#fff', fontSize: 24, fontWeight: 'bold', alignItems: 'center', justifyContent: 'center' } }>
                                Connect With Us ?
                            </div>
                            <div style={ { display: 'flex', flex: 6, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' } }>
                                <div style={ { display: 'flex', flex: 2, color: '#fff', alignItems: 'flex-start', justifyContent: 'flex-start' } }>
                                    <ContactUs visibility={ this.state.visibility } />
                                </div>
                                <div style={ { display: 'flex', flex: 2, color: '#fff', alignItems: 'center', justifyContent: 'center',marginLeft:20,marginRight:20 } }>
                                    <SignUp visibility={ this.state.visibility } />
                                </div>
                            </div>
                        </div>
                    </VisibilitySensor>
                </MediaQuery>
            </div>
        )
    }
}