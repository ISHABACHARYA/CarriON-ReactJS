import React, { Component } from 'react';
import {
    Image
} from 'react-bootstrap';
import { Animated } from 'react-animated-css';

export default class CardDetail extends Component {


    render() {
        var { imgSource, label, visibility } = this.props;
        return (

            <Animated animationIn="bounceInLeft" animationOut="zoomOutDown" animationInDelay={ 800 } isVisible={ visibility }>
                <article style={ {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 400,
                    width: 150,
                    borderWidth: 1,
                    borderColor: '#000',
                    shadowOffset: { height: 2, width: 1 },
                    shadowOpacity: .4,
                    shadowColor: '#ccc',
                    color: '#fff',
                } }>
                    <Image
                        src={ imgSource }
                        responsive
                        style={ { height: 100, width: 100, borderRadius: 10, } }
                    />

                    <hr />
                    <strong>
                        { label }
                    </strong>
                </article>
            </Animated>
        )
    }
};
