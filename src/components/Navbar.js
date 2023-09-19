
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

    return (
        <nav ref={node => {
            if(node){
                // node.style.setProperty('background-color', props.color, 'important')
            }
        }} className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} px-5`}>
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="About">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="TextForm">TextForm</Link>
                    </li>
                </ul>
                
            </div>
            <div className={`form-check form-switch mx-2 text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" onClick= {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
            
            <div className={`mx-2 text-${props.mode==='light'?'dark':'light'}`}>
                <input type="color"  value={props.color} className=' mx-2' onChange={props.customMode}/>
                Custom Mode
            </div>

        </nav>
    )
}

Navbar.protoTypes = {title:PropTypes.string};