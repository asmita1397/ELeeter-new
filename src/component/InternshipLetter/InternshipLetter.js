import React, { Component } from 'react'
import Home from '../home';
import '../CommonStyle.css'
import { withRouter } from 'react-router-dom';
import TyHeader from '../Assests/TYHeader.PNG';
import TyFooter from '../Assests/TYFooter.PNG';
import moment from 'moment'

export class InternshipLetter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employee: [],
            waterMark: false,
            pix: false,
            gender:''
        }
    }

    componentDidMount() {

        let emp=this.props.empData
   
    
        if( this.props.empData!==""&& typeof(this.props.empData.salute)==="undefined"){
         emp.salute="Mr."
        }
        this.setState({
          employee: emp,
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
        ;
      
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

    //edit
    sendData() {
        this.props.sendData(this.state.employee);
        this.props.history.push('/InputInternship');

    }


    render() {

        let SysDate = new Date();
        
        if (this.props.empData == 0) {
            this.props.history.push("/cards")
        }
        let toJoiningDate = new Date(this.state.employee.startDate);
        let toReleiving = new Date(this.state.employee.endDate)

      
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
                                    </div>
                                        : null}
                                    <div>
                                        <br />
                                        <br />
                                        <br />

                                        <p style={{ textAlign: 'left', paddingLeft: 10, paddingRight: 10, margin: 0 }}><strong>Date:</strong><span style={{ fontWeight: 400 }}>&nbsp; {SysDate.getDate()}<sup>{this.nth(SysDate.getDate())}</sup>&nbsp;{moment(SysDate).format('MMMM YYYY')}</span></p>
                                        <p style={{ textAlign: 'left', paddingLeft: 10, paddingRight: 10, margin: 0 }}><strong>Place:</strong><span style={{ fontWeight: 400 }}>&nbsp;{this.state.employee.companyLocation}</span></p>
                                        <br />
                                        <br />
                                        <br />
                                        <p style={{ textAlign: 'center', paddingLeft: 10, paddingRight: 10 }}><strong><u>INTERNSHIP CERTIFICATE</u></strong></p>
                                        <br />
                                        <br />
                                        <p style={{ textAlign: 'justify', paddingLeft: 10, paddingRight: 10 }}><span style={{ fontWeight: 400 }}>This is to certify that </span><strong>{this.state.employee.salute} {this.state.employee.internName},</strong><span style={{ fontWeight: 400 }}> was engaged in our organization as {this.state.employee.internType} Internship Trainee for necessary training, during the period from </span><strong> {toJoiningDate.getDate()}<sup>{this.nth(toJoiningDate.getDate())}</sup>&nbsp;{moment(toJoiningDate).format('MMMM YYYY')} </strong><span style={{ fontWeight: 400 }}> to </span><strong> {toReleiving.getDate()}<sup>{this.nth(toReleiving.getDate())}</sup>&nbsp;{moment(toReleiving).format('MMMM YYYY')}</strong><span style={{ fontWeight: 400 }}> in our development unit </span><strong>Test Yantra Software Solutions India Pvt Ltd</strong><span style={{ fontWeight: 400 }}>. This candidate has successfully completed internship training during the above period.</span></p>
                                        <p style={{ textAlign: 'justify', paddingLeft: 10, paddingRight: 10 }}>&nbsp;</p>
                                        <p style={{ textAlign: 'justify', paddingLeft: 10, paddingRight: 10 }}><strong>Test Yantra Intern ID: {this.state.employee.internId}</strong></p>
                                        <br />
                                        <br />
                                        <p style={{ textAlign: 'justify', paddingLeft: 10, paddingRight: 10 }}><span style={{ fontWeight: 400 }}>During the duration of this internship program, we found this candidate is sincere, hardworking and performance oriented.</span></p>
                                        <p style={{ textAlign: 'justify', paddingLeft: 10, paddingRight: 10 }}><span style={{ fontWeight: 400 }}><br /></span><span style={{ fontWeight: 400 }}>We wish </span><strong>{this.state.employee.employeeName}</strong> <span style={{ fontWeight: 400 }}>success for all </span><span style={{ fontWeight: 400 }}>{this.props.empData.gender.gender3}</span> <span style={{ fontWeight: 400 }}>future endeavours.</span></p>
                                        <p style={{ textAlign: 'justify', paddingLeft: 10, paddingRight: 10 }}><br /><br /></p>
                                        <p style={{ textAlign: 'justify', paddingLeft: 10, paddingRight: 10 }}><span style={{ fontWeight: 400 }}>Thanks & Regards</span></p>
                                        <p style={{ textAlign: 'justify', paddingLeft: 10, paddingRight: 10 }}><span style={{ fontWeight: 400 }}>For <strong>Test Yantra Software Solutions (India) Pvt Ltd</strong></span></p>
                                        <br />
                                        <br />
                                        <br />
                                        <p style={{ textAlign: 'justify', paddingLeft: 10, paddingRight: 10, margin: 0, fontWeight: 'bolder' }}>Authorized Signatory</p>
                                      
                                        <br />
                                        <br />

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
                        </div>
                        </div>
                        )
        } else {
            return (<h1></h1>)
                    }
                }
            }
            
            export default withRouter(InternshipLetter)
