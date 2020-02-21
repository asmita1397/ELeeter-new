import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'
import moment from 'moment';
export class InputRelivingLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            salute: 'Mr.',
            employeeName: '',
            employeeId: '',
            designation: '',
            joiningDate: '',
            relievingDate: '',
            withWaterMark:false,
            withHeader:false,
            date: '',
            gender: { gender1:'He',
            gender2:'his',
            gender3:'him'
        },
        showEmployeeName: '',
        showEmployeeId:'',
        showDesignation: '',
        showJoiningDate: '',
        showRelievingDate: '',
        showinvalidDate:'',
        showinvalidEmployeeName:''
        }
    }

    componentDidMount() {
        let editClick = localStorage.getItem("editClick");
        if (editClick) {
            this.setState({

                salute: this.props.empData.salute,
                employeeName: this.props.empData.employeeName,
                employeeId:this.props.empData.employeeId,
                designation: this.props.empData.designation,
                joiningDate: this.props.empData.joiningDate,
                relievingDate: this.props.empData.relievingDate,
            })

        }

        let that = this;
        $(document).ready(function () {
            $('#generate').click(function (e) {

                const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
              ];
        
        
              const nth = (d)=> {
                if (d > 3 && d < 21) return 'th';
                switch (d % 10) {
                  case 1:  return "st";
                  case 2:  return "nd";
                  case 3:  return "rd";
                  default: return "th";
                }
              }
        
                let today = new Date();
                let currentdate = today.getDate()+nth(today.getDate()) + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
                that.setState({
                    date:  currentdate
                })
        

                if (that.state.salute === "Ms." || that.state.salute === "Mrs.") {
                    that.setState({
                        ...that.state,
                        gender : {
                            gender1:'She',
                            gender2:'her',
                            gender3:'her' 
                        }
                    })
                 }
                 let employeeName = (document.getElementById("employeeName").value).trim();
                 let employeeId = (document.getElementById("employeeId").value).trim();
                 let designation = (document.getElementById("designation").value).trim();
                 let joiningDate = (document.getElementById("joiningDate").value).trim();
                 let relievingDate = (document.getElementById("relievingDate").value).trim();
                 let selectedJoiningDate = new Date(joiningDate)
                let selectedrelievingDate =new Date(relievingDate)
 
                 if (employeeId === "") {
                     that.setState({ showEmployeeId: true })
                 }
                 if (designation === "") {
                     that.setState({ showDesignation: true })
                 }
                 if (employeeName === "") {
                     that.setState({ showEmployeeName: true })
                 }
 
                 if (joiningDate === "") {
                     that.setState({ showJoiningDate: true })
                 }
                 if (relievingDate === "") {
                     that.setState({ showRelievingDate: true })
                 }


                 if(selectedrelievingDate<=selectedJoiningDate){
                    that.setState({
                       showinvalidDate:true
                    }) 
                    
                 

                   return false;
              } 
            /*   if(!employeeName.match(/^[a-zA-Z]+$/)){
                that.setState({
                   showinvalidEmployeeName:true
                })   
                return false;
            }  */
 
                 if (employeeId != "" && designation != "" && employeeName != "" && joiningDate !== "" &&  relievingDate!="" ) {
                    
                     return true;
 
                 }
                 else {
                     return false;
                 }


            });
        });
    }


    onCheckHandler=(event)=>{
        ;

       
       if(event.target.value=='false'){
           this.setState({
               withWaterMark:true
           })
      
       }
       else{
           ;
           this.setState({
               withWaterMark: false
           })

       }
    }

    onChangeHeader=(event)=>{


      if(event.target.value=='false'){
          this.setState({
              withHeader:true
          })
      }
      else{
          ;
          this.setState({
              withHeader: false
          })

      }


     }

    hideEmployeeName = () => {
        this.setState({
            showEmployeeName: false
        })
    }
    hideEmployeeId = () => {
        this.setState({
            showEmployeeId: false
        })
    }
    hideDesignation = () => {
        this.setState({
            showDesignation: false
        })
    }
   
    hideJoiningDate = () => {
        this.setState({
            showJoiningDate: false
        })
    }
    hideRelievingDate = () => {
        this.setState({
            showRelievingDate: false
        })
    }
    hideInvalidDate=()=>{
        this.setState({
            showinvalidDate:false
        })
    }
    hideInvalidEmployeeName=()=>{
        this.setState({
            showinvalidEmployeeName:false
        })
    }


    pass = (event) => {
        event.preventDefault();

        this.props.clicked(this.state)
        this.props.history.push('/RelivingLetter')

    }


 //edit
 
