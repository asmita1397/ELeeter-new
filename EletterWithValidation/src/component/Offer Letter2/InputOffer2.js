import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import $ from 'jquery'
import { withRouter } from 'react-router-dom';
import moment from 'moment';

export class InputOffer2Letter extends Component {


    constructor(props) {
        super(props);
        this.state = {
            employeeName: '',
            fatherName: '',
            age: '',
            address: '',
            designation: '',
            offerValidity: '',
            companyLocation: '',
            salary: '',
            date: '',
            salute: 'S/o',
            withWaterMark: false,
            withHeader: false,

            // validation variable
            showName: '',
            showfatherName: '',
            showAge: '',
            showAddress: '',
            showDesignation: '',
            showCompanyLocation: '',
            showOfferValidity: '',
            showSalary: "",
            showInvalidDate: '',
            showInvalidEmployeeName:'',

        }
    }


    componentDidMount() {
        let editClick = localStorage.getItem("editClick");
        if (editClick) {
            this.setState({



                salute: this.props.empData.salute,
                employeeName: this.props.empData.employeeName,
                fatherName: this.props.empData.fatherName,
                age: this.props.empData.age,
                address: this.props.empData.address,
                designation: this.props.empData.designation,
                offerValidity: this.props.empData.offerValidity,
                companyLocation: this.props.empData.companyLocation,
                salary: this.props.empData.salary,
            })

        }

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


        var that = this;
        $(document).ready(function () {
            $('#genrate').click(function (e) {
                let employeeName = (document.getElementById("employeeName").value).trim();
                let fatherName = (document.getElementById("fatherName").value).trim();
                let designation = (document.getElementById("designation").value).trim();
                let companyLocation = (document.getElementById("companyLocation").value).trim();
                let offerValidity = (document.getElementById("offerValidity").value).trim();
                let address = (document.getElementById("address").value).trim();
                let age = (document.getElementById("age").value).trim();
                let salary = (document.getElementById("salary").value).trim();
                let selectedDate = new Date(offerValidity).setHours(23);
                let TodaysDate = new Date()






                if (offerValidity === "") {
                    that.setState({ showOfferValidity: true })
                }
                if (salary === "") {
                    that.setState({ showSalary: true })
                }
                if (companyLocation === "") {
                    that.setState({ showCompanyLocation: true })
                }
                if (designation === "") {
                    that.setState({ showDesignation: true })
                }
                if (age === "") {
                    that.setState({ showAge: true })
                }
                if (address === "") {
                    that.setState({ showAddress: true })
                }


                if (fatherName === "") {
                    that.setState({ showFatherName: true })
                }
                if (employeeName === "") {
                    that.setState({ showName: true })
                }


                if (selectedDate < TodaysDate) {
                    that.setState({
                        showInvalidDate: "true"
                    })

                    return false;
                }
                if(employeeName.length>20 )
                {
                    that.setState({ 
                    showInvalidEmployeeName: true,
                     }) 
                    return false;
                }

                if (designation != "" && companyLocation != "" && employeeName != "" && offerValidity !== "" && fatherName != "" && age != "" && address != "" && salary != "") {

                    return true;

                }
                else {

                    return false;
                }
            });
        });

    }

