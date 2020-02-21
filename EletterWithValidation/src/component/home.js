import React, { Component } from 'react';
import '../component/home.css'
import Cards from './Cards';
import { BrowserRouter as Router, Route, withRouter, Link } from 'react-router-dom'
import { MDBBtn } from "mdbreact";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import home3 from './Assests/home.png'
import printer from './Assests/print.jpeg'  
import Dropdown from './dropdown';
import Axios from 'axios'
import Example from './Example.js';
import MailComponent from './Email/MailComponent';
import { Thumbnail } from 'react-bootstrap';

 export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from:"nilesh.gupta6818@gmail.com",
      message:"from email webservice",
      tos:["nilesh.g@testyantra.com"],
      ccs:["nilesh.gupta6818@gmail.com"],
      waterMark:'',
      showWaterMark:false
    }
  }

  sendEmail = () => {

    Axios.post('http://localhost:8080/send-email', this.state)
      .then((response) => {
        console.log(" details" + this.state.email)
        console.log(response.data.message)
        if (response.data.statusCode === 201) {

           alert("suceess")

        } else if (response.data.statusCode === 401) {
               
        }

      }).catch((error) => {

        console.log(error);
      })
  }

 
   printPreview=(containerid)=>{
    /*  containerid = 'container-id'
    if (document.selection) { // IE
      var range = document.body.createTextRange();
      range.moveToElementText(document.getElementById(containerid));
      range.select();
  } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(document.getElementById(containerid));
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
   } 
   window.print()*/
   this.props.setHeader(true);
   }



  showWatermark=(data)=>{
             
    this.setState({
      show:data
    },()=>{this.props.showWatermark(this.state.show)})
    
  }

  logout=()=>{
   
     
    localStorage.clear();
   /*  window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
        window.history.go(1);
    }; */
    /* window.history.pushState(null, null, window.location.href);
  window.history.back();
  window.history.forward();
  window.onpopstate = function () {window.history.go(1); }; */
    this.props.history.push('/');
  }
  sendBack(){
    this.props.sendData();
  }

  render() {
    return (
      <div>

     {/*    <div>
          <nav class="navbar fixed-top navbar-expand-lg scrolling-navbar" style={{backgroundColor:'#343A40'}} >
   
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">

                <Dropdown/> 

             {/* <MDBDropdown >
              <MDBDropdownToggle caret color="#343A40" >
                <small style={{ color: 'white' ,marginTop: '12px'}}><p style={{display:'inline',marginTop:'5px'}}>E-Letter </p></small>
              </MDBDropdownToggle  >
              <MDBDropdownMenu className="dropdown-menu1" basic>
                <MDBDropdownItem > <li> <Link to="/hr"><div style={{display:'inline'}}>HR Letter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></Link> </li></MDBDropdownItem>
                <MDBDropdownItem > <li> <Link to="/InputOfferLetter" >Offer Letter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link> </li></MDBDropdownItem>
                <MDBDropdownItem > <li> <Link to="/InputTrainingLetter">Training Letter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link> </li></MDBDropdownItem>
                <MDBDropdownItem ><li> <Link to="/InputIncrementLetter">Increment Letter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link> </li></MDBDropdownItem>
                <MDBDropdownItem ><li> <Link to="/InputDesignationLetter">Designation Change Letter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </Link> </li></MDBDropdownItem>
                <MDBDropdownItem ><li> <Link to="/InputDepuationLetter">Deputation Letter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link> </li></MDBDropdownItem>
                <MDBDropdownItem > <li> <Link to="/inputConfirmation">Confirmation Letter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link> </li></MDBDropdownItem>
                <MDBDropdownItem ><li> <Link to="/InputRelivingLetter">Relieving Letter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link> </li></MDBDropdownItem>
                <MDBDropdownItem >  <li> <Link to="/InputExitLetter">Exit Letter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link> </li></MDBDropdownItem>
                <MDBDropdownItem ><li> <Link to="/InputcertificateLetter">Certification Letter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link> </li></MDBDropdownItem>
                <MDBDropdownItem ><li> <Link to="/InputTrainingCommitLetter">Training Commitment Letter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link> </li></MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown> }
                 <li>
                <Link class="nav-link" to="/cards"><img style={{width:35}} src={home3} /> <span class="sr-only">(current)</span></Link>
                </li>
               
                <li style={{  position: 'absolute',right: '10vw'}}>

              {   this.props.buttonShow?<Example  showWatermark={this.showWatermark.bind()}/>:null}

                </li>
              
              
                <li style={{marginTop: '-2px'}} class="nav-item avatar dropdown">
                  <a class="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="http://kartavyasadhana.in/assets/images/user.png" class="rounded-circle z-depth-0" alt="avatar image" />
                  </a>
                  <div class="dropdown-menu dropdown-menu-lg-right dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-5">
                    <a class="dropdown-item waves-effect waves-light" href="#">Profile-Settings</a>
                    <Link class="dropdown-item waves-effect waves-light" to='/'>Logout</Link>

                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
 */}

    <div>
  
    <nav style={{height:'65px'}} class="navbar navbar-expand-md new-bg navbar-dark">
       
               
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
           <Dropdown /> 
        <li style={{marginTop: '11px'}}>
        <Link class="nav-link" to="/cards"><img style={{width:35}} src={home3} onClick={()=>{localStorage.setItem("editClick",'')}}/> <span class="sr-only">(current)</span></Link>
                </li>
    
    </ul>
    </div>
    {this.props.buttonShow?<button onClick={()=>{window.history.back();localStorage.setItem("editClick",true)}} className="btn btn-warning">Edit</button>:null}
    {this.props.buttonShow?<MailComponent/>:null}
    
    {/* {   this.props.buttonShow?<img onClick={this.printPreview} style={{ width: 38, cursor: 'pointer', borderRadius: '100px' }} src={printer} />:null} */}

    {  this.props.buttonShow?<Example showWatermark={this.showWatermark.bind()  }/>:null}
    <div style={{marginTop: '-2px'}} class="nav-item nav-item avatar dropdown">
   
              <div class="nav-link new-link">
              <a class="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="http://kartavyasadhana.in/assets/images/user.png" class="rounded-circle z-depth-0" alt="avatar image" />
<small>{localStorage.getItem("email").substring(0, localStorage.getItem("email").lastIndexOf("@")).toUpperCase()}</small>
                  </a>
                  <div class="dropdown-menu dropdown-menu-lg-right dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-5">
                  {/*   <a class="dropdown-item waves-effect waves-light" href="#">Profile-Settings</a> */}
                    <Link class="dropdown-item waves-effect waves-light" onClick={this.logout}>Logout</Link>

                  </div>

              </div>
            </div>
    </nav>



    </div>


      </div>
    );
  }
}
export default withRouter(Home)