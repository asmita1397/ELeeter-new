import React, { Component } from 'react'
import Home from '../home';
import moment from 'moment';
import '../CommonStyle.css'
import TyHeader from '../Assests/TYHeader.PNG';
import TyFooter from '../Assests/TYFooter.PNG';
import { thisExpression } from '@babel/types';
import { withRouter } from 'react-router-dom';

export class RelivingLetter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      employee: [],
      waterMark: false,
      pix: false


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
    this.props.history.push('/InputRelivingLetter');

  }
  render() {

    let toDate = new Date();
    let toJoiningDate = new Date(this.state.employee.joiningDate);
    let toReleiving = new Date(this.state.employee.relievingDate)

    if (this.props.empData == 0) {
      this.props.history.push("/cards")
    }
    if (this.props.empData) {
      return (
        <div>
          <Home buttonShow={true} showWatermark={(data) => this.setState({ waterMark: data })} sendData={() => this.sendData()} setHeader={(data) => this.print()} />

          <div className="main">
            <div className="card" id="AFourPage" style={{ marginTop: '100px' }}>
              <div className="card-body">

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
                  <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong>&nbsp;</strong></p>
                  <p style={{ textAlign: 'center', paddingLeft: 30 }}><strong>EXPERIENCE CERTIFICATE</strong></p>
                  <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong>&nbsp;</strong></p>
                  <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong>&nbsp;</strong></p>
                  <p style={{ textAlign: 'justify', paddingLeft: 30, margin: 0 }}><strong>Date:{(toDate.getDate())}<sup>{this.nth(toDate.getDate())}</sup>&nbsp;{moment(toDate).add().format('MMMM YYYY')}</strong></p>
                  <p style={{ textAlign: 'justify', paddingLeft: 30, margin: 0 }}><strong>Emp ID: {this.state.employee.employeeId}</strong></p>
                  <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 30 }}>This is to inform that <strong>{this.state.employee.salute}</strong> <strong> {this.state.employee.employeeName}, </strong>was working with us from <strong> {toJoiningDate.getDate()}<sup>{this.nth(toJoiningDate.getDate())}</sup>&nbsp;{moment(toJoiningDate).format('MMMM YYYY')} </strong> to <strong> {(toReleiving.getDate())}<sup>{this.nth(toReleiving.getDate())}</sup>&nbsp;{moment(toReleiving).format('MMMM YYYY')}</strong>. {this.props.empData.gender.gender1} was relieved from {this.props.empData.gender.gender2} responsibilities on <strong> {(toReleiving.getDate())}<sup>{this.nth(toReleiving.getDate())}</sup>&nbsp;{moment(toReleiving).format('MMMM YYYY')}</strong> as <strong>  {this.state.employee.designation} </strong>During {this.props.empData.gender.gender2} stay, {this.props.empData.gender.gender2} character and conduct was good. During {this.props.empData.gender.gender3} tenure, {this.props.empData.gender.gender1} was hardworking and a good team member. We wish {this.props.empData.gender.gender3} success in all {this.props.empData.gender.gender2} future endeavors.</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 30 }}>Thanks & Regards</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 30 }}>For <strong>Test Yantra Software Solutions (India) Pvt Ltd</strong></p>
                  <br />
                  <br />
                  <br />
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, margin: 0, fontWeight: 'bolder' }}>Authorized Signatory</p>
                  {/* <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, fontWeight: 'bolder' }}>(Human Resources)</p> */}
                </div>
                <br />
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

            <div className="card" id="AFourPage" style={{ marginTop: '20px' }}>
              <div className="card-body">

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
                  <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong>&nbsp;</strong></p>
                  <p style={{ textAlign: 'center', paddingLeft: 30 }}><strong>RELIEVING LETTER</strong></p>
                  <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong>&nbsp;</strong></p>
                  <p style={{ textAlign: 'justify', paddingLeft: 30, margin: 0 }}><strong>Date:  {toDate.getDate()}<sup>{this.nth(toDate.getDate())}</sup>&nbsp;{moment(toDate).format('MMMM YYYY')}</strong></p>
                  <p style={{ textAlign: 'justify', paddingLeft: 30, margin: 0 }}><strong>Emp ID:  {this.state.employee.employeeId}</strong></p>
                  <p style={{ textAlign: 'justify', paddingLeft: 30, paddingTop: 10 }}>Dear <strong> {this.state.employee.employeeName}</strong>,</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 30 }}>As per your resignation letter, we would like to inform you that, you are relieved from the roles and responsibilities of the company from <strong> {(toReleiving.getDate())}<sup>{this.nth(toReleiving.getDate())}</sup>&nbsp;{moment(toReleiving).format('MMMM YYYY')}.</strong> In this regard, we also wish to inform you that there are no commitments outstanding from either of us. We wish you success in all your future endeavors.</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 30 }}>Thanks & Regards</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 30 }}>For <strong>Test Yantra Software Solutions (India) Pvt Ltd</strong></p>
                  <br />
                  <br />
                  <br />
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, margin: 0, fontWeight: 'bolder' }}>Authorized Signatory</p>
               
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

export default withRouter(RelivingLetter)
