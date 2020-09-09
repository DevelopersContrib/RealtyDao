import Meta from "../../components/seo-meta";
import Navmenu from "../../components/nav";
import Footer from "../../components/footer";
import Head from "next/head";
import Link from "next/link";

export default function details() {
  return (
    <React.Fragment>
      <Meta title={"Domain Details"} description={""} />
      <Navmenu />
      <Head>
        <link
          rel='stylesheet'
          href='https://cdn.datatables.net/1.10.21/css/dataTables.bootstrap4.min.css'
        />
        <script src='https://code.jquery.com/jquery-3.5.1.js'></script>
        <script src='https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js'></script>
        <script src='https://cdn.datatables.net/1.10.21/js/dataTables.bootstrap4.min.js'></script>
        <script src='../js/tableDomainDetails.js'></script>
      </Head>
      <div className='section-main card-widget'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 mb-4 mt-n4'>
              <ul className='list-inline text-capitalize mb-0 ul-breadbrumbs'>
                <li className='list-inline-item mr-lg-3'>
                  <h6 className='m-0 font-600'>TLD Detail</h6>
                </li>
                <li className='list-inline-item'>
                  <Link href='/dashboard'>
                    <a href='/dashboard' className='a-link-breadcrumbs'>
                      dashboard
                    </a>
                  </Link>
                </li>
                <li className='list-inline-item text-lowercase'>autograph/</li>
              </ul>
            </div>
            <div className='col-lg-12'>
              <div className='card mb-3'>
                <div className='card-body'>
                  <div className='mb-4'>
                    <h1 className='mb-1'>autograph/</h1>
                    <p className='text-muted-light'>Current Block #29206</p>
                  </div>
                  <div className='row'>
                    <div className='col-lg-3'>
                      <p className='mb-1 font-600'>Start Date</p>
                      <div className='d-block mb-1'>
                        <div className='badge-light badge-primary-light'>
                          Aug 17, 2020
                        </div>
                      </div>
                      <small>#28186</small>
                    </div>
                    <div className='col-lg-3'>
                      <p className='mb-1 font-600'>End Date</p>
                      <div className='d-block mb-1'>
                        <div className='badge-light badge-danger-light'>
                          Aug 23, 2020
                        </div>
                      </div>
                      <small>#29626</small>
                    </div>
                    <div className='col-lg-6'>
                      <div className=' font-600 mb-1'>Reveal Period</div>
                      <div className='mb-1'>
                        <div className='progress'>
                          <div
                            className='progress-bar'
                            role='progressbar'
                            style={{ width: "50%" }}
                            aria-valuenow='50'
                            aria-valuemin='0'
                            aria-valuemax='100'
                          ></div>
                        </div>
                      </div>
                      <div className='font-500'>
                        Ends: 2 days 21 hrs 59 mins
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card-footer d-flex align-items-center bg-white'>
                  <div className='d-flex'>
                    <div className='d-flex mr-4'>
                      <span className=''>Your Total Bids:</span>
                      <span className='font-700 ml-2'>
                        6
                        <img
                          src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                          alt='realtydao hns'
                          className='d-inline-block ml-2 img-activity-hns'
                        />
                      </span>
                    </div>
                    <div className='d-flex mr-4'>
                      <span className=''>Your Total Lockup:</span>
                      <span className='font-700 ml-2'>
                        222
                        <img
                          src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                          alt='realtydao hns'
                          className='d-inline-block ml-2 img-activity-hns'
                        />
                      </span>
                    </div>
                    <div className='d-flex mr-4'>
                      <span className=''>Total Bids:</span>
                      <span className='font-700 ml-2'>1</span>
                    </div>
                  </div>
                  <div className='ml-auto'>
                    <div className='d-flex justify-content-end'>
                      <div className='badge-light badge-dark-light'>
                        Status: <span className='text-uppercase'>Reveal</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='card mb-3'>
                <div className='card-body'>
                  <h5 className='mb-4 mt-0 text-uppercase'>Bid Reveal</h5>
                  <div className='table-responsive'>
                    <table
                      id='bidreveal'
                      className='table table-striped table-hover table-minimal mb-0'
                    >
                      <thead>
                        <tr>
                          <th scope='col'>Bidder</th>
                          <th scope='col'>Bid Amount</th>
                          <th scope='col'>Lockup Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>You</td>
                          <td>
                            6
                            <img
                              src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                              alt='realtydao hns'
                              className='d-inline-block ml-2 img-activity-hns'
                            />
                          </td>
                          <td>
                            222
                            <img
                              src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                              alt='realtydao hns'
                              className='d-inline-block ml-2 img-activity-hns'
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Bidder 2</td>
                          <td>
                            222
                            <img
                              src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                              alt='realtydao hns'
                              className='d-inline-block ml-2 img-activity-hns'
                            />
                          </td>
                          <td>
                            1000
                            <img
                              src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                              alt='realtydao hns'
                              className='d-inline-block ml-2 img-activity-hns'
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Bidder 3</td>
                          <td>
                            1
                            <img
                              src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                              alt='realtydao hns'
                              className='d-inline-block ml-2 img-activity-hns'
                            />
                          </td>
                          <td>{""}</td>
                        </tr>
                      </tbody>
                    </table>
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
