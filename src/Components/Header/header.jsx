import React, { Component } from 'react';
import "./header.css"
import {Link} from "react-router-dom"

class Header extends React.Component {
    state={
        value:""
    }

    handleOnChange = (e)=>{
        let uv = e.target.value;
        this.setState({
            value:uv
        })
    }

    handleKeyPress = (e)=>{
        if(e.key == "Enter"){
            this.props.handleChange(this.state.value);
        }
    }
    render() { 
        return <div className="header">
            <div className="logo">
            <img src="netflix.svg" alt="" />
            </div>
            <div className="input-box">
            <input type="text" value={this.state.value} onChange={this.handleOnChange} onKeyPress={this.handleKeyPress} className="form-control" placeholder="Search" />
            </div>
            
            <div className="links">
                <div className="link">
                    <Link to="/">Home</Link>
                </div>
                <div className="link">
                    <Link to="/favourites">Favourites</Link>
                </div>

            </div>
            
        </div>;
    }
}
 
export default Header;