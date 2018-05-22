import React, { Component } from 'react';


export default class Button extends Component{
    render(){
        const {label, onClick} = this.props;

        return(
            <div>
                <button
                 onClick={onClick}
                 style={{paddingLeft:25,paddingRight:25,borderWidth:1,borderRadius:10,height:42,backgroundColor:'transparent',color:'#fff'}}
                 >
                    {label}
                </button>
            </div>
        )
    }
}