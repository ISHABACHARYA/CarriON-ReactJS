import React, { Component } from 'react';
import CardDetail from '../../component/CardDetail';
import MediaQuery from 'react-responsive';
import VisibilitySensor from 'react-visibility-sensor';
import bgmain from '../../templates/img/bgmain2.jpg';
//import Perf from 'react-addons-perf';

export default class AppDetail extends Component {
    state = {
        height: 10,
        width: 10,
        visibility:false,
        active:true
    }
    componentWillMount() {
        this.setState({ height: window.innerHeight, width: window.innerWidth });
    }
    handleScroll(response) {
        //Perf.start();
        if (response) {
            this.setState({ visibility: true,active:false })
        }
    }
    componentDidUpdate(){
       /* Perf.stop()
        Perf.getLastMeasurements()
        Perf.printInclusive()
        Perf.printExclusive()
        Perf.printWasted()
        Perf.printOperations()*/
    }
    render() {
        return (
            <VisibilitySensor
                onChange={ (x) => this.handleScroll(x) }
                partialVisibility
                delayedCall
                minTopValue={20} 
                active={this.state.active}
            >
                <div>
                    <MediaQuery query="(min-device-width: 1224px)">
                        <div style={ {
                            display: 'flex', position: 'relative', flex: 1, flexDirection: 'column', height: this.state.height - 40, width: this.state.width, backgroundImage: "url(" + bgmain + ")", overflow: 'hidden', backgroundSize: 'cover'
                        } }>

                            <div style={ { display: 'flex', flex: 1, alignItems: 'flex-end', justifyContent: 'center', fontWeight: 'bold', color: '#fff', fontSize: 24 } }>
                                Why US ?
                        </div>
                            <div style={ { display: 'flex', flexDirection: 'row', flex: 7, alignItems: 'center', justifyContent: 'center' } }>
                                <div style={ { flex: .5 } }>
                                </div>
                                <div style={ { flex: 1 } }>
                                    <CardDetail
                                        label='We deliver the good u choosed to your doorstep.Logistics, with trust and flexibility.Affordable cost format for everyone.Do u value about time? We value your time more '
                                        imgSource={ require('../../templates/img/deliGift.jpg') }
                                        visibility={ this.state.visibility }
                                    />
                                </div>
                                <div style={ { flex: 1 } }>

                                    <CardDetail
                                        label='We provides delivery and logistics to individuals.Full supply chain services for B2B.Logistics service for each e-commerce.Free riders with van, cars, taxi or bikes can deliver goods through us'
                                        imgSource={ require('../../templates/img/deliGadi.jpeg') }
                                        visibility={ this.state.visibility }

                                    />
                                </div>
                                <div style={ { flex: 1 } }>
                                    <CardDetail
                                        label='Deliver goods doorstep in desired time.Express service upto 2 hours on special place.Logistics service for each e-commerce.Logistics service for Each individual'
                                        imgSource={ require('../../templates/img/deliTarkari.jpg') }
                                        visibility={ this.state.visibility }

                                    />

                                </div>
                            </div>
                        </div>
                    </MediaQuery >
                    <MediaQuery query="(max-device-width: 1224px)">
                        <div style={ {
                            display: 'flex', position: 'relative', flex: 1, flexDirection: 'column', height: 1240, width: this.state.width, alignItems: 'center', justifyContent: 'center', backgroundImage: "url(" + bgmain + ")", overflow: 'hidden', backgroundSize: 'cover'
                        } }>

                            <div style={ { display: 'flex', flex: 1, alignItems: 'flex-end', justifyContent: 'center', fontWeight: 'bold', color: '#fff', fontSize: 24 } }>
                                Why US ?
                        </div>
                            <div style={ { flex: 7, alignItems: 'center', justifyContent: 'center' } }>

                                <div style={ { flex: 1 } }>
                                    <CardDetail
                                        label='We deliver the good u choosed to your doorstep.Logistics, with trust and flexibility.Affordable cost format for everyone.Do u value about time? We value your time more '
                                        imgSource={ require('../../templates/img/deliGift.jpg') }
                                        visibility={ this.state.visibility }

                                    />
                                </div>
                                <div style={ { flex: 1 } }>
                                    <CardDetail
                                        label='We provides delivery and logistics to individuals.Full supply chain services for B2B.Logistics service for each e-commerce.Free riders with van, cars, taxi or bikes can deliver goods through us'
                                        imgSource={ require('../../templates/img/deliGadi.jpeg') }
                                        visibility={ this.state.visibility }

                                    />
                                </div>
                                <div style={ { flex: 1 } }>
                                    <CardDetail
                                        label='Deliver goods doorstep in desired time.Express service upto 2 hours on special place.Logistics service for each e-commerce.Logistics service for Each individual'
                                        imgSource={ require('../../templates/img/deliTarkari.jpg') }
                                        visibility={ this.state.visibility }

                                    />
                                </div>
                            </div>
                        </div>
                    </MediaQuery >
                </div>
            </VisibilitySensor>
        )
    }
}