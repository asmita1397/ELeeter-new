import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'
import moment from 'moment';

export class InputHRLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            salute: 'Mr.',
            employeeName: '',
            employeeId: '',
            joiningDate: '',
            date: '',
            CIN: '',
            designation: '',
            withWaterMark: false,
            withHeader: false,
            gender: {
                gender1: 'He',
                gender2: 'him',
                gender3: 'his'
            },

            // valiadation state variables
            showEmployeeName: '',
            showEmployeeId: '',
            showJoiningDate: '',
            showDate: '',
            showCIN: '',
            showDesignation: '',
            validDate: '',


            // valiadation msg state variables
            showEmployeeNameMsg: '',
            showEmployeeIdMsg: '',
            showDesignationMsg: '',
            errorMsgJoiningDate:''
        }
    }


    componentDidMount() {

        let editClick = localStorage.getItem("editClick");
        if (editClick) {
            this.setState({

                salute: this.props.empData.salute,
                employeeName: this.props.empData.employeeName,
                employeeId: this.props.empData.employeeId,
                designation: this.props.empData.designation,
                joiningDate: this.props.empData.joiningDate
            })

        }

    }

 validation =()=>{
    var that = this;



            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];


            const nth = (d) => {
                if (d > 3 && d < 21) return 'th';
                switch (d % 10) {
                    case 1: return "st";
                    case 2: return "nd";
                    case 3: return "rd";
                    default: return "th";
                }
            }

            let today = new Date();
            let currentdate = today.getDate() + nth(today.getDate()) + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear();
            this.setState({
                date: today
            })

            var d = new Date();

            if (this.state.salute === "Ms." || this.state.salute === "Mrs.") {
                this.setState({
                    ...this.state,
                    gender: {
                        gender1: 'She',
                        gender2: 'her',
                        gender3: 'her'
                    }
                })
            }

          
            let joiningDate = (document.getElementById("joiningDate").value).trim();
            let designation = (document.getElementById("designation").value).trim();
            let employeeId = (document.getElementById("employeeId").value).trim();
            let employeeName = (document.getElementById("employeeName").value).trim();
            let selectedDate = new Date(joiningDate).setHours(23)
            let now = new Date()

