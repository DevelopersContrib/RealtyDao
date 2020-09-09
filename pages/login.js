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
        email: '',
        password: '',
        message: null,
        smessage: null,
        sbutton : 'hide',
        cbutton : 'hide',
        lform: 'loginform'
      }
      this.handleEmailChange = this.handleEmailChange.bind(this)
      this.handlePasswordChange = this.handlePasswordChange.bind(this)
      this.handleLogin = this.handleLogin.bind(this)
    
  }

  handleEmailChange(event) {
      this.setState({
        email: event.target.value.trim()
      })
    }

    handlePasswordChange(event) {
      this.setState({
        password: event.target.value.trim()
      })
    }

  handleLogin(event) {
    
      event.preventDefault()

      this.setState({
          message: null
      })

      if (!this.state.email || !this.state.password) {
        this.setState({
          message: 'All fields are required!'
        })

        return
      }

      let data = {
        email: this.state.email,
        password: this.state.password
      }

      this.state.sbutton = 'spinner-border';

      fetch('/auth/login', {
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
              smessage: 'Login Successful',
              sbutton : 'd-none',
              lform:  'd-none'
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
        <Meta title={"LogIn"} description={""} />
        <Nav />
        <div className="loginMain">
          <form className="formLogin">
          <div className="text-center mb-3">
              <h1 className="h4 mb-3 font-weight-bold">Log in Now</h1>
            </div>
            <div className="form-group">
              <button className="btn btn-lg btn-success btn-block" type="submit">
                <div className={this.state.cbutton}></div>
                Log in with <img src="https://cdn.vnoc.com/logos/logo-new-contrib-06-wyt.png" alt="" height="34"/>
              </button>
            </div>
            <div className="form-group text-center">
              Not a member yet?&nbsp;<a href="signup" className="text-info">Sign Up Now</a>
            </div>
            <div className="form-divider">
              <div className="divider-content">
                <span className="divider-span">
                  Log in with Email
                </span>
              </div>
            </div>
            {alert}
            {salert}
             <div className={this.state.lform}>
              <div className="form-group">
                <label>Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder=""  value={this.state.email} onChange={this.handleEmailChange}/>				
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="" value={this.state.password} onChange={this.handlePasswordChange}/>				
              </div>
              <div className="form-group">
                <label>
                  <input type="checkbox" value="remember-me"/> Remember me 
                </label>
              </div>
              <div className="form-group">
                <button className="btn btn-lg btn-primary btn-block" type="button"  onClick={this.handleLogin}>
                  <div className={this.state.sbutton}></div>
                  Log In
                </button>
              </div>
              <div className="form-group text-center">
                <a href="forgot" className="text-info">Forgot Your Password?</a>
              </div>
            </div> 		
          </form>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
