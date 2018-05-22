import React, { Component } from 'react';
import {ResponsiveEmbed} from 'react-bootstrap';
import MediaQuery from 'react-responsive';

export default class AppStatus extends Component{
    state = {
        height: 10,
        width: 10,
    }
    componentWillMount() {
        this.setState({ height: window.innerHeight, width: window.innerWidth });
    }
    shouldComponentUpdate() {
        return false
    }
    render(){
        return(
           <div>
                <MediaQuery query="(min-device-width: 1224px)">
                    <div style={ { display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', height: this.state.height  } }>
                        <div style={ { width: this.state.width * .8, height: this.state.height * .5,marginBottom:180 } } >
                            <ResponsiveEmbed a16by9 >
                                <embed type="image/svg+xml" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FcarriOnService%2Fvideos%2F739195992953573%2F&show_text=0&width=560" />
                            </ResponsiveEmbed>
                        </div>
                    </div>
                </MediaQuery>

                <MediaQuery query="(max-device-width: 1224px)">
                    <div style={ { display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', height: this.state.height * .4 } }>
                        <div style={ { width: this.state.width * .8, height: this.state.height * .3, } } >
                            <ResponsiveEmbed a16by9 >
                                <embed type="image/svg+xml" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FcarriOnService%2Fvideos%2F739195992953573%2F&show_text=0&width=560" />
                            </ResponsiveEmbed>
                        </div>
                    </div>
                </MediaQuery>
           </div>
        )
    }
}