console.log(selectedDate)
console.log(joiningDate)


           
            //****************************************     for     employeeName   ************************************* */


            if (employeeName !== "") {
                this.setState({
                    showEmployeeName: false
                })
                if (employeeName.match(/^[a-zA-Z\s]*$/)) {
                    this.setState({
                        showEmployeeName: false
                    })

                    if (employeeName.length > 2) {
                        this.setState({
                            showEmployeeName: false
                        })
                        if (employeeName.length < 20) {
                            this.setState({
                                showEmployeeName: false
                            })

                        }

                        else {
                            this.setState({
                                showEmployeeName: true,
                                showEmployeeNameMsg: "the field shouldnot contain more than 20 characters * "
                            })


                        }

                    } else {
                        this.setState({
                            showEmployeeName: true,
                            showEmployeeNameMsg: "the field should contain mimimum  3 characters * "
                        })
                    }


                } else {
                    this.setState({
                        showEmployeeName: true,
                        showEmployeeNameMsg: "the field should contain only alphabets * "
                    })
                }


            }
            else {
                this.setState({
                    showEmployeeName: true,
                    showEmployeeNameMsg: "Please fill out Name field * "
                })
            }

            //****************************************     for     employeeId   ************************************* */

            if (employeeId !== "") {
                this.setState({
                    showEmployeeId: false
                })
                if (employeeId.match(/^([A-Z]){3}([0-9]){6}$/) && employeeId.length === 9) {
                    this.setState({
                        showEmployeeId: false
                    })

                } else {
                    this.setState({
                        showEmployeeId: true,
                        showEmployeeIdMsg: "Please enter EmpID in Format:TYC123456"
                    })
                }

            } else {
                this.setState({
                    showEmployeeId: true,
                    showEmployeeIdMsg: "Please fill out EmployeeId field* "
                })
            }


            //****************************************     for     designation   ************************************* */

            if (designation !== "") {
                this.setState({
                    showDesignation: false
                })
                if (designation.match(/^[a-zA-Z\s]*$/)) {
                    this.setState({
                        showDesignation: false
                    })

                    if (designation.length > 2) {
                        this.setState({
                            showDesignation: false
                        })
                        if (designation.length < 20) {
                            this.setState({
                                showDesignation: false
                            })

                        }

                        else {
                            this.setState({
                                showDesignation: true,
                                showDesignationMsg: "Designation must not exceeded 20 characters* "
                            })


                        }

                    } else {
                        this.setState({
                            showDesignation: true,
                            showDesignationMsg: "Minimum 3 characters Required * "
                        })
                    }


                } else {
                    this.setState({
                        showDesignation: true,
                        showDesignationMsg: "Designation should contain only alphabets * "
                    })
                }


            }
            else {
                this.setState({
                    showDesignation: true,
                    showDesignationMsg: "Please fill out Designation field * "
                })
            }


           
            if ( joiningDate === "" ||  selectedDate <now) {


                console.log(selectedDate)
                console.log(now)
                if (joiningDate === "") {
                    this.setState({
                        showJoiningDate: true,
                        errorMsgJoiningDate: "Please fill out JoiningDate field *"
                    })
                }
                else  {
                    this.setState({
                        showJoiningDate: true,
                        errorMsgJoiningDate: "JoiningDate must greater than  Today's date"
                    })
                }
                
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
    hideJoiningDate = () => {
        this.setState({
            showJoiningDate: false
        })
    }
    hideCIN = () => {
        this.setState({
            showCIN: false
        })
    }
    hideDesignation = () => {
        this.setState({
            showDesignation: false
        })
    }
    hideInvaliddate = () => {
        this.setState({
            validDate: false
        })

    }

    onCheckHandler = (event) => {


        if (event.target.value == 'false') {
            this.setState({
                withWaterMark: true
            })

        }
        else {

            this.setState({
                withWaterMark: false
            })


        }
    }

    onChangeHeader = (event) => {




        if (event.target.value == 'false') {
            this.setState({
                withHeader: true
            })

        }
        else {

            this.setState({
                withHeader: false
            })


        }


    }


    pass = (event) => {
        event.preventDefault();



        this.props.clicked(this.state)
        if (!this.state.showEmployeeName && !this.state.showEmployeeId && !this.state.showJoiningDate && !this.state.showDesignation && !this.state.validDate) {
            
        this.props.history.push('/hrLetter')
        }

    }

   
    //
    render() {

        return (
            <div>
                <Home buttonShow={false} />
                <div >
                    <div className="container-fluid mt-5">
                        <div className="row">
                            <div className="col-auto container mt-5 pb-5">
                                <div style={{ width: '500px' }} className="card m-auto shadow-lg mt-5">
                                    <div class="card-header" style={{ borderRadius: '0px !important', background: 'white' }} >
                                        <h3 className="text-center black-text font-bold ">HR Letter</h3>
                                    </div>
                                    <div className="card-body ">
                                        <form onSubmit={this.pass}>

                                            <div className="row">

                                                <div className="col-md-3" style={{ paddingTop: '25px' }}>
                                                    <select class="browser-default custom-select" autocomplete="off" value={this.state.salute} name="salute" title="salutation" id="salutation" required onChange={(event) => {
                                                        this.setState({
                                                            salute: event.target.value
                                                        })
                                                    }}>
                                                        <option value="Mr.">Mr.</option>
                                                        <option value="Ms.">Ms.</option>
                                                        <option value="Mrs.">Mrs.</option>
                                                    </select>

                                                </div>
                                                <div className="col-9">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideEmployeeName}
                                                        value={this.state.employeeName} label="Employee Name" className="w-100" name="employeeName" title="Employee Name" id="employeeName" onChange={(event) => {
                                                            this.setState({
                                                                employeeName: event.target.value
                                                            })
                                                        }} />
                                                </div>
                                            </div>
                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-3 p-0" >

                                                </div>
                                                <div className="col-9 p-0" style={{ width: 0 }}>
                                                    {this.state.showEmployeeName ? <div id="errordiv" className="container-fluid">{this.state.showEmployeeNameMsg}</div> : null}
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideEmployeeId} value={this.state.employeeId} label="Employee Id" name="employeeId" id="employeeId" title="Employee Id" onChange={(event) => {
                                                        this.setState({
                                                            employeeId: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div className="col-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideDesignation}
                                                        value={this.state.designation} label="Designation" name="designation" id="designation" title="Designation" onChange={(event) => {
                                                            this.setState({
                                                                designation: event.target.value
                                                            })
                                                        }} />
                                                </div>
                                            </div>
                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-lg-6 p-0" >
                                                    {this.state.showEmployeeId ? <div id="errordiv" className="container-fluid">{this.state.showEmployeeIdMsg} </div> : null}

                                                </div>
                                                <div className="col-6 p-0" style={{ }}>
                                                    {this.state.showDesignation ? <div id="errordiv" className="container-fluid">{this.state.showDesignationMsg}</div> : null}
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12">
                                                    <MDBInput autocomplete="off" max="2050-12-31" type="date" value={this.state.joiningDate} onKeyPress={() => { this.hideJoiningDate(); }} onClick={() => { this.hideJoiningDate();  }} label="Joining Date" title="Joining Date" name="Joining Date" id="joiningDate" onChange={(event) => {
                                                        this.setState({
                                                            joiningDate: event.target.value
                                                        }); this.hideJoiningDate(); 
                                                    }} />
                                                </div>

                                            </div>
                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-12 p-0">
                                                {this.state.showJoiningDate ? <div id="errordiv" className="container-fluid">{this.state.errorMsgJoiningDate}</div> : null}

                                                </div>

                                            </div>




                                            <div className=" input-group w-50 container-fluid">
                                                <MDBBtn outline type="submit" id="generate" outline className=" form-control-plaintext  justify-content-center text-center" color="primary" onClick={this.validation}>Generate</MDBBtn>

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

export default withRouter(InputHRLetter)