    onCheckHandler = (event) => {

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



    pass = (event) => {
        event.preventDefault();


        this.props.clicked(this.state)
        this.props.history.push('/Offerletter2')
    }


    hideEmployeeName = () => {
        this.setState({
            showName: false
        })
    }
    hideInvalidEmployeeName = () => {
        this.setState({
            showInvalidEmployeeName: false
        })
    }
    hideFatherName = () => {
        this.setState({
            showFatherName: false
        })
    }
    hideAddress = () => {
        this.setState({
            showAddress: false
        })
    }
    hideAge = () => {
        this.setState({
            showAge: false
        })
    }
    hideSalary = () => {
        this.setState({
            showSalary: false
        })
    }

    hideOfferValidity = () => {
        this.setState({
            showOfferValidity: false
        })
    }

    hideCompanyLocation = () => {
        this.setState({
            showCompanyLocation: false
        })
    }
    hideDesignation = () => {
        this.setState({
            showDesignation: false
        })
    }

    hideInvalidDate = () => {
        this.setState({
            showInvalidDate: false
        })
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
                                        <h3 className="text-center black-text font-bold ">Offer Letter</h3>
                                    </div>
                                    <div className="card-body ">
                                        <form onSubmit={this.pass}>

                                            <div class="row">

                                                <div className="col-md-2" style={{ paddingTop: '25px' }}>
                                                    <select style={{ width: '70px' }} value={this.state.salute} class="browser-default custom-select" autocomplete="off" name="salutation" title="salutation" id="salutation" onChange={(event) => {
                                                        this.setState({
                                                            salute: event.target.value
                                                        })
                                                    }}>
                                                        <option selected value="S/o">Mr.</option>
                                                        <option value="D/o">Ms.</option>
                                                        <option value="D/o ">Mrs.</option>
                                                    </select>
                                                </div>
                                                <div class="col-10">
                                                <MDBInput autocomplete="off" onKeyPress={()=>{debugger ;this.hideEmployeeName(); this.hideInvalidEmployeeName()}} onClick={()=>{this.hideEmployeeName(); this.hideInvalidEmployeeName()}}
                                                        value={this.state.employeeName} label="Employee Name" className="w-100" name="employeeName" title="Employee Name" id="employeeName" onChange={(event) => {
                                                            this.setState({
                                                                employeeName: event.target.value
                                                            });this.hideEmployeeName();this.hideInvalidEmployeeName();
                                                        }} />
                                                </div>

                                            </div>


                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="offset-2 col-10 p-0" >
                                                    {this.state.showName ? <div id="errordiv" className="container-fluid">Please fill out Name field * </div> : null}
                                                    {this.state.showInvalidEmployeeName ? <div id="errordiv" className="container-fluid">Maximum length of this field is 20 Characters * </div> : null}
                                                </div>
                                                <div className="col-5 p-0" style={{ width: 0 }}>


                                                </div>
                                            </div>


                                            <div class="row">
                                                <div className="col-6">
                                                    <MDBInput autocomplete="off" value={this.state.fatherName} label="Father Name" type="text" name="fatherName" id="fatherName" title="fatherName" onChange={(event) => {
                                                        this.setState({
                                                            fatherName: event.target.value
                                                        }); this.hideFatherName();
                                                    }} />
                                                </div>
                                                <div className="col-6">
                                                    <MDBInput autocomplete="off" value={this.state.age} label="Age" type="number" name="age" id="age" title="Age" onChange={(event) => {
                                                        this.setState({
                                                            age: event.target.value
                                                        }); this.hideAge()
                                                    }} min="18" max="120" />
                                                </div>
                                            </div>

                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-6 p-0" >
                                                    {this.state.showFatherName ? <div id="errordiv" className="container-fluid">Please fill out Father Name field * </div> : null}

                                                </div>
                                                <div className="col-6 p-0" style={{ width: 0 }}>
                                                    {this.state.showAge ? <div id="errordiv" className="container-fluid">Please fill out Age field * </div> : null}

                                                </div>
                                            </div>



                                            <div class="row">
                                                <div class="col-6">
                                                    <MDBInput autocomplete="off" value={this.state.designation} label="Designation" type="text" name="designation" id="designation" title="designation" onChange={(event) => {
                                                        this.setState({
                                                            designation: event.target.value
                                                        }); this.hideDesignation()
                                                    }} />
                                                </div>
                                                <div className="col-6">
                                                    <MDBInput autocomplete="off" value={this.state.companyLocation} label="Company Location" type="text" name="companyLocation" id="companyLocation" title="companyLocation" onChange={(event) => {
                                                        this.setState({
                                                            companyLocation: event.target.value
                                                        }); this.hideCompanyLocation()
                                                    }} />
                                                </div>
                                            </div>

                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-6 p-0" >
                                                    {this.state.showDesignation ? <div id="errordiv" className="container-fluid">Please fill out Designation field * </div> : null}

                                                </div>
                                                <div className="col-6 p-0" style={{ width: 0 }}>
                                                    {this.state.showCompanyLocation ? <div id="errordiv" className="container-fluid">Please fill out Company Location field * </div> : null}

                                                </div>
                                            </div>


                                            <div class="row">
                                                <div class="col-6">
                                                    <MDBInput autocomplete="off" value={this.state.salary} label="Salary" type="number" name="salary" id="salary" title="salary" onChange={(event) => {
                                                        this.setState({
                                                            salary: event.target.value
                                                        }); this.hideSalary();
                                                    }} />
                                                </div>
                                                <div class="col-6">
                                                    <MDBInput autocomplete="off" value={this.state.offerValidity} onClick={() => { this.hideOfferValidity(); this.hideInvalidDate() }} onKeyPress={() => { this.hideInvalidDate() }} max="2050-12-31" type="date" label="Offer Validity" title="Offer Validity" name="offerValidity" id="offerValidity" onChange={(event) => {
                                                        this.setState({
                                                            offerValidity: event.target.value
                                                        }); this.hideOfferValidity(); this.hideInvalidDate();
                                                    }} />
                                                </div>
                                            </div>

                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-6 p-0" >
                                                    {this.state.showSalary ? <div id="errordiv" className="container-fluid">Please fill out Salary field * </div> : null}

                                                </div>
                                                <div className="col-6 p-0" style={{ width: 0 }}>
                                                    {this.state.showOfferValidity ? <div id="errordiv" className="container-fluid">Please fill out Offer Validity field * </div> : null}
                                                    {this.state.showInvalidDate ? <div id="errordiv" className="container-fluid">Offer Date must be greater or equal to today's date* </div> : null}
                                                </div>
                                            </div>


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

                                                <div className="col-12 p-0" style={{ width: 0 }}>
                                                    {this.state.showAddress ? <div id="errordiv" className="container-fluid">Please fill out Address field * </div> : null}
                                                </div>
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
        )
    }
}
export default withRouter(InputOffer2Letter)


