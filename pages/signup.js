import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Meta from "../components/seo-meta";
import Nav from "../components/navhome";
import Footer from "../components/footerhome";
import Session from '../utils/session'

export default class extends React.Component {

	constructor(props) {
	    super(props)
	    this.state = {
	      email: '',
	      password: '',
	      confirmPassword: '',
	      message: null,
	      smessage: null,
	      sbutton : 'hide',
	      cbutton : 'hide',
	      mform: 'mainform'
	    }
	    this.handleEmailChange = this.handleEmailChange.bind(this)
	    this.handlePasswordChange = this.handlePasswordChange.bind(this)
	    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this)
	    this.handleSignUp = this.handleSignUp.bind(this)
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

	  handleConfirmPasswordChange(event) {
	    this.setState({
	      confirmPassword: event.target.value.trim()
	    })
	  }
	  
	  handleSignUp(event) {
	  	var emailfilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	    event.preventDefault()

	    this.setState({
	      message: null
	    })

	    if (!this.state.email || !this.state.password || !this.state.confirmPassword) {
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

	    if (this.state.password !== this.state.confirmPassword) {
	      this.setState({
	        message: 'Password did not match!'
	      })

	      return
	    }

	    let data = {
	      email: this.state.email,
	      password: this.state.password
	    }
	    
       this.state.sbutton = 'spinner-border';

	    fetch('/auth/signup', {
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
		          smessage: 'Thank you for signing up. A verification link has been sent to '+response.email+' please check your email',
		          sbutton : 'd-none',
		          mform:  'd-none'
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
    			      <Meta title={"SignUp"} description={""} />
    			      <Nav />
    			      <div className="signupMain">
    			      <br />
    	              
    			        <form className="formLogin">			
    			          <div className="text-center mb-2">
    			            <h1 className="h4 font-weight-bold">Sign Up Now</h1>
    			          </div>
    			          <div className="form-group text-center">
    			            Already have an account?&nbsp;<a href="login" className="text-info">Log In</a>
    			          </div>
    			          <div className="form-group">
    			            <button className="btn btn-lg btn-success btn-block" type="submit">
    			              <div className={this.state.cbutton}></div>
    			              Continue with <img src="https://cdn.vnoc.com/logos/logo-new-contrib-06-wyt.png" alt="" height="34"/>
    			            </button>
    			          </div>
    			          <div className="form-divider">
    			            <div className="divider-content">
    			              <span className="divider-span">
    			                Sign up with Email
    			              </span>
    			            </div>
    			          </div>
    			          {alert}
    			          {salert}
    			          <div className={this.state.mform}>
	    			          <div className="form-group">
	    			            <label>Email address</label>
	    			            <input className="form-control" type="email" name="email" id="userEmail" placeholder="example@domain.com"  value={this.state.email} onChange={this.handleEmailChange}/>				
	    			          </div>
	    			          <div className="form-group">
	    			            <label>Password</label>
	    			            <input type="password" id="userPassword" name="password" className="form-control" placeholder="" value={this.state.password} onChange={this.handlePasswordChange}/>				
	    			          </div>
	    			            <div className="form-group">
	    			            <label>Confirm Password</label>
	    			            <input type="password"  name="confirmPassword" id="userConfirmPassword"   className="form-control" placeholder="" value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange}/>				
	    			          </div>
	    			          <div className="form-group">				
	    			            <div className="media">
	    			              <input type="checkbox" value="agree" className="mt-2 mr-2 align-self-start"/>
	    			              <div className="media-body">
	    			                Please agree to our&nbsp;
	    			                <a href="https://www.domaindirectory.com/policypage/terms?domain=realtydao.com" target="_blank">terms of service</a> and&nbsp;
	    			                <a href="https://www.domaindirectory.com/policypage/privacypolicy?domain=realtydao.com" target="_blank">privacy policy</a>.
	    			              </div>
	    			            </div>
	    			          </div>
	    			          <div className="form-group">
	    			            <button className="btn btn-lg btn-primary btn-block" type="button"  onClick={this.handleSignUp}>
	    			              <div className={this.state.sbutton}></div>
	    			              Sign Up
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



