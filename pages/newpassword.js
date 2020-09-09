import Meta from "../components/seo-meta";
import Nav from "../components/navhome";
import Footer from "../components/footerhome";
export default function New() {
  return (
    <React.Fragment>
      <Meta title={"NewPassword"} description={""} />
      <Nav />
      <div className="newPasswordMain">
        <form className="formLogin">
          <div className="text-center mb-3">
            <h1 className="h3 mb-3 font-weight-bold">Enter New Password</h1>
          </div>
          <div className="alert alert-warning text-center">
            Password Required!
          </div>
          <div className="alert alert-success text-center">
            Success! Please proceed to&nbsp;<a href="login" className="text-info">Log In</a>
          </div>
          <div className="form-group">
            <label>New Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder=""/>				
          </div>
          <div className="form-group">
            <label>Confirm New Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder=""/>				
          </div>			
          <div className="form-group">
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              <div className="spinner-border"></div>
              Submit
            </button>
          </div>		
        </form>
      </div>
      <Footer />
    </React.Fragment>
  );
}
