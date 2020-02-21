import React, { Component } from 'react'
import Home from '../home';
import '../CommonStyle.css'
import { withRouter } from 'react-router-dom';
import TyHeader from '../Assests/TYHeader.PNG';
import TyFooter from '../Assests/TYFooter.PNG'
import moment from 'moment'

export class CertificateLetter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      employee: [],
      waterMark: false,
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
        console.log('before print dialog open');
      } else {
        console.log('after print dialog closed');
        that.setState({
          pix: false
        })
      }
    });

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

  print = (data) => {
    debugger;
    console.log("pix value ", this.state.pix)
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

  

  render() {

    let SysDate = new Date();
    console.log("System Date", SysDate)
    if (this.props.empData == 0) {
      this.props.history.push("/cards")
    }
    if (this.props.empData) {
      return (
        <div>
          <Home buttonShow={true} showWatermark={(data) => this.setState({ waterMark: data })}  setHeader={(data) => this.print()} />
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
                    <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong>&nbsp;</strong></p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong>&nbsp;</strong></p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong>Date:&nbsp; {SysDate.getDate()}<sup>{this.nth(SysDate.getDate())}</sup>&nbsp;{moment(SysDate).format('MMMM YYYY')}</strong></p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong>&nbsp;</strong></p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong>&nbsp;</strong></p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20, margin: 0 }}><strong>To,</strong></p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong>&nbsp;</strong></p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20, margin: 0 }}><strong>{this.state.employee.employeeName},</strong></p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20, margin: 0 }}><strong>{this.state.employee.companyLocation}</strong></p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong>&nbsp;</strong></p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20, marginBottom: 20 }}><strong>Dear {this.state.employee.employeeName},</strong></p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20 }}>This is to confirm that we have collected your<strong> {this.state.employee.checkedSSC} {this.state.employee.checkedPUC} {this.state.employee.checkedDegree} {this.state.employee.certificateType} Certificate</strong> for the background verification at Test Yantra. We would return the document once the verification process is done.</p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20 }}>&nbsp;</p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20 }}>With best wishes,</p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20 }}>Very truly yours,</p>
                    <br />
                    <br />
                    <p style={{ textAlign: 'justify', paddingLeft: 20 }}><strong><br /> Corporate HR</strong></p>
                    <p style={{ textAlign: 'justify', paddingLeft: 20 }}>&nbsp;</p>
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

export default withRouter(CertificateLetter)
