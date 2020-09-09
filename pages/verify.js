import React from 'react'
import Link from 'next/link'
import Meta from "../components/seo-meta";
import Nav from "../components/navhome";
import Footer from "../components/footerhome";

export default class extends React.Component {

  static async getInitialProps({req, query}) {

    let props = {
      message: ''
    }

    props.message = query.message || 'An unknown error occured!'
    
    return props
  }

  render() {
    return (
    		<React.Fragment>
    	      <Meta title={"Email Verified"} description={""} />
    	      <Nav />
    	      <div className="pageFeature">
    	        <div className="container text-center">
    	          <div className="row">
    	            <div className="col-md-12 mb-3">
    	              <div className="mainFeatInner">
    	                <h1 className="mainFeatTitle"></h1>
    	              </div>
    	            </div> 
    	            <div className="col-md-12">
    				<img src="https://cdn.vnoc.com/realtydao/icon-email-verified.png" className="img-fluid mb-3" />
    	              <h3>{this.props.message}</h3>
    	              <h5>
    				You can <a href="/login">log in</a> now.
    			  </h5>
    	            </div>                  
    	          </div>
    	        </div>
    	      </div>
    	      <Footer />
    	    </React.Fragment>
    )
  }
}
