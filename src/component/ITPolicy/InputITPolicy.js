import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'
import moment from 'moment';

export class InputITPolicy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            salute: 'Mr.',
            employeeName: '',
            employeeId: '',
            joiningDate: '',
            address: '',
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
            showAddress: '',
            showEmployeeName: '',
            showInvalidEmployeeName: '',
            showEmployeeId: '',
            showJoiningDate: '',
            showDate: '',
            showCIN: '',
            showDesignation: '',
            validDate: '',

            //validation message state variable
            errorMsgEmployeeName: '',
            errorMsgEmpId: '',
            errorMsgDesignation: '',
            errorMsgAddress: ''


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
                joiningDate: this.props.empData.joiningDate,
                address: this.props.empData.address
            })

        }
        var that = this;

    }


    hideEmployeeName = () => {
        this.setState({
            showEmployeeName: false
        })
    }
    hideInvalidEmployeeName = () => {
        this.setState({
            showInvalidEmployeeName: false
        })
    }
    hideAddress = () => {
        this.setState({
            showAddress: false
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
        debugger;

        console.log("Checkbox value ==", event.target.value)
        if (event.target.value == 'false') {
            this.setState({
                withWaterMark: true
            })
            console.log("if  ==", this.state.withWaterMark)
        }
        else {
            debugger;
            this.setState({
                withWaterMark: false
            })
            console.log("else  ==", this.state.withWaterMark)

        }
    }

    onChangeHeader = (event) => {

        debugger;

        console.log("Checkbox value ==", event.target.value)
        if (event.target.value == 'false') {
            this.setState({
                withHeader: true
            })
            console.log("if  ==", this.state.withHeader)
        }
        else {
            debugger;
            this.setState({
                withHeader: false
            })
            console.log("else  ==", this.state.withHeader)

        }


    }
    validation = () => {
        debugger
        console.log("inside CDM")
        debugger;

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
        console.log("Date =", d.setMonth(d.getMonth() + 7))

        console.log("dattetaetaetaet ", this.state)
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
        let address = (document.getElementById("address").value).trim();
        let employeeName = (document.getElementById("employeeName").value).trim();
        let selectedDate = new Date(joiningDate)
        let now = new Date()

        console.log("Inside Validation", joiningDate, employeeName, designation, employeeId);

debugger
       
        if (!employeeName.match(/^[A-Za-z ]+$/) || employeeName === "" || employeeName.length > 20) {
            if (employeeName === "") {
                this.setState({
                    showEmployeeName: true,
                    errorMsgEmployeeName: "Please fill out Name field *"
                })
            } else if (employeeName.length > 20) {
                this.setState({
                    showEmployeeName: true,
                    errorMsgEmployeeName: "EmployeeName should be less than 20"
                })
            }
            else {
                this.setState({
                    showEmployeeName: true,
                    errorMsgEmployeeName: "EmployeeName should be letter"
                })
            }
        }
        if (!employeeId.match(/^[TYC\W+0-9]+$/) || employeeId === "" || employeeId.length !== 9) {
            if (employeeId === "") {
                this.setState({
                    showEmployeeId: true,
                    errorMsgEmpId: "Please fill out ID field *"
                })
            }
            else {
                this.setState({
                    showEmployeeId: true,
                    errorMsgEmpId: "ID is invalid"
                })
            }



        }

        if (!designation.match(/^[A-Za-z\s]+$/) || designation === "" || designation.length > 30) {
            if (designation === "") {
                this.setState({
                    showDesignation: true,
                    errorMsgDesignation: "Please fill out Designation field *"
                })
            }
            else if (designation.length > 30) {
                this.setState({
                    showDesignation: true,
                    errorMsgDesignation: "length should less than 30"
                })
            }
            else {
                this.setState({
                    showDesignation: true,
                    errorMsgDesignation: "Designation should be letter"
                })
            }

        }

        if (!address.match(/^[A-Za-z\s]+$/) || address === "" || address.length > 100) {
            if (address === "") {
                this.setState({
                    showAddress: true,
                    errorMsgAddress: "Please fill out address field *"
                })
            }
            else if (address.length > 100) {
                this.setState({
                    showAddress: true,
                    errorMsgAddress: "length should less than 30"
                })
            }
            else {
                this.setState({
                    showAddress: true,
                    errorMsgAddress: "errorMsgAddress should be letter"
                })
            }

        }
        
        if (joiningDate === "") {
            this.setState({ showJoiningDate: true })
        }

        

    }

    pass = (event) => {
        event.preventDefault();
        console.log("data========", this.state)
        this.props.clicked(this.state)
        if (!this.state.showAddress && !this.state.showDate && !this.state.showDesignation && !this.state.showEmployeeName && !this.state.showEmployeeId) {
            this.props.history.push('/ITPolicy')
        }


    }


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
                                        <h3 className="text-center black-text font-bold ">IT Policy Letter</h3>
                                    </div>
                                    <div className="card-body ">
                                        <form onSubmit={this.pass}>

                                            <div className="row">

                                                <div className="col-md-3" style={{ paddingTop: '25px' }}>
                                                    <select class="browser-default custom-select" autocomplete="off" value={this.state.salute} name="salutation" title="salutation" id="salutation" onChange={(event) => {
                                                        this.setState({
                                                            salute: event.target.value
                                                        })
                                                    }}>
                                                        <option selected value="Mr.">Mr.</option>
                                                        <option value="Ms.">Ms.</option>
                                                        <option value="Mrs.">Mrs.</option>
                                                    </select>
                                                </div>
                                                <div className="col-9">
                                                    <MDBInput autocomplete="off" onKeyPress={() => { debugger; this.hideEmployeeName(); }} onClick={() => { this.hideEmployeeName(); }}
                                                        value={this.state.employeeName} label="Employee Name" className="w-100" name="employeeName" title="Employee Name" id="employeeName" onChange={(event) => {
                                                            this.setState({
                                                                employeeName: event.target.value
                                                            }); this.hideEmployeeName();
                                                        }} />
                                                </div>
                                            </div>
                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-3 p-0" >

                                                </div>
                                                <div className="col-9 p-0" style={{ width: 0 }}>
                                                    {this.state.showEmployeeName ? <div id="errordiv" className="container-fluid">{this.state.errorMsgEmployeeName} </div> : null}

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
                                                <div className="col-6 p-0" >
                                                    {this.state.showEmployeeId ? <div id="errordiv" className="container-fluid">{this.state.errorMsgEmpId}</div> : null}


                                                </div>
                                                <div className="col-6 p-0" style={{ width: 0 }}>
                                                    {this.state.showDesignation ? <div id="errordiv" className="container-fluid">{this.state.errorMsgDesignation}</div> : null}

                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12">
                                                    <MDBInput autocomplete="off" type="date" max="2050-12-31" value={this.state.joiningDate} onKeyPress={() => { this.hideJoiningDate(); this.hideInvaliddate() }} onClick={() => { this.hideJoiningDate(); this.hideInvaliddate() }} label="Joining Date" title="Joining Date" name="Joining Date" id="joiningDate" onChange={(event) => {
                                                        this.setState({
                                                            joiningDate: event.target.value
                                                        }); this.hideJoiningDate(); this.hideInvaliddate();
                                                    }} />
                                                </div>

                                            </div>
                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-12 p-0">
                                                    {this.state.showJoiningDate ? <div id="errordiv" className="container-fluid">Please fill out JoiningDate field * </div> : null}

                                                </div>

                                            </div>

                                            {/* address */}
                                            <div class="row">
                                                <div class="col-12">
                                                    <MDBInput autocomplete="off" value={this.state.address} label="Address" type="textarea" name="address" id="address" title="address" onChange={(event) => {
                                                        this.setState({
                                                            address: event.target.value
                                                        }); this.hideAddress()
                                                    }} />
                                                </div>

                                            </div>

                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-6 p-0" >
                                                    {this.state.showAddress ? <div id="errordiv" className="container-fluid">{this.state.errorMsgAddress}</div> : null}


                                                </div>

                                            </div>



                                            <div className=" input-group w-50 container-fluid">
                                                <MDBBtn outline type="submit" id="generate" onClick={this.validation} outline className=" form-control-plaintext  justify-content-center text-center" color="primary">Generate</MDBBtn>

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

export default withRouter(InputITPolicy)