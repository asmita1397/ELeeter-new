import React, { Component } from 'react'
import Home from '../home';
import '../CommonStyle.css'
import TyHeader from '../Assests/TYHeader.PNG';
import TyFooter from '../Assests/TYFooter.PNG'
import moment from 'moment';
import { withRouter } from 'react-router-dom';

export class DepuationLetter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employee: [],
      waterMark: false
    }
  }

  componentDidMount() {
    let emp=this.props.empData
   
    
    if(typeof(this.props.empData.salute)==="undefined"){
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
    this.props.history.push('/InputDepuationLetter');

  }

  render() {

    let toReportingDate = new Date(this.state.employee.reportingDate);
    let toDate = new Date();


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
                    <p style={{ textAlign: 'justify', paddingLeft: 20 }}>&nbsp;</p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20 }}>&nbsp;</p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20 }}>&nbsp;</p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong>Date:&nbsp; {toDate.getDate()}<sup>{this.nth(toDate.getDate())}</sup>&nbsp;{moment(toDate).format('MMMM YYYY')}</strong></p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20 }}>&nbsp;</p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20 }}>To, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20, paddingTop: 10 }}><strong> {this.state.employee.employeeName},</strong></p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20, paddingTop: 20 }}>Dear <strong>{this.state.employee.employeeName}</strong><strong>,</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20 }}>&nbsp;</p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20 }}>As a part of our services to client, please be informed that you are deputed to work at <strong>{this.state.employee.clientName}, </strong>
                      {this.state.employee.clientLocation}. We have decided on this owing to your performance at the client interview. You accept this deputation and agree to abide by the policies and procedures of <strong>{this.state.employee.clientName}</strong>. The date you have to report at <strong>{this.state.employee.clientName}</strong><strong>, </strong>would be <strong>{toReportingDate.getDate()}<sup>{this.nth(toReportingDate.getDate())}</sup>&nbsp;{moment(toReportingDate).format('MMMM YYYY')}</strong>.</p>

                    <p style={{ textAlign: 'justify', paddingLeft: 20, paddingTop: 5 }}>Contact Person: {this.state.employee.contactPerson}</p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20 }}>Reporting Time: {moment(this.state.employee.reportingTime, "HH:mm:ss").format("hh:mm A")}</p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20 }}>Other terms and conditions remain the same as per the appointment letter.</p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20 }}>&nbsp;</p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20 }}>Kindly sign and return the duplicate of this letter as a token of your acceptance of the above terms and conditions.</p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20 }}>Best Wishes,</p>
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
    } else {
      return (<h1></h1>)
    }
  }
}

export default withRouter(DepuationLetter)
