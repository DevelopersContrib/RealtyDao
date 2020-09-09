import Meta from "../../components/seo-meta";
import Navmenu from "../../components/nav";
import Footer from "../../components/footer";
import Head from "next/head";
import Statsbalance from "../../components/statsbalance";
import Swal from "sweetalert2";
import Link from "next/link";

const handlePlaceBid = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "It will be deduct to your HNS.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, Keep going!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.value) {
      Swal.fire("Success!", "You purchase mobiledev", "success");
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire("Cancelled", "Transaction Cancelled!", "error");
    }
  });
};

export default function domain() {
  return (
    <React.Fragment>
      <Meta title={"Bid TLD"} description={""} />
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
                  <h6 className='m-0 font-600'>Bid TLD</h6>
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
            <div className='col-lg-8'>
              <div className='row'>
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
                            Status:{" "}
                            <span className='text-uppercase'>Reveal</span>
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
            <div className='col-lg-4'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='card mb-3 bg-card bg-blue text-white'>
                    <div className='card-body'>
                      <div className='font-600 mb-1 text-uppercase'>
                        <i className='fas fa-check-circle mr-2'></i>
                        Reminder
                      </div>
                      The highest bidder wins but the price paid is the
                      second-highest bid.
                    </div>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <Statsbalance
                    statsdesc={""}
                    numbalance={"10,000"}
                    bgCard={"bg-card-dark-gray"}
                    align={"d-flex justify-content-end align-items-center"}
                  />
                </div>

                <div className='col-lg-12'>
                  <div className='card mb-3'>
                    <div className='card-body'>
                      <h5 className='mb-4 mt-0 text-uppercase'>
                        Highest Lockup: 1,000
                        <img
                          src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                          alt='realtydao hns'
                          className='d-inline-block ml-2 img-activity-hns'
                        />
                      </h5>
                      <div className='was-validated'>
                        <div className='form-group'>
                          <div className='input-group'>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='Your Bid'
                              required
                            />
                            <div className='invalid-feedback order-last'>
                              Please input valid amount.
                            </div>
                            <div className='input-group-append'>
                              <span className='input-group-text'>
                                <small>
                                  <img
                                    src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                    alt='realtydao hns'
                                    className='d-inline-block img-activity-hns'
                                  />
                                </small>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='form-group'>
                        <div className='input-group'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='Your Blind (optional)'
                          />
                          <div className='input-group-append'>
                            <span className='input-group-text'>
                              <small>
                                <img
                                  src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                  alt='realtydao hns'
                                  className='d-inline-block img-activity-hns'
                                />
                              </small>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='mb-3 mt-5 font-500'>
                        Your total lockup: 0.00{" "}
                        <img
                          src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                          alt='realtydao hns'
                          className='d-inline-block ml-2 img-activity-hns'
                        />
                      </div>
                      <button
                        onClick={handlePlaceBid}
                        className='btn btn-block btn-dark-gray'
                      >
                        <i className='fas fa-handshake mr-2'></i>
                        Place Bid
                      </button>
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
