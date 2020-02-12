import React, { Component } from 'react'
import Home from '../home';
import '../CommonStyle.css'
import TyHeader from '../Assests/TYHeader.PNG';
import TyFooter from '../Assests/TYFooter.PNG'
import { withRouter } from 'react-router-dom';
import moment from 'moment';


export class DesignationLetter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employee: [],
            waterMark: false
        }
    }

    nth = (d) => {
        if (d > 3 && d < 21)
            return 'th';
        switch (d % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }

    componentDidMount() {

        this.setState({
            employee: this.props.empData,
        })

        let that = this;
        var mediaQueryList = window.matchMedia('print');

        mediaQueryList.addListener(function (mql) {
            if (mql.matches) {
            
            } else {
              
                that.setState({
                    pix: false
                })
            }
        });

    }

    print = (data) => {
       
    
        if (this.state.employee.withHeader) {
            this.setState({
                pix: true
            }, () => setTimeout(() => {
                window.print()
            }, 550)
            )
        } else {
            window.print()
        }

    }


    //edit
    sendData() {
        this.props.sendData(this.state.employee);
        this.props.history.push('InputDesignationLetter');

    }

    render() {

        let toDate = new Date();
        let effectDate = new Date(this.props.empData.effdate);

        if (this.props.empData == 0) {
            this.props.history.push("/cards")
        }
        if (this.props.empData) {
            return (
                <div>
                    <Home buttonShow={true} showWatermark={(data) => this.setState({ waterMark: data })} sendData={() => this.sendData()} setHeader={(data) => this.print()} />
                    <div className="main">
                        <div className="card" style={{ marginTop: '100px' }} id="AFourPage">
                            <div className="card-body pb-0">

                                <div>

                                    {this.state.waterMark ? <header className="headerimg" >

                                        <img style={{
                                            width: '1172px',
                                            height: '95px'
                                        }} src={TyHeader}></img>

                                    </header> : null}

                                    {this.state.waterMark ? <div className="waterMark">
                                        <span style={{
                                            color: '#263248', fontSize: '91px',
                                            fontFamily: 'sans-serif', position: 'absolute', opacity: '0.3', zIndex: '0'
                                        }}>TES<span style={{
                                            color: '#F8981C', fontSize: '91px',
                                            fontFamily: 'sans-serif', fontWeight: "600"
                                        }}>TY</span>ANTRA</span>
                                    </div> : null}


                                    <div>
                                        <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>&nbsp;</p>
                                        <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>&nbsp;</p>
                                        <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>&nbsp;</p>
                                        <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}><strong></strong><strong> {toDate.getDate()}<sup>{this.nth(toDate.getDate())}</sup>&nbsp;{moment(toDate).format('MMMM YYYY')}</strong></p>
                                        <br />
                                        <br />
                                        <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>&nbsp;</p>
                                        <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, margin: 0 }}>To,</p>
                                        <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, margin: 0 }}><strong> {this.state.employee.employeeName}</strong>,</p>
                                        <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, margin: 0 }}> {this.state.employee.employeeId}</p>
                                        <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>&nbsp;</p>
                                        <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>Dear <strong> {this.state.employee.employeeName}</strong>,</p>
                                        <br />
                                        <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>We are pleased to inform your designation has been changed as <strong> {this.state.employee.newDesignation} </strong>effective <strong>{effectDate.getDate()}<sup>{this.nth(effectDate.getDate())}</sup>&nbsp;{moment(effectDate).format('MMMM YYYY')}</strong>. Other terms and conditions remain the same as per the appointment letter.</p>
                                        <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>Kindly sign and return the duplicate of this letter as a token of your acceptance of the above terms and conditions.</p>
                                        <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>&nbsp;</p>
                                        <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>With best wishes,</p>
                                        <br />
                                        <br />
                                        <br />
                                        <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, margin: 0, fontWeight: 'bolder' }}>Authorized Signatory</p>
                                       
                                        <br />
                                    </div>

                                </div>
                                {this.state.waterMark ? <div className="footerimg" >

                                    <img style={{
                                        width: '1172px',
                                        height: '95px'
                                    }} src={TyFooter}></img>

                                </div> : null}

                            </div>

                        </div>
                    </div>
                </div>

            )
        }
        else {
            return (<h1></h1>)
        }
    }
}

export default withRouter(DesignationLetter)