//C:\Users\CBT\Desktop\version-2\e-letter\src\component\RelivingLetter


    render() {
       
        return (
            <div>
                //{console.log("a is =>",this.state.showinvalidEmployeeName)}
                <Home buttonShow={false} />
                <div >
                    <div className="container-fluid mt-5">
                        <div className="row">
                            <div className="col-auto container mt-5 pb-5">
                                <div style={{ width: '500px' }} className="card m-auto shadow-lg mt-5">
                                    <div class="card-header" style={{ borderRadius: '0px !important', background: 'white' }} >
                                        <h3 className="text-center black-text font-bold ">Relieving Letter</h3>
                                    </div>
                                    <div className="card-body ">
                                        <form onSubmit={this.pass}>
                                            <div class="row">

                                                <div className="col-md-3" style={{ paddingTop: '25px' }}>
                                                    <select class="browser-default custom-select"  value={this.state.salute} autocomplete="off"  name="salutation" title="salutation" id="salutation" onChange={(event) => {
                                                        this.setState({
                                                            salute: event.target.value
                                                        })
                                                    }}>

                                                        <option value="Mr."  selected>Mr.</option>
                                                        <option value="Ms.">Ms.</option>
                                                        <option value="Mrs.">Mrs.</option>
                                                    </select>
                                                </div>

                                                <div class="col-md-9">
                                                    <MDBInput autocomplete="off"  value={this.state.employeeName} /* onClick={()=>{this.hideEmployeeName();this.hideInvalidEmployeeName()}} onKeyPress={()=>{this.hideEmployeeName();this.hideInvalidEmployeeName()}} */ label="Employee Name" className="w-100" name="employeeName" title="Employee Name" id="employeeName" onChange={(event) => {
                                                        this.setState({
                                                            employeeName: event.target.value
                                                        });this.hideEmployeeName();this.hideInvalidEmployeeName();
                                                    }} />
                                                </div>
                                            </div>

                                            <div className="row" style={{padding:0}}>
                                               <div className="col-3 p-0" >
                                               </div>
                                               <div className="col-6 p-0" style={{width:0}}>
                                               {this.state.showEmployeeName ? <div id="errordiv" className="container-fluid">Please fill out Name field * </div> : null}
                                              
                                        
                                               { 
                                               this.state.showinvalidEmployeeName ? <div id="errordiv" className="container-fluid">hrkgkh</div> : null}
                                              
                                               </div>
                                           </div>


                                           <div class="row">
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off"  value={this.state.employeeId} onKeyPress={this.hideEmployeeId} label="Employee Id" className="w-100" name="employeeId" title="Employe Id" id="employeeId" onChange={(event) => {
                                                        this.setState({
                                                            employeeId: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off"  value={this.state.designation} onKeyPress={this.hideDesignation} label="Designation" type="text" name="designation" id="designation" title="designation" onChange={(event) => {
                                                        this.setState({
                                                            designation: event.target.value
                                                        })
                                                    }} />

                                                </div>

                                            </div>
                                            <div className="row">
                                                    <div className="col-6 p-0">
                                                    {this.state.showEmployeeId ? <div id="errordiv" className="container-fluid">Please fill out Employee Id field * </div> : null}
                                                    </div>
                                                    <div className="col-6 p-0">
                                                    {this.state.showDesignation ? <div id="errordiv" className="container-fluid">Please fill out Designation field * </div> : null}
                                                    </div>
                                            </div>


                                            <div class="row">
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off"  value={this.state.joiningDate} onClick={this.hideJoiningDate} onKeyPress={this.hideJoiningDate} type="date" max="2050-12-31" label="Joining Date" title="Joining Date" name="JoiningDate" id="joiningDate" onChange={(event) => {
                                                        this.setState({
                                                            joiningDate: event.target.value
                                                        });this.hideJoiningDate();
                                                    }} />
                                                </div>
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off"  value={this.state.relievingDate} onClick={()=>{this.hideRelievingDate();this.hideInvalidDate()}} onKeyPress={()=>{this.hideRelievingDate();this.hideInvalidDate()}}  type="date" max="2050-12-31" label="Relieving Date" title="relievingDate" name="relievingDate" id="relievingDate" onChange={(event) => {
                                                        this.setState({
                                                            relievingDate: event.target.value
                                                        });this.hideRelievingDate();this.hideInvalidDate()
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row" style={{padding:0}}>
                                               <div className="col-6 p-0" >
                                               {this.state.showJoiningDate ? <div id="errordiv" className="container-fluid">Please fill out Joining Date field * </div> : null}
                                           
                                           
                                               </div>
                                               <div className="col-6 p-0" style={{width:0}}>
                                               {this.state.showRelievingDate ? <div id="errordiv" className="container-fluid">Please fill out Relieving Date field * </div> : null}
                                               {this.state.showinvalidDate ? <div id="errordiv" className="container-fluid">Relieving Date greater than Joining Date * </div> : null}
                                               </div>
                                           </div>
                                            

                                            
                                           
 

                                            <div className=" input-group w-50 container-fluid">
                                                <MDBBtn outline id="generate" type="submit" className=" form-control-plaintext  justify-content-center text-center" color="primary">Generate</MDBBtn>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(InputRelivingLetter)