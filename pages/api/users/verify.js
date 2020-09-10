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
 
	    var email = req.query.email
	    var hash = req.query.hash
	    if (email && hash) {
	      const results = await getUser(email)
	      if (results.length > 0) {
	        bcrypt.compare(email + results[0][0].password, hash).then(async function(response) {
	          if (response == true) {
	            const results = await verifyUsers(email)
	            if (results.length > 0) {
	              return res.redirect(`/verify?message=Email verified successfully. You can sign in now.`)
	            } else {
	              return res.redirect(`/verify?message=Email already verified. You can sign in now.`)
	            }
	          }
	        })
	      } else {
	        return res.redirect(`/verify?message=User not found with email ` + email)
	      }
	    } else {
	      return res.redirect(`/verify?message=Wrong query params.`)
	    }
	  
	  
	    async function getUser(email) {
	        try {
	          const results = await pool.query(`SELECT * FROM tld_members WHERE email='${email}';`)
	          return results
	        }catch(e){
	          console.error(e)
	        }
	      }
	    
	    async function verifyUsers(email) {
	        try {
	          const results = await pool.query(`UPDATE tld_members SET is_verified=1 WHERE email='${email}';`)
	          return results
	        }catch(e){
	          console.error(e)
	        }
	      }
	  
};
