import React, { Component } from 'react'
import Home from '../home';
import '../CommonStyle.css'
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import TyHeader from '../Assests/TYHeader.PNG';
import TyFooter from '../Assests/TYFooter.PNG'
export class SalaryRevision extends Component {

  constructor(props) {
    super(props);

    this.state = {
      employee: [],
      waterMark: false

    }
  }


  componentDidMount() {

    this.setState({
      employee: this.props.empData,
    })
    console.log("DDDDDDDDDDDDDDDDDDd", this.props.empData)

    let showValue = JSON.parse(window.localStorage.getItem('beans'))


    console.log("data hr form  state ", this.state.employee);

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
    if (d > 3 && d < 21) return 'th';
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

  //edit
  sendData() {
    this.props.sendData(this.state.employee);
    this.props.history.push('/InputSalaryRevision');

  }

  render() {


    let incrementInEffectDate = new Date(this.state.employee.incrementInEffectDate);

    //console.log("joining DAte render", joiningDate)
    console.log("WaterMark =", this.props.showWaterMark)

    if (this.props.empData == 0) {
      this.props.history.push("/cards")
    }
    let toDayDate = new Date()
    if (this.props.empData) {
      return (
        <div>
          {<Home buttonShow={true} showWatermark={(data) => this.setState({ waterMark: data })} sendData={() => this.sendData()} setHeader={(data) => this.print()} />}
          <div className="main">
            <div className="card" style={{ marginTop: '100px' }} id="AFourPage">
              <div className="card-body pb-0 mt-5">

                <div>

                  {this.state.waterMark ? <header className="headerimg" >

                    <img style={{
                      width: '1172px',
                      height: '95px'
                    }} src={TyHeader}></img>

                  </header> : null}

                  {console.log("watermark------------------", this.props.waterMark)}
                  <p style={{ float: 'right' }}></p>
                  <div>
                    <p style={{ textAlign: 'left', paddingLeft: 30, paddingRight: 30, marginTop: 150 }} align="JUSTIFY"><span ><strong>{toDayDate.getDate()}<sup>{this.nth(toDayDate.getDate())}</sup>&nbsp;{moment(toDayDate).format('MMMM YYYY')}</strong></span></p>
                    <p style={{ paddingLeft: 30, textAlign: 'justify' }}>&nbsp;</p>
                    <p style={{ paddingLeft: 30, textAlign: 'justify' }}>To<br /> <br /> <strong>{this.state.employee.employeeName}</strong><strong>,</strong></p>
                    <p style={{ paddingLeft: 30, textAlign: 'justify' }}><strong>Employee ID: {this.state.employee.employeeId}</strong></p>
                    <p style={{ paddingLeft: 30, textAlign: 'justify' }}>&nbsp;</p>
                   
                    <p style={{ paddingLeft: 30, textAlign: 'justify' }}>Subject: Change in Annual Salary Compensation</p>
                    <p style={{ paddingLeft: 30, textAlign: 'justify' }}>&nbsp;</p>
                    <p style={{ paddingLeft: 30, textAlign: 'justify' }}> Dear <strong>{this.state.employee.employeeName},</strong><strong><br /> <br /> </strong></p>
                    <p style={{ paddingLeft: 30, textAlign: 'justify' }}>This is with reference to your Offer letter dated ( DOJ ). As per the Salary clause mentioned in your Offer, we confirm to revise your Annual CTC from INR <strong>{this.state.employee.salaryIncrementedFrom}</strong> to INR <strong>{this.state.employee.salaryIncrementedTo}</strong>. This revision is effective <span ><strong>{incrementInEffectDate.getDate()}<sup>{this.nth(incrementInEffectDate.getDate())}</sup>&nbsp;{moment(this.state.employee.incrementInEffectDate).format('MMMM YYYY')}</strong></span></p>
                    <p style={{ paddingLeft: 30, textAlign: 'justify' }}>&nbsp;</p>
                    <p style={{ paddingLeft: 30, textAlign: 'justify' }}>Further, your Salary revision shall be revised Annually, based on your performance and will be aligned to Performance appraisal policy adopted by the Company. &nbsp;</p>
                    <p style={{ paddingLeft: 30, textAlign: 'justify' }}>&nbsp;</p>
                    <p style={{ paddingLeft: 30, textAlign: 'justify' }}>The Salary Annexure is attached along with this letter. All other terms and conditions remains the same as per your Employment Offer.</p>
                    <p style={{ paddingLeft: 30, textAlign: 'justify' }}>&nbsp;</p>
                    <p style={{ paddingLeft: 30, textAlign: 'justify' }}>&nbsp;</p>
                    <p style={{ paddingLeft: 30, textAlign: 'justify' }}>Wish you all the best.<br /> </p>
                    <p style={{ paddingLeft: 30, textAlign: 'justify' }}>&nbsp;</p>
                    <p style={{ paddingLeft: 30, textAlign: 'justify' }}><strong>&nbsp;</strong></p>
                    <p style={{ paddingLeft: 30, textAlign: 'justify' }}><strong>Authorized Signatory </strong></p>
                    <p style={{ paddingLeft: 60, textAlign: 'justify' }}>&nbsp;</p>
                  </div>


                  {this.state.waterMark ? <div className="waterMark">
                    <span style={{
                      color: '#263248', fontSize: '91px',
                      fontFamily: 'sans-serif', position: 'absolute', opacity: '0.3', zIndex: '0'
                    }}>TES<span style={{
                      color: '#F8981C', fontSize: '91px',
                      fontFamily: 'sans-serif', fontWeight: "600"
                    }}>TY</span>ANTRA</span>
                  </div> : null}

                  <br />
                  <br />
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
      return (
        <h1></h1>)
    }
  }
}

export default withRouter(SalaryRevision)
