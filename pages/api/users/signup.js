const pool = require('../../../dbconfig/dbconfig')
const bcrypt = require('bcrypt');
const saltRounds = 10;


const nodemailer = require('nodemailer')
const nodemailerSmtpTransport = require('nodemailer-smtp-transport')
const nodemailerDirectTransport = require('nodemailer-direct-transport')

let nodemailerTransport = nodemailerDirectTransport()
if (process.env.EMAIL_SERVER && process.env.EMAIL_USERNAME && process.env.EMAIL_PASSWORD) {
  nodemailerTransport = nodemailerSmtpTransport({
    host: process.env.EMAIL_SERVER,
    port: process.env.EMAIL_PORT || 25,
    secure: process.env.EMAIL_SECURE || true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  })
}


module.exports =  async function(req, res) {
 
	    var email = req.body.email
	    var password = req.body.password
	    if (email && password) {
	   
	    	 const results = await getUser(email)
	   		 if (results[0][0]) {
	    		 return res.json({message: 'User already exists with email ' + email})
	    	 }else {
	    		 bcrypt.hash(password, saltRounds).then(async function(hash) {
	    	    	const results = await addUser(email, hash)
	    	        if (results && results.length > 0) {
	    	          bcrypt.hash(email + hash, saltRounds).then(function(hash) {
	    	            sendVerificationEmail(email, "http://" + req.headers.host + "/api/users/verify?email=" + email + "&hash=" + hash)
	    	          })
	    	          return res.json({email: email})
	    	        } else {
	    	          return res.json({message: 'User already exists with email ' + email})
	    	        }
	    	      })
	    	 }
	    } else {
	      return res.json({message: 'Please enter email and Password!'})
	    }
	  
	  
	    async function getUser(email) {
	        try {
	          const results = await pool.query(`SELECT * FROM tld_members WHERE email='${email}';`)
	          return results
	        }catch(e){
	          console.error(e)
	        }
	      }
	    
	    async function addUser(email, password) {
	        try {
	          const results = await pool.query(`INSERT INTO tld_members (email, password) VALUES ("${email}", "${password}");`)
	          return results
	        }catch(e){
	          console.error(e)
	        }
	      }
	      
	  
	    function sendVerificationEmail(email, url) {
	        nodemailer
	        .createTransport(nodemailerTransport)
	        .sendMail({
	          to: email,
	          from: process.env.EMAIL_FROM,
	          subject: 'Verify Signup',
	          text: `Click on this link to verify:\n\n${url}\n\n`,
	          html: `<html lang="en">
	    <head>
	    	<meta http-equiv="Content-Type" content="text/html" charset="utf-8">
	    	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	    	<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"> 
	    	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />
	    	<style>
	    	a {
	    		color: DC2829;
	    		font-size: 14px;
	    	}
	    	@media (max-width:650px) {
	    		p {
	    			font-size: 13px;
	    			line-height: 1.5384615384615;
	    		}
	    	}	
	    	@media only screen and (min-width:650px) {
	    		.logo-block {
	    			display: none!important;
	    		}
	    		.logo-block a {
	    			display: inline-block!important;
	    		}
	    	}	
	    	@media only screen and (min-width:650px) {
	    		.logo-block-desk {
	    			display: table-cell!important;
	    		}
	    	}	
	    	@media only screen and (max-width:650px) {
	    		.logo-block-link {
	    			font-size: 13px!important;
	    		}
	    	}	
	    	@media only screen and (max-width:650px) {
	    		.content {
	    			padding: 0 10px!important;
	    		}
	    	}	
	    	@media only screen and (max-width:650px) {
	    		.footer-help td {
	    			display: block!important;
	    			padding-bottom: 15px!important;
	    		}
	    		.footer-help td:last-child {
	    			padding-bottom: 0!important;
	    		}
	    	}	
	    	@media only screen and (max-width:650px) {
	    		.white-sep {
	    			padding: 20px 10px!important;
	    		}
	    	}	
	    	@media only screen and (max-width:650px) {
	    		.white-sep-secondary {
	    			padding: 20px 24px 25px!important;
	    		}
	    	}	
	    	@media only screen and (max-width:650px) {
	    		.list-block {
	    			padding-bottom: 14px!important;
	    		}
	    	}	
	    	@media only screen and (max-width:650px) {
	    		.list-block-lg {
	    			padding-bottom: 20px!important;
	    		}
	    	}	
	    	@media only screen and (max-width:650px) {
	    		.list-block-md {
	    			padding-bottom: 15px!important;
	    		}
	    	}	
	    	@media only screen and (max-width:650px) {
	    		.list-block__image {
	    			max-width: 80%!important;
	    		}
	    	}	
	    	@media only screen and (max-width:650px) {
	    		.list-title {
	    			font-size: 20px!important;
	    			line-height: 28px!important;
	    		}
	    	}	
	    	@media only screen and (max-width:650px) {
	    		.list-sub-title {
	    			font-size: 16px!important;
	    			line-height: 20px!important;
	    		}
	    	}	
	    	@media only screen and (max-width:650px) {
	    		.list-sub-title-center {
	    			font-size: 16px!important;
	    			line-height: 20px!important;
	    		}
	    	}	
	    	@media only screen and (max-width:650px) {
	    		.list-text {
	    			font-size: 13px!important;
	    			line-height: 22px!important;
	    		}
	    	}	
	    	@media only screen and (max-width:650px) {
	    		.list-text br {
	    			display: none!important;
	    		}
	    	}	
	    	@media only screen and (max-width:650px) {
	    		.list-text-left {
	    			font-size: 13px!important;
	    			line-height: 18px!important;
	    		}
	    	}	
	    	@media only screen and (max-width:650px) {
	    		.list-text-left br {
	    			display: none!important;
	    		}
	    	}	
	    	@media only screen and (max-width:650px) {
	    		.list-title-left {
	    			font-size: 16px!important;
	    			line-height: 20px!important;
	    			text-align: center!important;
	    		}
	    	}	
	    	@media only screen and (max-width:650px) {
	    		.responsive-padding {
	    			padding: 20px 0 0 0!important;
	    		}
	    	}	
	    	@media only screen and (max-width:650px) {
	    		.table-list-text {
	    			padding: 0!important;
	    		}
	    	}	
	    	@media only screen and (max-width:650px) {
	    		.text-padding {
	    			padding-left: 10px!important;
	    			padding-right: 10px!important;
	    		}
	    	}	
	    	@media only screen and (max-width:650px) {
	    		.list-image {
	    			padding: 0 13px 10px 0!important;
	    		}
	    	}	
	    	@media only screen and (max-width:650px) {
	    		.list-table-text {
	    			padding-bottom: 10px!important;
	    		}
	    	}
	    	</style>
	    </head>

	    <body class="body" style="background-color: #F2F2F2; font-family: 'Open Sans', sans-serif; margin: 0; padding: 0;">
	    	<table class="align-block" style="background-color: #F2F2F2; border-collapse: collapse; border-spacing: 0; width: 100%;">		
	    		<tr>
	    			<td style="border-collapse: collapse; border-spacing: 0; padding: 0;">
	    				<table align="center" class="main-content" style="border-collapse: collapse; border-spacing: 0; margin: auto; max-width:650px; width: 100%;">
	    					<tr>
	    						<td class="content" style="background-color: #F2F2F2; border-collapse: collapse; border-spacing: 0; padding: 0 20px;">
	    							<table bgcolor="#F2F2F2" style="background-color: #F2F2F2; border-collapse: collapse; border-spacing: 0; width: 100%;">
	    								<tr>
	    									<td style="border-collapse: collapse; border-spacing: 0; padding: 0;">
	    										<table style="border-collapse: collapse; border-spacing: 0; width: 100%;" class="header">											
	    											<tr>
	    												<td style="border-collapse: collapse; border-spacing: 0; display: inline-block; max-height: 0; padding: 20px 0 15px; text-align: left; vertical-align: middle;" class="logo-block-desk">
	    													<a href="" target="_blank" style="color: #444; display: inline-block; text-decoration: none;"> 
	    													<img src="https://cdn.vnoc.com/logos/logo-RealtyDAO-3.png" alt="" width="" height="60" style="color: #444;"> 
	    													</a>
	    												</td>
	    												<td style="border-collapse: collapse; border-spacing: 0; display: inline-block; max-height: 0; padding: 20px 0 15px; text-align: right; vertical-align: middle;" class="logo-block-desk"> 
	    													<a href="https://realtydao.com" target="_blank" class="logo-block-link" style="color: #162075; display: inline-block; font-size: 14px; line-height: 14px; text-decoration: none!important; vertical-align: middle;">
	    													Realtydao.com &#8594;
	    													</a> 
	    												</td>
	    											</tr>
	    										</table>
	    									</td>
	    								</tr>
	    								<tr>
	    									<td style="border-collapse: collapse; border-spacing: 0; padding: 0;">
	    										<table style="background-color: #ffffff; border-collapse: collapse; border-spacing: 0; width: 100%;" class="white-bg">
	    											<tr>
	    												<td class="white-sep" style="border-collapse: collapse; border-spacing: 0; padding: 30px; width: 100%;">
	    													<table style="border-collapse: collapse; border-spacing: 0; width: 100%;">
	    														<tr>
	    															<td class="list-block-md" style="border-collapse: collapse; border-spacing: 0; padding: 0; padding-bottom: 20px;">
	    																<p class="list-text-left" style="color: #444444; font-size: 16px; font-weight: bold; line-height: 20px; margin: 0; padding: 0; text-align: left;">
	    																	Click on this link to verify your email:
	    																</p>																
	    															</td>
	    														</tr>
	    														<tr>
	    															<td class="list-block-sm" style="border-collapse: collapse; border-spacing: 0; padding: 0; padding-bottom: 10px;">
	    																<table style="border-collapse: collapse; border-spacing: 0;">
	    																	<tr>																		
	    																		<td class="list-table-text" style="border-collapse: collapse; border-spacing: 0; padding: 0; padding-bottom: 13px; vertical-align: top;">
	    																			<p class="list-text-left" style="color: #555555; font-size: 14px; line-height: 20px; margin: 0; padding: 0; text-align: left; font-family: 'Open Sans', sans-serif;">
	    																				<a href="${url}" style="word-wrap: anywhere;">
	    																					${url}
	    																				</a>
	    																			</p>																			
	    																		</td>
	    																	</tr>
	    																</table>
	    															</td>
	    														</tr>															
	    														<tr>
	    															<td class="list-block-md" style="border-collapse: collapse; border-spacing: 0; padding: 0; padding-top: 25px; padding-bottom: 35px; border-top: 1px dashed #dedede;">
	    																<table align="center" class="table-btn-block-resp" style="Margin: auto; border-collapse: initial; border-spacing: 0; width: 230px;">
	    																	<tr>
	    																		<td class="btn-block" style="background: #162075; border-collapse: separate; border-radius: 3px; border-spacing: 0; padding: 15px 0; text-align: center; width: 230px;">
	    																			<a href="https://realtydao.com" target="_blank" class="link-to-action-btn" style="color: #FFFFFF; font-size: 14px; font-weight: bold; text-decoration: none!important; font-family: 'Open Sans', sans-serif;">
	    																				Visit RealtyDao.com
	    																			</a>
	    																		</td>
	    																	</tr>
	    																</table>
	    															</td>
	    														</tr>															
	    													</table>
	    												</td>
	    											</tr>
	    										</table>
	    									</td>
	    								</tr>
	    							</table>
	    						</td>
	    					</tr>
	    					<tr>
	    						<td style="background-color: #F2F2F2; border-collapse: collapse; border-spacing: 0; padding: 0 20px; padding-bottom: 10px;" class="content">
	    							<table class="footer" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
	    								<tr>
	    									<td class="footer-wrapper" style="border-collapse: collapse; border-spacing: 0; padding: 25px 10px;">
	    										<table style="border-collapse: collapse; border-spacing: 0; width: 100%;">
	    											<tr>
	    												<td class="footer-address" style="border-collapse: collapse; border-spacing: 0; padding: 0; padding-bottom: 8px;">
	    													<p class="footer-address-text" style="color: #999999; font-size: 12px; line-height: 24px; margin: 0; padding: 0; text-align: center; font-family: 'Open Sans', sans-serif;">
	    														© 2020 realtydao.com. All Rights Reserved
	    													</p>
	    												</td>
	    											</tr>											
	    										</table>
	    									</td>
	    								</tr>
	    							</table>
	    						</td>
	    					</tr>
	    				</table>
	    			</td>
	    		</tr>
	    	</table>
	    </body>

	    </html>`
	        }, (err) => {
	          if (err) {
	            console.error('Error sending email to ' + email, err)
	          }
	        })
	      }
	      
	  
};
