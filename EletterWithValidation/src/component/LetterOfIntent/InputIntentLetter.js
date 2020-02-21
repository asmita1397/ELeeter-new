import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import $ from 'jquery'
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import '../CommonStyle.css'
export default class InputIntentLetter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            employeeName: '',
            designation: '',
            companyLocation: '',
            reportingManager: '',
            joiningDate: '',
            trainingStartDate: '',
             withWaterMark:false,
             withHeader:false,
            // form validation variable

            showEmployeeName: '',
            showDesignation: '',
            showCompanyLocation: '',
            showReportingManager: '',
            showJoiningDate: '',
            showTrainingStartDate: '',

        }

    }

    componentDidMount() {

        let editClick = localStorage.getItem("editClick");
        if (editClick) {
            this.setState({

                
                employeeName: this.props.empData.employeeName,
                designation: this.props.empData.designation,
                companyLocation: this.props.empData.companyLocation,
                reportingManager: this.props.empData.reportingManager,
                joiningDate: this.props.empData.joiningDate,
                trainingStartDate: this.props.empData.trainingStartDate
            })

        }

        var that = this;
        $(document).ready(function () {
            $('#genrate').click(function (e) {
                let employeeName = (document.getElementById("employeeName").value).trim();
                let designation = (document.getElementById("designation").value).trim();
                let companyLocation = (document.getElementById("companyLocation").value).trim();
                let reportingManager = (document.getElementById("reportingManager").value).trim();
                //  let joiningDate = (document.getElementById("joiningDate").value).trim();
                let trainingStartDate = (document.getElementById("trainingStartDate").value).trim();


                if (trainingStartDate === "") {
                    that.setState({ showTrainingStartDate: true })
                }
                if (reportingManager === "") {
                    that.setState({ showReportingManager: true })
                }

                if (companyLocation === "") {
                    that.setState({ showCompanyLocation: true })
                }
                if (designation === "") {
                    that.setState({ showDesignation: true })
                }
                if (employeeName === "") {
                    that.setState({ showEmployeeName: true })
                }


                if (designation != "" && companyLocation != "" && employeeName != "" && reportingManager !== "" && trainingStartDate != '') {
                  
                    return true;

                }
                else {
                    return false;
                }
            });
        });
    }


    pass = (event) => {
        event.preventDefault();
       

        this.props.clicked(this.state)
        this.props.history.push('/IntentLetter')
    }


    hideEmployeeName = () => {
        this.setState({
            showEmployeeName: false
        })
    }
    hideDesignation = () => {
        this.setState({
            showDesignation: false
        })
    }
    hideCompanyLocation = () => {
        this.setState({
            showCompanyLocation: false
        })
    }
    hidereportingManager = () => {
        this.setState({
            showReportingManager: false
        })
    }
    hideJoiningDate = () => {
        this.setState({
            showJoiningDate: false
        })
    }

    hideTrainingStartDate = () => {
        this.setState({
            showTrainingStartDate: false
        })
    }




    hideInvalidDate = () => {
        this.setState({
            showInvalidDate: false
        })
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

        ;

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
     
     onChangeHeader=(event)=>{

        ;

      
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

  




    render() {
       
        return (
            <div>
                <div>
                    <Home buttonShow={false} />
                    <div >
                        <div className="container-fluid mt-5">
                            <div className="row">
                                <div className="col-auto container mt-5 pb-5">
                                    <div style={{ width: '500px' }} className="card m-auto shadow-lg mt-5">
                                        <div class="card-header" style={{ borderRadius: '0px !important', background: 'white' }} >
                                            <h3 className="text-center black-text font-bold ">Intent Letter</h3>
                                        </div>
                                        <div className="card-body ">
                                            <form onSubmit={this.pass}>

                                                <div class="row">
                                                    <div class="col-6">
                                                        <MDBInput autocomplete="off" value={this.state.employeeName} onKeyPress={this.hideEmployeeName} label="Employee Name" type="text" name="employeeName" id="employeeName" title="employeeName" onChange={(event) => {
                                                            this.setState({
                                                                employeeName: event.target.value
                                                            })
                                                        }} />
                                                    </div>
                                                    <div className="col-6">
                                                        <MDBInput autocomplete="off" value={this.state.designation} onKeyPress={this.hideDesignation} label="Designation" type="text" name="designation" id="designation" title="Designation" onChange={(event) => {
                                                            this.setState({
                                                                designation: event.target.value
                                                            })
                                                        }} />
                                                    </div>
                                                </div>


                                                <div className="row" style={{ padding: 0 }}>
                                                    <div className="col-6 p-0" >
                                                        {this.state.showEmployeeName ? <div id="errordiv" className="container-fluid">Please fill out Employee Name field * </div> : null}


                                                    </div>
                                                    <div className="col-6 p-0" style={{ width: 0 }}>
                                                        {this.state.showDesignation ? <div id="errordiv" className="container-fluid">Please fill out Designation  field * </div> : null}
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-6">
                                                        <MDBInput autocomplete="off" value={this.state.companyLocation} onKeyPress={this.hideCompanyLocation} label="Company Location" type="text" id="companyLocation" title="companyLocation" onChange={(event) => {
                                                            this.setState({
                                                                companyLocation: event.target.value
                                                            })
                                                        }} />
                                                    </div>
                                                    <div className="col-6">
                                                        <MDBInput autocomplete="off" value={this.state.reportingManager} onKeyPress={this.hidereportingManager} label="Reporting Manager" type="text" name="reportingManager" id="reportingManager" title="reportingManager" onChange={(event) => {
                                                            this.setState({
                                                                reportingManager: event.target.value
                                                            })
                                                        }} />
                                                    </div>
                                                </div>

                                                <div className="row" style={{ padding: 0 }}>
                                                    <div className="col-6 p-0" >
                                                        {this.state.showCompanyLocation ? <div id="errordiv" className="container-fluid">Please fill out Location  field * </div> : null}


                                                    </div>
                                                    <div className="col-6 p-0" style={{ width: 0 }}>
                                                        {this.state.showReportingManager ? <div id="errordiv" className="container-fluid">Please fill out Reporting Manager field * </div> : null}
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div className="col-12">
                                                        <MDBInput autocomplete="off" value={this.state.trainingStartDate} onKeyPress={this.hideTrainingStartDate} label="Training Start Date" max="2050-12-31" type="date" name="trainingStartDate" id="trainingStartDate" title="trainingStartDate"
                                                            onChange={(event) => {
                                                                this.setState({
                                                                    trainingStartDate: event.target.value
                                                                }); this.hideTrainingStartDate();
                                                            }} />
                                                    </div>
                                                </div>
                                                <div className="row" style={{ padding: 0 }}>

                                                    <div className="col-12 p-0">{this.state.showTrainingStartDate ? <div id="errordiv" className="container-fluid">Please fill out Training Start Date  field * </div> : null}</div>

                                                </div>
                                               
                                               



                                                <div className=" input-group w-50 container-fluid">
                                                    <MDBBtn outline type="submit" id="genrate" className=" form-control-plaintext  justify-content-center text-center" color="primary">Generate</MDBBtn>
                                                </div>
                                            </form>
                                        </div>
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
