import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import '../CommonStyle.css'
import $ from 'jquery'
import '../CommonStyle.css'
import moment from 'moment';
export class InputTrainingCommitLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            salute: 'Mr.',
            companyLocation: '',
            employeeName: '',
            designation: '',
            joiningDate: '',
            courseName: '',
            trainingStartDate: '',
            trainingEndDate: '',
            branchName: '',
            branchLocation: '',
            date: '',
            withWaterMark: false,
            withHeader: false,
            gender: {
                gender1: 'He',
                gender2: 'his',
                gender3: 'him'
            },

            // validation variable
            showEmployeeName: '',
            showCompanyLocation: '',
            showdDesignation: '',
            showJoiningDate: '',
            showCourseName: '',
            showTrainingStartDate: '',
            showTrainingEndDate: '',
            showBranchName: '',
            showBranchLocation: '',
            showInvalidDate: ''


        }
    }




    componentDidMount() {
        let editClick = localStorage.getItem("editClick");
        if (editClick) {
            this.setState({



                employeeName: this.props.empData.employeeName,
                employeeId: this.props.empData.employeeId,
                designation: this.props.empData.designation,
                joiningDate: this.props.empData.joiningDate,
                courseName: this.props.empData.courseName,
                companyLocation: this.props.empData.companyLocation,
                trainingStartDate: this.props.empData.trainingStartDate,
                trainingEndDate: this.props.empData.trainingEndDate,
                branchName: this.props.empData.branchName,
                branchLocation: this.props.empData.branchLocation,
            })

        }

        var that = this;
        $(document).ready(() => {
            $('#generate').click((e) => {

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
                    date: currentdate
                })

                if (that.state.salute === "Ms." || that.state.salute === "Mrs.") {
                    that.setState({
                        ...that.state,
                        gender: {
                            gender1: 'She',
                            gender2: 'her',
                            gender3: 'her'
                        }
                    })
                }



                let employeeName = (document.getElementById("employeeName").value).trim();
                let designation = (document.getElementById("designation").value).trim();
                let joiningDate = (document.getElementById("joiningDate").value).trim();
                let companyLocation = (document.getElementById("companyLocation").value).trim();
                let courseName = (document.getElementById("courseName").value).trim();
                let branchName = (document.getElementById("branchName").value).trim();
                let branchLocation = (document.getElementById("branchLocation").value).trim();
                let trainingStartDate = (document.getElementById("trainingStartDate").value).trim();
                let trainingEndDate = (document.getElementById("trainingEndDate").value).trim();
                let trainingStartDateSelected = new Date(trainingStartDate)
                let trainingEndDateSelected = new Date(trainingEndDate)


                if (designation === "") {
                    this.setState({ showDesignation: true })
                }

                if (employeeName === "") {
                    this.setState({ showEmployeeName: true })
                }
                if (companyLocation === "") {
                    that.setState({ showCompanyLocation: true })
                }
                if (joiningDate === "") {
                    this.setState({ showJoiningDate: true })
                }
                if (courseName === "") {
                    this.setState({ showCourseName: true })
                }
                if (branchName === "") {
                    this.setState({ showBranchName: true })
                }
                if (branchLocation === "") {
                    this.setState({ showBranchLocation: true })
                }
                if (trainingStartDate === "") {
                    this.setState({ showTrainingStartDate: true })
                }
                if (trainingEndDate === "") {
                    this.setState({ showTrainingEndDate: true })
                }

                if (trainingEndDateSelected < trainingStartDateSelected) {
                    that.setState({
                        showInvalidDate: "true"
                    })

                    return false;
                }



                if (designation != "" && employeeName != "" && joiningDate != "" && branchName != '' && branchLocation != "" && courseName != "" && trainingStartDate != "" && trainingEndDate != "") {
                    return true;
                }
                else {
                    return false;
                }




            });
        });
    }


    onCheckHandler = (event) => {
        ;

        if (event.target.value == 'false') {
            this.setState({
                withWaterMark: true
            })
        }
        else {
            ;
            this.setState({
                withWaterMark: false
            })

        }
    }

    onChangeHeader = (event) => {

        ;

        if (event.target.value == 'false') {
            this.setState({
                withHeader: true
            })
        }
        else {
            ;
            this.setState({
                withHeader: false
            })

        }


    }

    hideCompanyLocation = () => {
        this.setState({
            showCompanyLocation: false
        })
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
    hideTrainingStartDate = () => {
        this.setState({
            showTrainingStartDate: false
        })
    }
    hideJoiningDate = () => {
        this.setState({
            showJoiningDate: false
        })
    }
    hideCourseName = () => {
        this.setState({
            showCourseName: false
        })
    }

    hideBranchName = () => {
        this.setState({
            showBranchName: false
        })
    }

    hideBranchLocation = () => {
        this.setState({
            showBranchLocation: false
        })
    }
    hideTrainingEndDate = () => {
        this.setState({
            showTrainingEndDate: false
        })
    }

    hideInvalidDate = () => {
        this.setState({
            showInvalidDate: false
        })
    }




    pass = (event) => {
        event.preventDefault();

        this.props.clicked(this.state)
        this.props.history.push('/TrainingCommit')

    }

    //edit

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
                                        <h3 className="text-center black-text font-bold ">Training Commitment Letter</h3>
                                    </div>
                                    <div className="card-body ">
                                        <form onSubmit={this.pass}>
                                            <div class="row">
                                                <div className="col-2" style={{ paddingTop: '25px' }}>
                                                    <select class="browser-default custom-select" value={this.state.salute} style={{ width: '62px' }} autocomplete="off" name="salutation" title="salutation" id="salutation" onChange={(event) => {
                                                        this.setState({
                                                            salute: event.target.value
                                                        })
                                                    }}>
                                                        <option selected value="Mr.">Mr.</option>
                                                        <option value="Ms.">Ms.</option>
                                                        <option value="Mrs.">Mrs.</option>
                                                    </select>
                                                </div>

                                                <div class="col-md-5">
                                                    <MDBInput autocomplete="off" value={this.state.employeeName} onKeyPress={this.hideEmployeeName} label="Employee Name" className="w-100" name="employeeName" title="Employee Name" id="employeeName" onChange={(event) => {
                                                        this.setState({
                                                            employeeName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div class="col-5">
                                                    <MDBInput autocomplete="off" value={this.state.designation} onKeyPress={this.hideDesignation} label="Designation" type="text" name="designation" id="designation" title="designation" onChange={(event) => {
                                                        this.setState({
                                                            designation: event.target.value
                                                        })
                                                    }} />
                                                </div>

                                            </div>

                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-2"></div>
                                                <div className="col-5 p-0" >
                                                    {this.state.showEmployeeName ? <div id="errordiv" className="container-fluid">Please fill out Name field * </div> : null}


                                                </div>
                                                <div className="col-5 p-0" >
                                                    {this.state.showDesignation ? <div id="errordiv" className="container-fluid">Please fill out Designation field * </div> : null}
                                                </div>

                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" value={this.state.joiningDate} onClick={this.hideJoiningDate} onKeyPress={this.hideJoiningDate} type="date" max="2050-12-31" label="Joining Date" title="Joining Date" name="JoiningDate" id="joiningDate" onChange={(event) => {
                                                        this.setState({
                                                            joiningDate: event.target.value
                                                        }); this.hideJoiningDate()
                                                    }} />
                                                </div>
                                                <div className="col-6">
                                                    <MDBInput autocomplete="off" value={this.state.companyLocation} onKeyPress={this.hideCompanyLocation} label="Company Location" className="w-100" name="companyLocation" title="Company Location" id="companyLocation" onChange={(event) => {
                                                        this.setState({
                                                            companyLocation: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-6 p-0" style={{ width: 0 }}>
                                                    {this.state.showJoiningDate ? <div id="errordiv" className="container-fluid">Please fill out Joining Date field * </div> : null}
                                                </div>
                                                <div className="col-6 p-0" style={{ width: 0 }}>
                                                    {this.state.showCompanyLocation ? <div id="errordiv" className="container-fluid">Please fill out Company Location field * </div> : null}
                                                </div>
                                            </div>


                                            <div class="row">
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" value={this.state.trainingStartDate} onClick={this.hideTrainingStartDate} onKeyPress={this.hideTrainingStartDate}  max="2050-12-31" type="date" label="Traininng Start Date" title="Training Start Date" name="trainingStartDate" id="trainingStartDate" onChange={(event) => {
                                                        this.setState({
                                                            trainingStartDate: event.target.value
                                                        }); this.hideTrainingStartDate();
                                                    }} />
                                                </div>
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" value={this.state.trainingEndDate} onClick={() => { this.hideTrainingEndDate(); this.hideInvalidDate() }} onKeyPress={() => { this.hideTrainingEndDate(); this.hideInvalidDate() }} max="2050-12-31" type="date" label="Training End Date" title="Training End Date" name="trainingStartDate" id="trainingEndDate" onChange={(event) => {
                                                        this.setState({
                                                            trainingEndDate: event.target.value
                                                        }); this.hideTrainingEndDate(); this.hideInvalidDate()
                                                    }} />
                                                </div>
                                            </div>

                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-6 p-0" >
                                                    {this.state.showTrainingStartDate ? <div id="errordiv" className="container-fluid">Please fill out Training Start Date field * </div> : null}
                                                </div>
                                                <div className="col-6 p-0" style={{ width: 0 }}>
                                                    {this.state.showTrainingEndDate ? <div id="errordiv" className="container-fluid">Please fill out Training End Date field * </div> : null}
                                                    {this.state.showInvalidDate ? <div id="errordiv" className="container-fluid"> Training End Date greater than Start Date * </div> : null}
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <MDBInput autocomplete="off" value={this.state.courseName} onKeyPress={this.hideCourseName} label="Course Name" name="courseName" id="courseName" title="Course Name" onChange={(event) => {
                                                        this.setState({
                                                            courseName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div class="col-md-4">
                                                    <MDBInput autocomplete="off" value={this.state.branchName} onKeyPress={this.hideBranchName} label="Branch Name" name="branchName" id="branchName" title="Branch Name" onChange={(event) => {
                                                        this.setState({
                                                            branchName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div class="col-md-4">
                                                    <MDBInput autocomplete="off" value={this.state.branchLocation} onKeyPress={this.hideBranchLocation} type="text" label="Branch Location" title="Branch Location" name="branchLocation" id="branchLocation" onChange={(event) => {
                                                        this.setState({
                                                            branchLocation: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-4 p-0" style={{ width: 0 }}>
                                                    {this.state.showCourseName ? <div id="errordiv" className="container-fluid">Enter Course Name * </div> : null}
                                                </div>


                                                <div className="col-4 p-0" >
                                                    {this.state.showBranchName ? <div id="errordiv" className="container-fluid">Enter Branch Name * </div> : null}


                                                </div>
                                                <div className="col-4 p-0" style={{ width: 0 }}>
                                                    {this.state.showBranchLocation ? <div id="errordiv" className="container-fluid">Enter Branch Location * </div> : null}
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
export default withRouter(InputTrainingCommitLetter)