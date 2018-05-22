import React, { Component } from 'react';
import NavBar from '../component/navbar';
import Intro from './Intro';
import AppDetail from './appDetail';
import Background from "../templates/img/bgPic1.jpg";
import { Parallax } from 'react-parallax';
import AppStatus from './appStats';
import FormSection from './FormSection';
import { HashLoader } from 'react-spinners';
//import Perf from 'react-addons-perf';

let spinnerVal;
export default class Home extends Component {
    state = {
        height: 10,
        width: 10,
        loading: true
    };
    componentDidMount() {
        spinnerVal = setTimeout(() => {
            this.setState({ loading: false });
        }, 3000);
    };

    componentWillUnmount() {
        clearTimeout(spinnerVal);
    };

    componentWillMount() {
        this.setState({ height: window.innerHeight, width: window.innerWidth });
    };
    componentDidUpdate() {
        /*Perf.stop()
         Perf.getLastMeasurements()
         Perf.printInclusive()
         Perf.printExclusive()
         Perf.printWasted()
    Perf.printOperations()*/
    }
    render() {
        if (!this.state.loading)
            return (
                <div>

                    <NavBar />
                    <Intro />
                    <div>
                        <Parallax
                            blur={ { min: -5, max: 5 } }
                            bgImage={ Background}
                            bgImageAlt="Carri-On pic"
                            strength={ 200 }
                        >
                            <div style={ {
                                display: 'flex',
                                flex: 1,
                                alignItems: 'center',
                                fontFamily: 'cursive',
                                height: this.state.height * .7,
                                color: '#E32F',
                                fontSize: 24,
                                fontStretch: 1,
                                fontWeight: 'bold'
                            } }>
                                "DO A SMART BUSINESS WITH CARRI-ON,
                            <br /> WE CARRY YOUR GOODS TO YOUR VALUABLE CUSTOMER IN TIME"
                         </div>
                        </Parallax>
                    </div>
                    <AppDetail />
                    <Parallax
                        blur={ 1 }
                        bgImage={ require('../templates/img/bgpic2.jpg') }
                        bgImageAlt="Carri-On pic"
                        strength={ 300 }
                    >
                        <AppStatus />
                    </Parallax>
                    <FormSection />
                    <footer style={ { display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 20, paddingBottom: 10, backgroundColor: '#bbb', color: '#fff' } }>
                        © Designed and Developed by Ishab and team.
                </footer>
                </div>
            )
        else
            return (
                <div style={ { display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: this.state.height, width: this.state.width } }>
                    <HashLoader
                        color={ '#E12D28' }
                        loading={ this.state.loading }
                        size={ this.state.width / 6 }
                    />
                </div>
            )
    }
}