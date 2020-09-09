import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Meta from "../components/seo-meta";
import Nav from "../components/navhome";
import Footer from "../components/footerhome";
import Session from '../utils/session'

export default class extends React.Component {

  constructor(props){
      super(props)
      this.state = {
        email:'',
        message: null,
        smessage: null,
        sbutton : 'hide',
        fform: 'fogortForm'

      }
      this.handleEmailChange = this.handleEmailChange.bind(this)
      this.handleForgotPassword = this.handleForgotPassword.bind(this)
  }

  handleEmailChange(event) {
      this.setState({
        email: event.target.value.trim()
      })
    }

  handleForgotPassword(event){
    var emailfilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    event.preventDefault()

    this.setState({
        message: null
    })

    if(!this.state.email){
         this.setState({
          message: 'All fields are required!'
        })

        return
    }
    if(!emailfilter.test(this.state.email)){
        this.setState({
            message:'Invalid Email'
        })

        return
    }

     let data = {
        email: this.state.email
      }

      this.state.sbutton = 'spinner-border';

      fetch('/auth/forgot', {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(response => {
        if (response.message) {
          this.setState({
            message: response.message,
            sbutton : 'd-none'
          })
        } else if (response.email) {
          this.setState({
              smessage: 'A temporary password has been sent to '+response.email+' please check your email',
              sbutton : 'd-none',
              fform:  'd-none'
            })
        } else {
          this.setState({
            message: 'Unknown Error!',
            sbutton : 'd-none'
          })
        }
      })
      .catch(error => {
        console.error('Error:', error)
        this.setState({
          message: 'Request Failed!',
          sbutton : 'd-none'
        })
      })
  }

  render() {

    const alert = (this.state.message === null) ? <div/> : <div className={`alert alert-danger`} role="alert">{this.state.message}</div>
    const salert = (this.state.smessage === null) ? <div/> : <div className={`alert alert-success text-center`} role="alert">{this.state.smessage}</div>

    return (
      <React.Fragment>
        <Meta title={"ForgotPassword"} description={""} />
        <Nav />
        <div className="forgotMain">
          <form className="formLogin">
            <div className="text-center mb-3">
              <h1 className="h4 mb-3 font-weight-bold">Password Recovery</h1>
            </div>
            {alert}
            {salert}
            <div className={this.state.fform}>
              <div className="form-group">
                <label>Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="" value={this.state.email} onChange={this.handleEmailChange} />				
              </div>						
              <div className="form-group">
                <button className="btn btn-lg btn-primary btn-block" type="button"  onClick={this.handleForgotPassword}>
                  <div className={this.state.sbutton}></div>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}
