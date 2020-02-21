import React, { Component } from 'react'
import Home from '../home';
import '../CommonStyle.css'
import TyHeader from '../Assests/TYHeader.PNG';
import TyFooter from '../Assests/TYFooter.PNG';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import './Trainingcommit.css'
class TrainingCommit extends Component {

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

  //edit
  sendData() {
    this.props.sendData(this.state.employee);
    this.props.history.push('/InputTrainingCommitLetter');

  }

  render() {

    let toDate = new Date();
    let toJoiningDate = new Date(this.state.employee.joiningDate);
    let toTraningStart = new Date(this.state.employee.trainingStartDate);
    let toTraningEnd = new Date(this.state.employee.trainingEndDate);

    if (this.props.empData == 0) {
      this.props.history.push("/cards")
    }
    if (this.props.empData) {
      return (
        <div id='container-id'>
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
                </div>
                  : null}

                <div>
                  <p style={{ textAlign: 'justify' }} align="CENTER">&nbsp;</p>
                  <p style={{ textAlign: 'justify' }} align="CENTER">&nbsp;</p>
                  <p style={{ textAlign: 'justify' }} align="CENTER">&nbsp;</p>
                  <p style={{ textAlign: 'left' }} align="JUSTIFY"><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong>Date: {toDate.getDate()}<sup>{this.nth(toDate.getDate())}</sup>&nbsp;{moment(toDate).format('MMMM YYYY')}</strong></span></span></p>
                  <p style={{ textAlign: 'left' }} align="JUSTIFY"><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong>Place: {this.state.employee.companyLocation}</strong></span></span></p>
                  <p style={{ textAlign: 'justify' }} align="CENTER">&nbsp;</p>
                  <p style={{ textAlign: 'center' }} align="CENTER"><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong style={{ fontSize: 'x-large' }}>To Whomsoever It may concern </strong></span></span></p>
                  <p style={{ textAlign: 'justify' }}>&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }} align="JUSTIFY"><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}>This is to certify that </span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong> {this.state.employee.salute} {this.state.employee.employeeName} </strong></span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}>is an employee in this organization. {this.props.empData.gender.gender1} is presently holding the post as </span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong>{this.state.employee.designation}</strong></span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}>. {this.props.empData.gender.gender1} joined this organization on </span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong>{toJoiningDate.getDate()}<sup>{this.nth(toJoiningDate.getDate())}</sup>&nbsp;{moment(toJoiningDate).format('MMMM YYYY')}</strong></span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}>.</span></span></p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }} align="JUSTIFY"><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}>Further this organization has </span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong>No Objection</strong></span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}> for </span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong>{this.state.employee.salute} {this.state.employee.employeeName} </strong></span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}>joining to</span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong> {this.state.employee.courseName} Course</strong></span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}> at </span></span><span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong>{this.state.employee.branchName},</strong></span></span> <span style={{ color: '#000000' }}><span style={{ fontSize: 'large' }}><strong>{this.state.employee.branchLocation} Branch. </strong></span></span></p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>Thanks & Regards</p>

                  <p style={{ textAlign: 'left', paddingLeft: 20, paddingRight: 20 }}><span style={{ color: '#000000' }}>For </span><span style={{ color: '#000000' }}><strong>Test Yantra Software Solutions (India ) Pvt Ltd</strong></span></p>
                  <br />
                  <br />
                  <br />
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, margin: 0, fontWeight: 'bolder' }}>Authorized Signatory</p>
                  {/* <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, fontWeight: 'bolder' }}>(Human Resources)</p> */}
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
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
            </div>
            



            <div className="card" id="AFourPage" style={{ marginTop: '20px' }}>
              <div className="card-body pb-0">

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
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}><strong>&nbsp;</strong></p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}><strong>Date:  {toDate.getDate()}<sup>{this.nth(toDate.getDate())}</sup>&nbsp;{moment(toDate).format('MMMM YYYY')}</strong></p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, margin: 0 }}><strong>To,</strong></p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, margin: 0 }}><strong>The Management,</strong>&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}><strong>&nbsp;Subject: Training&nbsp; </strong></p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}><strong>&nbsp;</strong></p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>I am <strong> {this.state.employee.employeeName} </strong>working in Test Yantra Software Solutions Pvt Ltd or Qspiders or Jspiders (u/o) Test Yantra Software Solutions Pvt Ltd as <strong> {this.state.employee.designation}</strong> from <strong>{toJoiningDate.getDate()}<sup>{this.nth(toJoiningDate.getDate())}</sup>&nbsp;{moment(toJoiningDate).format('MMMM YYYY')}.</strong></p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>I am willing to undergo training in<strong>  {this.state.employee.courseName}</strong>. I would request you to permit me to take the course at Qspiders / JSpiders. Below is the details of Course and period of Training.</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, margin: 0 }}>&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, margin: 0 }}><strong>Course Name</strong>: <strong> {this.state.employee.courseName}</strong></p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, margin: 0 }}><strong>Training Start Date</strong>: <strong>{toTraningStart.getDate()}<sup>{this.nth(toTraningStart.getDate())}</sup>&nbsp;{moment(toTraningStart).format('MMMM YYYY')}</strong></p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, margin: 0 }}><strong>Training End Date:  {toTraningEnd.getDate()}<sup>{this.nth(toTraningEnd.getDate())}</sup>&nbsp;{moment(toTraningEnd).format('MMMM YYYY')}</strong></p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, margin: 0 }}><strong>SPOC</strong></p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20, margin: 0 }}><strong>Location:</strong>  {this.state.employee.branchName},  {this.state.employee.branchLocation}</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>I hereby promise and accept that</p>
                  <p style={{ textAlign: 'justify' }}>&nbsp;</p>
                  <ol style={{ textAlign: 'justify' }}>
                    <ol>
                      <li>I will not misuse the data, which I use for day to day business operations.</li>
                      <li>I shall not quit while I am perusing the Training.</li>
                      <li>I would commit to work for a minimum period of 12 months after completion of Training.</li>
                      <li>I will not join any organization which is competitor to Test Yantra Software Solutions Pvt Ltd and its units Qspiders and Jspiders for 12 Months.</li>
                      <li>I will accept relocation / project allocation on any Testing area and shall not deny the opportunities / interviews provided to me.</li>
                    </ol>
                  </ol>
                </div>

                {this.state.waterMark ? <div className="footerimg" >

                  <img style={{
                    width: '1172px',
                    height: '95px'
                  }} src={TyFooter}></img>

                </div> : null}
              </div>
            </div>





            <div className="card" id="AFourPage" style={{ marginTop: '20px' }}>
              <div className="card-body pb-0">

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
                  <p>&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>This Agreement constitutes the entire understanding between the parties and supersedes any and all prior or contemporaneous understandings and agreements, whether oral or written, between the parties with respect to the subject matter hereof.</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>This Agreement can only be modified by a written amendment signed by the party against whom enforcement of such modification is sought.</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>I agree that I have not shared the data accumulated with any organization or anybody in past and will not share in future.</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>If Test Yantra Software Solutions Pvt Ltd or its units Qspiders or Jspiders figures out that I have misused data as mentioned above, Test Yantra Software Solutions Pvt Ltd and u/o Test Yantra Software Solutions Pvt Ltd hold legal rights to file a case against me and to take legal action.</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>I hereby agree to abide by the same in its true spirit and meaning.</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}><strong>IN WITNESS WHEREOF</strong>, the parties hereto have executed this Agreement as of the date first above written.</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>Thanking you,</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>Signature:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Signature:</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for <strong>Test Yantra Software Solutions</strong></p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>Designation:</p>
                  <p style={{ textAlign: 'justify', paddingLeft: 20, paddingRight: 20 }}>Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                </div>
              </div>
              <br />
              <br />
              <br />
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
        </div>
      )
    } else {
      return (<h1></h1>)
    }
  }

}

export default withRouter(TrainingCommit)
