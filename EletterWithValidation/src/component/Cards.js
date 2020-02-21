import React, { Component } from 'react';
import '../component/Cards.css'
import { BrowserRouter as Router, Route, withRouter, Link } from 'react-router-dom'
import Home from './home';
import exit from './Assests/exit.svg'
import confirm from './Assests/confirm.png'
import certificate from './Assests/Certificate.png'
import Deputation from './Assests/Deputation.png'
import Designation from './Assests/Designation.png'
import Confirm from './Assests/confirm.png'
import home from './Assests/home.png'
import HR from './Assests/HR.png'
import increment from './Assests/Increment.png'
import offer from './Assests/Offer.png'
import relieve from './Assests/relieve.png'
import intern from './Assests/intern.png'
import training from './Assests/training.png'
import TrainingCommit from './Assests/TrainingCommit.png'
import offerletter2 from './Assests/offerLetter2.png'
import salaryRevision from './Assests/salaryRevision.png'
import BDPolicy from './Assests/BDPolicy.png'
import hrPolicy from './Assests/hrPolicy.png'
import ProjectPolicy from './Assests/ProjectPolicy.png'
import ITPolicy from './Assests/ITpolicy.png'
import ConsultantOffer from './Assests/Consultant.png'
import DeliveryPolicy from './Assests/DeliveryPolicy.png'

export default class Cards extends Component {


    constructor(props) {
        super(props);
        this.state = {
            emp: []
        }
    }

