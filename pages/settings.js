import Meta from "../components/seo-meta";
import Navmenu from "../components/nav";
import Footer from "../components/footer";
import Statsaddress from "../components/statsaddress";
import Link from "next/link";

export default function settings() {
  return (
    <React.Fragment>
      <Meta title={"Account Settings"} description={""} />
      <Navmenu />
      <div className='section-main card-widget'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 mb-4 mt-n4'>
              <ul className='list-inline text-capitalize mb-0 ul-breadbrumbs'>
                <li className='list-inline-item mr-lg-3'>
                  <h6 className='m-0 font-600'>Manage Account</h6>
                </li>
                <li className='list-inline-item'>
                  <Link href='/dashboard'>
                    <a href='/dashboard' className='a-link-breadcrumbs'>
                      dashboard
                    </a>
                  </Link>
                </li>
                <li className='list-inline-item'>Account Settings</li>
              </ul>
            </div>
            <div className='col-lg-12 '>
              <div className='row'>
                <div className='col-lg-6'>
                  <Statsaddress
                    addressKey={"hs1qhcdclqsmgafm6a8eqq00elm93de68jtenlhuka"}
                  />
                </div>
                <div className='col-lg-6'>
                  <div className='card'>
                    <div className='card-body'>
                      <h1>Account Settings</h1>
                      <div className='form-group'>
                        <label>Username</label>
                        <input type='text' className='form-control' />
                      </div>
                      <div className='form-group'>
                        <label>Email</label>
                        <input type='text' className='form-control' />
                      </div>
                      {/* add class "was-validated" to "form-validation-custom" */}
                      <div className='form-validation-custom was-validated'>
                        <div className='form-group'>
                          <label>First Name</label>
                          <input type='text' className='form-control' />
                          <div className='valid-feedback'>
                            Please enter first name.
                          </div>
                        </div>
                        <div className='form-group'>
                          <label>Last Name</label>
                          <input type='text' className='form-control' />
                          <div className='valid-feedback'>
                            Please enter last name.
                          </div>
                        </div>
                        <div className='form-group mb-0'>
                          <a href='' className='btn btn-dark-gray btn-block'>
                            <i className='fas fa-check mr-2'></i>
                            Save changes
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
