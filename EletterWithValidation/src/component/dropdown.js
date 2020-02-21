import React, { Component } from 'react'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { MDBBtn } from "mdbreact";
import { BrowserRouter as Router, Route, withRouter, Link } from 'react-router-dom'
import '../component/dropdown.css'
import '../component/home.css'
export default class Dropdown extends Component {
    render() {
        return (
            <div>
                 
                <div className="container">
                    <div className="row">
                        <div className="dropdown">
                            <button onClick={()=>{localStorage.setItem("editClick",'')}}  className="btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="ty-logo">E</span><span className="dropdown"> Letter</span>
                          </button>
                            <ul className="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                                <li className="dropdown-submenu">
                                    <a className="dropdown-item"  href="#">On Board</a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-item"><Link  tabIndex={-1} to="/InputInternship">Internship Letter</Link></li>
                                        <li className="dropdown-item"><Link to="/inputConfirmation">Confirmation Letter</Link></li>
                                        <li className="dropdown-item"><Link to="/hr">Hr Letter</Link></li>
                                        <li className="dropdown-item"><Link to="/InputIntentLetter">Intent Letter</Link></li>
                                    </ul>
                                </li>
                                <li className="dropdown-divider" />
                                <li className="dropdown-submenu">
                                    <a className="dropdown-item" tabIndex={-1} href="#">Carrier</a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-item"><Link tabIndex={-1} to="/InputcertificateLetter">Certificate Letter</Link></li>
                                        <li className="dropdown-item"><Link to="/InputDepuationLetter">Deputation Letter</Link></li>
                                        <li className="dropdown-item"><Link to="/InputDesignationLetter">Designation Letter</Link></li>
                                        <li className="dropdown-item"><Link to="/InputIncrementLetter">Increment Letter</Link></li>
                                        <li className="dropdown-item"><Link to="/InputTrainingCommitLetter">Training Letter</Link></li>
                                    </ul>
                                </li>
                                <li className="dropdown-divider" />
                                <li className="dropdown-submenu">
                                    <a className="dropdown-item" tabIndex={-1} to="#">Relieve</a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-item"><Link tabIndex={-1} to="/InputRelivingLetter">Relieving Letter</Link></li>
                                        <li className="dropdown-item"><Link to="/InputExitLetter">Exit Letter</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

</div>
              




  
    
        )
    }
}
