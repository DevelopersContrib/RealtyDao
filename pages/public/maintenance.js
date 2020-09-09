import Meta from "../../components/seo-meta";
import Nav from "../../components/navhome";
import Footer from "../../components/footerhome";
export default function Maintenance() {
  return (
    <React.Fragment>
      <Meta title={"Maintenance"} description={""} />
      <div className='pageFeature'>
        <div className='container text-center'>
          <div className='row'>
            <div className='col-md-12 mb-3'>
              <div className='mainFeatInner'>
                <h1 className='mainFeatTitle'></h1>
              </div>
            </div>
            <div className='col-md-12 mt-5'>
              <img
                src='https://cdn.vnoc.com/realtydao/icon-maintenance.svg'
                width='300'
              />
              <h1>
                Sorry, we're down for scheduled<br></br>maintenance right now.
              </h1>
              <h4 className='text-primary'>Please check back soon.</h4>
              <div className='buttons'>
                <h6>
                  <a
                    href='mailto:Info@RealtyDao.com'
                    className='text-info'
                    target='_blank'
                  >
                    Info@RealtyDao.com
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
