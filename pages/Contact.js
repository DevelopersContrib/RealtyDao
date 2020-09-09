
import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';


export default class Contact extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        name: '',
        email: '',
        messagetext: '',
        message: null,
        smessage: null,
        sbutton : 'hide',
        cbutton : 'hide'
      }

      this.handleNameChange = this.handleNameChange.bind(this)
      this.handleEmailChange = this.handleEmailChange.bind(this)
      this.handleMessagetextChange = this.handleMessagetextChange.bind(this)
      this.handleSendMessage = this.handleSendMessage.bind(this)
  }

  handleNameChange(event){
    this.setState({
      name:event.target.value.trim()
    })
  }

  handleEmailChange(event){
    this.setState({
      email:event.target.value.trim()
    })
  }

  handleMessagetextChange(event){
    this.setState({
      messagetext:event.target.value.trim()
    })
  }

  handleSendMessage(event){
    var emailfilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    event.preventDefault()

    this.setState({
      message:null
    })

     if (!this.state.email || !this.state.name || !this.state.messagetext) {
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
     this.state.sbutton = 'spinner-border';
  }
  render() {
    const alert = (this.state.message === null) ? <div/> : <div className={`alert alert-danger`} role="alert">{this.state.message}</div>
    const salert = (this.state.smessage === null) ? <div/> : <div className={`alert alert-success text-center`} role="alert">{this.state.smessage}</div>

    return (
      <React.Fragment>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-7">
                <div className="contactImage text-center">
          				<a href="https://t.me/realtydao" target="_blank">
          					<img src="https://cdn.vnoc.com/realtydao/join-our-telegram.png" className="img-fluid" />
          				</a>
                </div>
              </div>
              <div className="col-md-5">
                
              
                  <div className="conForm">
                    <div className="form-group">
                      <h2 className="font-weight-bold">Contact Us</h2>
                    </div>
                    <div className="form-group-alert form-group">
                      {alert}
                      {salert}    
                    </div>
                    <div className="form-group">
                      <label>Name</label>
                      <input type="name" name="name" id="inputName" className="form-control" placeholder=""  value={this.state.name} onChange={this.handleNameChange} />        
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" name="email" id="inputEmail" className="form-control" placeholder="" value={this.state.email} onChange={this.handleEmailChange}/>       
                    </div>
                    <div className="form-group">
                      <label>Your Message</label>
                      <textarea type="messagetext" name="messagetext" id="inputMessage" className="form-control" placeholder=""  value={this.state.messagetext} onChange={this.handleMessagetextChange} />        
                    </div>
                    <div className="form-group text-right">
                      <button className="btn btn-primary"  onClick={this.handleSendMessage}><div className={this.state.sbutton}></div>Submit</button>     
                    </div>
                  </div>
                        
              </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}