    render() {
        return (
            <div>
                <Home />
                <div className="row " style={{ marginLeft: '255px', marginRight: '20px', marginTop: '40px' }}>

                    <Link to='/hr' >

                        <div className="card HomeCard" style={{ width: '12rem', cursor: "pointer", margin: '20px', height: 180 }}>
                            <img style={{ width: '120px', marginLeft: 'auto', marginRight: 'auto' }} src={HR} className="card-img-top" alt="..." />
                            <div style={{ color: '#343A40' }}><h6 className="font-weight-bold">HR Letter</h6></div>
                        </div></Link>

                    <Link to='/inputConfirmation'>

                        <div className="card HomeCard" style={{ width: '12rem', cursor: "pointer", margin: '20px', height: 180 }}>
                            <img style={{ width: '120px', marginLeft: 'auto', marginRight: 'auto' }} src={confirm} className="card-img-top" alt="..." />
                            <div style={{ color: '#343A40' }}><h6 className="font-weight-bold">Confirmation Letter</h6></div>
                        </div></Link>

                    <Link to='/InputcertificateLetter'>

                        <div className="card HomeCard" style={{ width: '12rem', cursor: "pointer", margin: '20px', height: 180 }}>
                            <img style={{ width: '120px', marginLeft: 'auto', marginRight: 'auto' }} src={certificate} className="card-img-top" alt="..." />
                            <div style={{ color: '#343A40' }}><h6 className="font-weight-bold">Certificate Letter</h6></div>
                        </div></Link>
                        
                    <Link to='/InputDepuationLetter'>

                        <div className="card HomeCard" style={{ width: '12rem', cursor: "pointer", margin: '20px', height: 180 }}>
                            <img style={{ width: '120px', marginLeft: 'auto', marginRight: 'auto' }} src={Deputation} className="card-img-top" alt="..." />
                            <div style={{ color: '#343A40' }}><h6 className="font-weight-bold">Depuatation Letter</h6></div>
                        </div></Link>

                    <Link to='/InputDesignationLetter'>

                        <div className="card HomeCard" style={{ width: '12rem', cursor: "pointer", margin: '20px', height: 180 }}>
                            <img style={{ width: '120px', marginLeft: 'auto', marginRight: 'auto' }} src={Designation} className="card-img-top" alt="..." />
                            <div style={{ color: '#343A40' }}><h6 className="font-weight-bold">Designation <br /> Change Letter</h6></div>
                        </div></Link>
                    <Link to='/InputIncrementLetter'>

                        <div className="card HomeCard" style={{ width: '12rem', cursor: "pointer", margin: '20px', height: 180 }}>
                            <img style={{ width: '120px', marginLeft: 'auto', marginRight: 'auto' }} src={increment} className="card-img-top" alt="..." />
                            <div style={{ color: '#343A40' }}><h6 className="font-weight-bold">Increment Letter</h6></div>
                        </div></Link>

                    <Link to='/InputIntentLetter'>

                        <div className="card HomeCard" style={{ width: '12rem', cursor: "pointer", margin: '20px', height: 180 }}>
                            <img style={{ width: '120px', marginLeft: 'auto', marginRight: 'auto' }} src={offer} className="card-img-top" alt="..." />
                            <div style={{ color: '#343A40' }}><h6 className="font-weight-bold">Intent Letter</h6></div>
                        </div></Link>


                    <Link to='/InputRelivingLetter'>

                        <div className="card HomeCard" style={{ width: '12rem', cursor: "pointer", margin: '20px', height: 180 }}>
                            <img style={{ width: '120px', marginLeft: 'auto', marginRight: 'auto' }} src={relieve} className="card-img-top" alt="..." />
                            <div style={{ color: '#343A40' }}><h6 className="font-weight-bold">Reliving Letter</h6></div>
                        </div></Link>



                    <Link to='/InputTrainingCommitLetter'>

                        <div className="card HomeCard" style={{ width: '12rem', cursor: "pointer", margin: '20px', height: 180 }}>
                            <img style={{ width: '120px', marginLeft: 'auto', marginRight: 'auto' }} src={TrainingCommit} className="card-img-top" alt="..." />
                            <div style={{ color: '#343A40' }}><h6 className="font-weight-bold">Training Letter</h6></div>
                        </div></Link>

                    <Link to='/InputExitLetter'>

                        <div className="card HomeCard" style={{ width: '12rem', cursor: "pointer", margin: '20px', height: 180 }}>
                            <img style={{ width: '120px', marginLeft: 'auto', marginRight: 'auto', }} src={exit} className="card-img-top" alt="..." />
                            <div style={{ color: '#343A40' }}><h6 className="font-weight-bold">Exit Letter</h6></div>
                        </div></Link>


                    <Link to='/InputInternship'>

                        <div className="card HomeCard" style={{ width: '12rem', cursor: "pointer", margin: '20px', height: 180 }}>
                            <img style={{ width: '120px', marginLeft: 'auto', marginRight: 'auto', }} src={intern} className="card-img-top" alt="..." />
                            <div style={{ color: '#343A40' }}><h6 className="font-weight-bold">Internship Letter</h6></div>
                        </div></Link>

                    <Link to='/InputOfferLetter2'>

                        <div className="card HomeCard" style={{ width: '12rem', cursor: "pointer", margin: '20px', height: 180 }}>
                            <img style={{ width: '120px', marginLeft: 'auto', marginRight: 'auto', }} src={offerletter2} className="card-img-top" alt="..." />
                            <div style={{ color: '#343A40' }}><h6 className="font-weight-bold">Offer Letter</h6></div>
                        </div></Link>
                    <Link to='/InputHrPolicy'>

                        <div className="card HomeCard" style={{ width: '12rem', cursor: "pointer", margin: '20px', height: 180 }}>
                            <img style={{ width: '120px', marginLeft: 'auto', marginRight: 'auto', }} src={hrPolicy} className="card-img-top" alt="..." />
                            <div style={{ color: '#343A40' }}><h6 className="font-weight-bold">HR Policy Letter</h6></div>
                        </div></Link>

                    <Link to='/InputBDPolicy'>

                        <div className="card HomeCard" style={{ width: '12rem', cursor: "pointer", margin: '20px', height: 180 }}>
                            <img style={{ width: '120px', marginLeft: 'auto', marginRight: 'auto', }} src={BDPolicy} className="card-img-top" alt="..." />
                            <div style={{ color: '#343A40' }}><h6 className="font-weight-bold">BD Policy Letter</h6></div>
                        </div></Link>

                    <Link to='/InputConsultantOffer'>

                        <div className="card HomeCard" style={{ width: '12rem', cursor: "pointer", margin: '20px', height: 180 }}>
                            <img style={{ width: '120px', marginLeft: 'auto', marginRight: 'auto', }} src={ConsultantOffer} className="card-img-top" alt="..." />
                            <div style={{ color: '#343A40' }}><h6 className="font-weight-bold">Consultant Offer Letter</h6></div>
                        </div></Link>

                    <Link to='/InputSalaryRevision'>

                        <div className="card HomeCard" style={{ width: '12rem', cursor: "pointer", margin: '20px', height: 180 }}>
                            <img style={{ width: '120px', marginLeft: 'auto', marginRight: 'auto', }} src={salaryRevision} className="card-img-top" alt="..." />
                            <div style={{ color: '#343A40' }}><h6 className="font-weight-bold">Salary Revision Letter</h6></div>
                        </div></Link>

                    <Link to='/InputProjectPolicy'>

                        <div className="card HomeCard" style={{ width: '12rem', cursor: "pointer", margin: '20px', height: 180 }}>
                            <img style={{ width: '120px', marginLeft: 'auto', marginRight: 'auto', }} src={ProjectPolicy} className="card-img-top" alt="..." />
                            <div style={{ color: '#343A40' }}><h6 className="font-weight-bold">Project Policy Letter</h6></div>
                        </div></Link>
                    <Link to='/InputITPolicy'>

                        <div className="card HomeCard" style={{ width: '12rem', cursor: "pointer", margin: '20px', height: 180 }}>
                            <img style={{ width: '120px', marginLeft: 'auto', marginRight: 'auto', }} src={ITPolicy} className="card-img-top" alt="..." />
                            <div style={{ color: '#343A40' }}><h6 className="font-weight-bold">IT Policy Letter</h6></div>
                        </div></Link>
                    <Link to='/InputDeliveryPolicy'>

                        <div className="card HomeCard" style={{ width: '12rem', cursor: "pointer", margin: '20px', height: 180 }}>
                            <img style={{ width: '120px', marginLeft: 'auto', marginRight: 'auto', }} src={DeliveryPolicy} className="card-img-top" alt="..." />
                            <div style={{ color: '#343A40' }}><h6 className="font-weight-bold">Delivery Policy Letter</h6></div>
                        </div></Link>



                </div>
            </div>
        );
    }
}