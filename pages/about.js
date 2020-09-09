import Meta from "../components/seo-meta";
import Nav from "../components/navhome";
import Footer from "../components/footerhome";
export default function About() {
  return (
    <React.Fragment>
      <Meta title={"About"} description={""} />
      <Nav />
      <div className="pageFeature">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-3">
              <div className="mainFeatInner">
                <h1 className="mainFeatTitle">
                  About Us
                </h1>
              </div>
            </div> 
            <div className="col-md-12">
              <h3>Our Vision</h3>
              <p>
              We envision people around the world with complementary skills, passion, time and resources coworking online building sustainable electronic businesses, part-time. Our focus will continue to support our members with a system to grow and learn new skills, help build a company from scratch using the worlds best assets, and to contribute with other great, like-minded and talented people. 
              </p>
            </div> 
            <div className="col-md-12">
              <h3>Our Story</h3>
              <p>We build, manage and monetize thousands of premium Urls acquired over the 18 years of its parent company, GV, llc. Premium assets such as Streaming.com, Staffing.com, Linked and others were losing opportunity value so we build a model and technology to leverage the opportunities and offer it to our visitors. </p>
            </div>          
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
