import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class ReactForWorld extends Component{  
    // constructor(){
    //     super()
    // }
    render(){
        const element = <h2>你好，世界</h2>
        return(
            <div>
                <h1>Hello {this.props.name}</h1>
                {element} 
            </div>          
        )         
    }     
}
export default ReactForWorld;
