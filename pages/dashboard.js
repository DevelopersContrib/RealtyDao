import Meta from "../components/seo-meta";
import Navmenu from "../components/nav";
import Footer from "../components/footer";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import Head from "next/head";
import Link from "next/link";
import Statsbalance from "../components/statsbalance";
import Statsaddress from "../components/statsaddress";

export default function dashboard() {
  return (
    <React.Fragment>
      <style jsx>{`
        .default-main {
          display: flex;
          min-height: 82px;
        }
        .default-text {
          font-size: 1.5rem;
          color: #b5b5c3;
        }
      `}</style>
      <Meta title={"Dashboard"} description={""} />
      <Navmenu />
      <div className='section-main dashboard card-widget'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='row'>
                <div className='col-lg-4'>
                  <Statsaddress
                    addressKey={"hs1qhcdclqsmgafm6a8eqq00elm93de68jtenlhuka"}
                  />
                </div>
                <div className='col-lg-4'>
                  <Statsbalance
                    statsdesc={""}
                    numbalance={"10,000"}
                    bgCard={"bg-card-dark-gray"}
                    align={""}
                  />
                </div>
                <div className='col-lg-4'>
                  <Statsbalance
                    statsdesc={"locked up in auction"}
                    numbalance={"1,000"}
                    bgCard={"bg-card-dark-light"}
                    align={""}
                  />
                </div>
              </div>
              <div className='card mb-3'>
                <div className='card-body'>
                  {/* add class "was-validated" to "row" */}
                  <div className='row'>
                    <div className='col-lg-12'>
                      <div className='form-group'>
                        <label className='font-500 text-uppercase'>
                          TLDS Name
                          <small className='text-muted ml-2'>
                            (Separate by new line)
                          </small>
                        </label>
                        <textarea className='form-control' rows='5'></textarea>
                        <div className='valid-feedback'>
                          Please enter TLD Name.
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-lg-8'>
                          <div className='form-group'>
                            <label className='font-500 text-uppercase'>
                              Bid Price (HNS)
                            </label>
                            <input type='text' className='form-control' />
                            <div className='valid-feedback'>
                              Please enter Bid price.
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-4'>
                          <div className='form-group'>
                            <label>&nbsp;</label>
                            <button
                              type='button'
                              className='btn btn-dark-gray btn-block'
                            >
                              <i className='fas fa-check mr-2'></i> Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-12'>
                  <p className='font-600 text-muted-light text-uppercase mb-1'>
                    activity
                  </p>
                </div>
                {/* Start:: Loop here */}
                <div className='col-lg-12'>
                  <div className='card mb-3'>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col-lg-4'>
                          <div className=''>
                            <Link href='/domain/details'>
                              <a className='font-500 text-blue'>indyparks/</a>
                            </Link>
                          </div>
                        </div>
                        <div className='col-lg-3'>
                          <div className=''>Redeemed Bid</div>
                        </div>
                        <div className='col-lg-2 text-md-right'>
                          <div className='font-500 text-blue'>
                            +0.5
                            <img
                              src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                              alt='realtydao hns'
                              className='d-inline-block ml-2 img-activity-hns'
                            />
                          </div>
                        </div>
                        <div className='col-lg-3 d-flex justify-content-center align-items-center'>
                          <div className='text-muted-light small'>
                            <i className='far fa-clock mr-2'></i>
                            2020-08-19T06:32:23Z
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End */}
                <div className='col-lg-12'>
                  <div className='card mb-3'>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col-lg-4'>
                          <div className=''>
                            <Link href='/domain/details'>
                              <a className='font-500 text-blue'>mobilevid/</a>
                            </Link>
                          </div>
                        </div>
                        <div className='col-lg-3'>
                          <div className=''>Registered Name</div>
                        </div>
                        <div className='col-lg-2 text-md-right'>
                          <div className='font-500 text-blue'>
                            +0.5
                            <img
                              src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                              alt='realtydao hns'
                              className='d-inline-block ml-2 img-activity-hns'
                            />
                          </div>
                        </div>
                        <div className='col-lg-3 d-flex justify-content-center align-items-center'>
                          <div className='text-muted-light small'>
                            <i className='far fa-clock mr-2'></i>
                            2020-08-19T06:32:23Z
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='card mb-3'>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col-lg-4'>
                          <div className='dark-gray'>
                            <Link href='/domain/details'>
                              <a className='font-500 text-blue'>
                                studentchallenge/
                              </a>
                            </Link>
                          </div>
                        </div>
                        <div className='col-lg-3'>
                          <div className=''>Revealed Bid (multiple)</div>
                        </div>
                        <div className='col-lg-2 text-md-right'>
                          <div className='font-500 text-light-danger'>
                            -3.3
                            <img
                              src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                              alt='realtydao hns'
                              className='d-inline-block ml-2 img-activity-hns'
                            />
                          </div>
                        </div>
                        <div className='col-lg-3 d-flex justify-content-center align-items-center'>
                          <div className='text-muted-light small'>
                            <i className='far fa-clock mr-2'></i>
                            2020-08-08T08:14:45Z
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='card mb-3'>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col-lg-4'>
                          <div className=''>-</div>
                        </div>
                        <div className='col-lg-3'>
                          <div className=''>Received Funds</div>
                        </div>
                        <div className='col-lg-2 text-md-right'>
                          <div className='font-500 text-blue'>
                            +24.986
                            <img
                              src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                              alt='realtydao hns'
                              className='d-inline-block ml-2 img-activity-hns'
                            />
                          </div>
                        </div>
                        <div className='col-lg-3 d-flex justify-content-center align-items-center'>
                          <div className='text-muted-light small'>
                            <i className='far fa-clock mr-2'></i>
                            2020-08-07T10:46:09Z
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='card mb-3'>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col-lg-4'>
                          <div className=''>
                            <Link href='/domain/details'>
                              <a className='font-500 text-blue'>indyparks/</a>
                            </Link>
                          </div>
                        </div>
                        <div className='col-lg-3'>
                          <div className=''>Opened Auction</div>
                        </div>
                        <div className='col-lg-2 text-md-right'>-</div>
                        <div className='col-lg-3 d-flex justify-content-center align-items-center'>
                          <div className='text-muted-light small'>
                            <i className='far fa-clock mr-2'></i>
                            2020-08-07T10:46:09Z
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='card mb-3'>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col-lg-4'>
                          <div className=''>
                            <Link href='/domain/details'>
                              <a className='font-500 text-blue'>mobilevid/</a>
                            </Link>
                          </div>
                        </div>
                        <div className='col-lg-3'>
                          <div className=''>Registered Name</div>
                        </div>
                        <div className='col-lg-2 text-md-right'>
                          <div className='font-500 text-blue'>
                            +0.5
                            <img
                              src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                              alt='realtydao hns'
                              className='d-inline-block ml-2 img-activity-hns'
                            />
                          </div>
                        </div>
                        <div className='col-lg-3 d-flex justify-content-center align-items-center'>
                          <div className='text-muted-light small'>
                            <i className='far fa-clock mr-2'></i>
                            2020-08-19T06:32:23Z
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='card mb-3'>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col-lg-4'>
                          <div className='dark-gray'>
                            <Link href='/domain/details'>
                              <a className='font-500 text-blue'>
                                studentchallenge/
                              </a>
                            </Link>
                          </div>
                        </div>
                        <div className='col-lg-3'>
                          <div className=''>Revealed Bid (multiple)</div>
                        </div>
                        <div className='col-lg-2 text-md-right'>
                          <div className='font-500 text-light-danger'>
                            -3.3
                            <img
                              src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                              alt='realtydao hns'
                              className='d-inline-block ml-2 img-activity-hns'
                            />
                          </div>
                        </div>
                        <div className='col-lg-3 d-flex justify-content-center align-items-center'>
                          <div className='text-muted-light small'>
                            <i className='far fa-clock mr-2'></i>
                            2020-08-08T08:14:45Z
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='card mb-3'>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col-lg-4'>
                          <div className=''>-</div>
                        </div>
                        <div className='col-lg-3'>
                          <div className=''>Received Funds</div>
                        </div>
                        <div className='col-lg-2 text-md-right'>
                          <div className='font-500 text-blue'>
                            +24.986
                            <img
                              src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                              alt='realtydao hns'
                              className='d-inline-block ml-2 img-activity-hns'
                            />
                          </div>
                        </div>
                        <div className='col-lg-3 d-flex justify-content-center align-items-center'>
                          <div className='text-muted-light small'>
                            <i className='far fa-clock mr-2'></i>
                            2020-08-07T10:46:09Z
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='card mb-3'>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col-lg-4'>
                          <div className=''>
                            <Link href='/domain/details'>
                              <a className='font-500 text-blue'>indyparks/</a>
                            </Link>
                          </div>
                        </div>
                        <div className='col-lg-3'>
                          <div className=''>Opened Auction</div>
                        </div>
                        <div className='col-lg-2 text-md-right'>-</div>
                        <div className='col-lg-3 d-flex justify-content-center align-items-center'>
                          <div className='text-muted-light small'>
                            <i className='far fa-clock mr-2'></i>
                            2020-08-07T10:46:09Z
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-12 text-center'>
                  <div
                    className='mt-3 mx-auto'
                    style={{
                      width: "100px",
                    }}
                  >
                    <img
                      src='https://samherbert.net/svg-loaders/svg-loaders/oval.svg'
                      alt=''
                    />
                    <div className='mt-2'>Loading...</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='card mb-4'>
                    <div className='card-body'>
                      {/* Start :: Default Text */}
                      <div className='row d-none'>
                        <div className='col-lg-12'>
                          <div className='default-main align-items-center justify-content-center'>
                            <span className='svg-icon svg-icon-default svg-icon-2x mr-2'>
                              <svg
                                width='24px'
                                height='24px'
                                viewBox='0 0 24 24'
                                version='1.1'
                              >
                                <g
                                  stroke='none'
                                  strokeWidth='1'
                                  fill='none'
                                  fillRule='evenodd'
                                >
                                  <rect x='0' y='0' width='24' height='24' />
                                  <path
                                    d='M8,3 L8,3.5 C8,4.32842712 8.67157288,5 9.5,5 L14.5,5 C15.3284271,5 16,4.32842712 16,3.5 L16,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,21 C20,22.1045695 19.1045695,23 18,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,5 C4,3.8954305 4.8954305,3 6,3 L8,3 Z'
                                    fill='#000000'
                                    opacity='0.3'
                                  />
                                  <path
                                    d='M10.875,15.75 C10.6354167,15.75 10.3958333,15.6541667 10.2041667,15.4625 L8.2875,13.5458333 C7.90416667,13.1625 7.90416667,12.5875 8.2875,12.2041667 C8.67083333,11.8208333 9.29375,11.8208333 9.62916667,12.2041667 L10.875,13.45 L14.0375,10.2875 C14.4208333,9.90416667 14.9958333,9.90416667 15.3791667,10.2875 C15.7625,10.6708333 15.7625,11.2458333 15.3791667,11.6291667 L11.5458333,15.4625 C11.3541667,15.6541667 11.1145833,15.75 10.875,15.75 Z'
                                    fill='#000000'
                                  />
                                  <path
                                    d='M11,2 C11,1.44771525 11.4477153,1 12,1 C12.5522847,1 13,1.44771525 13,2 L14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 L11,2 Z'
                                    fill='#000000'
                                  />
                                </g>
                              </svg>
                            </span>
                            <span className='default-text'>Watchlist</span>
                          </div>
                        </div>
                      </div>
                      {/* End */}
                      <div className=''>
                        <h5 className='font-600 mb-3'>Watch List TLD's</h5>
                        <ul className='list-unstyled clearfix mb-0'>
                          <li>
                            <Link href='/tld'>
                              <a href='/tld' className='d-block text-reset'>
                                <div className='mr-2 float-left'>
                                  <span className='svg-icon svg-icon-dark-gray svg-icon-sm'>
                                    <svg
                                      width='24px'
                                      height='24px'
                                      viewBox='0 0 24 24'
                                      version='1.1'
                                    >
                                      <g
                                        stroke='none'
                                        strokeWidth='1'
                                        fill='none'
                                        fillRule='evenodd'
                                      >
                                        <rect
                                          x='0'
                                          y='0'
                                          width='24'
                                          height='24'
                                        />
                                        <path
                                          d='M8,3 L8,3.5 C8,4.32842712 8.67157288,5 9.5,5 L14.5,5 C15.3284271,5 16,4.32842712 16,3.5 L16,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,21 C20,22.1045695 19.1045695,23 18,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,5 C4,3.8954305 4.8954305,3 6,3 L8,3 Z'
                                          fill='#000000'
                                          opacity='0.3'
                                        />
                                        <path
                                          d='M10.875,15.75 C10.6354167,15.75 10.3958333,15.6541667 10.2041667,15.4625 L8.2875,13.5458333 C7.90416667,13.1625 7.90416667,12.5875 8.2875,12.2041667 C8.67083333,11.8208333 9.29375,11.8208333 9.62916667,12.2041667 L10.875,13.45 L14.0375,10.2875 C14.4208333,9.90416667 14.9958333,9.90416667 15.3791667,10.2875 C15.7625,10.6708333 15.7625,11.2458333 15.3791667,11.6291667 L11.5458333,15.4625 C11.3541667,15.6541667 11.1145833,15.75 10.875,15.75 Z'
                                          fill='#000000'
                                        />
                                        <path
                                          d='M11,2 C11,1.44771525 11.4477153,1 12,1 C12.5522847,1 13,1.44771525 13,2 L14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 L11,2 Z'
                                          fill='#000000'
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </div>
                                <div className='text-truncate pt-1'>
                                  handyman/
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/tld'>
                              <a href='/tld' className='d-block text-reset'>
                                <div className='mr-2 float-left'>
                                  <span className='svg-icon svg-icon-dark-gray svg-icon-sm'>
                                    <svg
                                      width='24px'
                                      height='24px'
                                      viewBox='0 0 24 24'
                                      version='1.1'
                                    >
                                      <g
                                        stroke='none'
                                        strokeWidth='1'
                                        fill='none'
                                        fillRule='evenodd'
                                      >
                                        <rect
                                          x='0'
                                          y='0'
                                          width='24'
                                          height='24'
                                        />
                                        <path
                                          d='M8,3 L8,3.5 C8,4.32842712 8.67157288,5 9.5,5 L14.5,5 C15.3284271,5 16,4.32842712 16,3.5 L16,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,21 C20,22.1045695 19.1045695,23 18,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,5 C4,3.8954305 4.8954305,3 6,3 L8,3 Z'
                                          fill='#000000'
                                          opacity='0.3'
                                        />
                                        <path
                                          d='M10.875,15.75 C10.6354167,15.75 10.3958333,15.6541667 10.2041667,15.4625 L8.2875,13.5458333 C7.90416667,13.1625 7.90416667,12.5875 8.2875,12.2041667 C8.67083333,11.8208333 9.29375,11.8208333 9.62916667,12.2041667 L10.875,13.45 L14.0375,10.2875 C14.4208333,9.90416667 14.9958333,9.90416667 15.3791667,10.2875 C15.7625,10.6708333 15.7625,11.2458333 15.3791667,11.6291667 L11.5458333,15.4625 C11.3541667,15.6541667 11.1145833,15.75 10.875,15.75 Z'
                                          fill='#000000'
                                        />
                                        <path
                                          d='M11,2 C11,1.44771525 11.4477153,1 12,1 C12.5522847,1 13,1.44771525 13,2 L14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 L11,2 Z'
                                          fill='#000000'
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </div>
                                <div className='text-truncate pt-1'>
                                  photostream/
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/tld'>
                              <a href='/tld' className='d-block text-reset'>
                                <div className='mr-2 float-left'>
                                  <span className='svg-icon svg-icon-dark-gray svg-icon-sm'>
                                    <svg
                                      width='24px'
                                      height='24px'
                                      viewBox='0 0 24 24'
                                      version='1.1'
                                    >
                                      <g
                                        stroke='none'
                                        strokeWidth='1'
                                        fill='none'
                                        fillRule='evenodd'
                                      >
                                        <rect
                                          x='0'
                                          y='0'
                                          width='24'
                                          height='24'
                                        />
                                        <path
                                          d='M8,3 L8,3.5 C8,4.32842712 8.67157288,5 9.5,5 L14.5,5 C15.3284271,5 16,4.32842712 16,3.5 L16,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,21 C20,22.1045695 19.1045695,23 18,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,5 C4,3.8954305 4.8954305,3 6,3 L8,3 Z'
                                          fill='#000000'
                                          opacity='0.3'
                                        />
                                        <path
                                          d='M10.875,15.75 C10.6354167,15.75 10.3958333,15.6541667 10.2041667,15.4625 L8.2875,13.5458333 C7.90416667,13.1625 7.90416667,12.5875 8.2875,12.2041667 C8.67083333,11.8208333 9.29375,11.8208333 9.62916667,12.2041667 L10.875,13.45 L14.0375,10.2875 C14.4208333,9.90416667 14.9958333,9.90416667 15.3791667,10.2875 C15.7625,10.6708333 15.7625,11.2458333 15.3791667,11.6291667 L11.5458333,15.4625 C11.3541667,15.6541667 11.1145833,15.75 10.875,15.75 Z'
                                          fill='#000000'
                                        />
                                        <path
                                          d='M11,2 C11,1.44771525 11.4477153,1 12,1 C12.5522847,1 13,1.44771525 13,2 L14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 L11,2 Z'
                                          fill='#000000'
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </div>
                                <div className='text-truncate pt-1'>
                                  autograph/
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/tld'>
                              <a href='/tld' className='d-block text-reset'>
                                <div className='mr-2 float-left'>
                                  <span className='svg-icon svg-icon-dark-gray svg-icon-sm'>
                                    <svg
                                      width='24px'
                                      height='24px'
                                      viewBox='0 0 24 24'
                                      version='1.1'
                                    >
                                      <g
                                        stroke='none'
                                        strokeWidth='1'
                                        fill='none'
                                        fillRule='evenodd'
                                      >
                                        <rect
                                          x='0'
                                          y='0'
                                          width='24'
                                          height='24'
                                        />
                                        <path
                                          d='M8,3 L8,3.5 C8,4.32842712 8.67157288,5 9.5,5 L14.5,5 C15.3284271,5 16,4.32842712 16,3.5 L16,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,21 C20,22.1045695 19.1045695,23 18,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,5 C4,3.8954305 4.8954305,3 6,3 L8,3 Z'
                                          fill='#000000'
                                          opacity='0.3'
                                        />
                                        <path
                                          d='M10.875,15.75 C10.6354167,15.75 10.3958333,15.6541667 10.2041667,15.4625 L8.2875,13.5458333 C7.90416667,13.1625 7.90416667,12.5875 8.2875,12.2041667 C8.67083333,11.8208333 9.29375,11.8208333 9.62916667,12.2041667 L10.875,13.45 L14.0375,10.2875 C14.4208333,9.90416667 14.9958333,9.90416667 15.3791667,10.2875 C15.7625,10.6708333 15.7625,11.2458333 15.3791667,11.6291667 L11.5458333,15.4625 C11.3541667,15.6541667 11.1145833,15.75 10.875,15.75 Z'
                                          fill='#000000'
                                        />
                                        <path
                                          d='M11,2 C11,1.44771525 11.4477153,1 12,1 C12.5522847,1 13,1.44771525 13,2 L14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 L11,2 Z'
                                          fill='#000000'
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </div>
                                <div className='text-truncate pt-1'>
                                  globalventures/
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/tld'>
                              <a href='/tld' className='d-block text-reset'>
                                <div className='mr-2 float-left'>
                                  <span className='svg-icon svg-icon-dark-gray svg-icon-sm'>
                                    <svg
                                      width='24px'
                                      height='24px'
                                      viewBox='0 0 24 24'
                                      version='1.1'
                                    >
                                      <g
                                        stroke='none'
                                        strokeWidth='1'
                                        fill='none'
                                        fillRule='evenodd'
                                      >
                                        <rect
                                          x='0'
                                          y='0'
                                          width='24'
                                          height='24'
                                        />
                                        <path
                                          d='M8,3 L8,3.5 C8,4.32842712 8.67157288,5 9.5,5 L14.5,5 C15.3284271,5 16,4.32842712 16,3.5 L16,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,21 C20,22.1045695 19.1045695,23 18,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,5 C4,3.8954305 4.8954305,3 6,3 L8,3 Z'
                                          fill='#000000'
                                          opacity='0.3'
                                        />
                                        <path
                                          d='M10.875,15.75 C10.6354167,15.75 10.3958333,15.6541667 10.2041667,15.4625 L8.2875,13.5458333 C7.90416667,13.1625 7.90416667,12.5875 8.2875,12.2041667 C8.67083333,11.8208333 9.29375,11.8208333 9.62916667,12.2041667 L10.875,13.45 L14.0375,10.2875 C14.4208333,9.90416667 14.9958333,9.90416667 15.3791667,10.2875 C15.7625,10.6708333 15.7625,11.2458333 15.3791667,11.6291667 L11.5458333,15.4625 C11.3541667,15.6541667 11.1145833,15.75 10.875,15.75 Z'
                                          fill='#000000'
                                        />
                                        <path
                                          d='M11,2 C11,1.44771525 11.4477153,1 12,1 C12.5522847,1 13,1.44771525 13,2 L14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 L11,2 Z'
                                          fill='#000000'
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </div>
                                <div className='text-truncate pt-1'>
                                  mobiledev/
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li className='mt-3'>
                            <Link href='/tld'>
                              <a
                                href='/tld'
                                className='btn btn-light-dark-gray btn-sm btn-block'
                              >
                                <i className='fas fa-search mr-2'></i>
                                View All
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='card mb-4'>
                    <div className='card-body'>
                      {/* Start :: Default Text */}
                      <div className='row d-none'>
                        <div className='col-lg-12'>
                          <div className='default-main align-items-center justify-content-center'>
                            <span className='svg-icon svg-icon-default svg-icon-2x mr-2'>
                              <svg
                                width='24px'
                                height='24px'
                                viewBox='0 0 24 24'
                                version='1.1'
                              >
                                <g
                                  stroke='none'
                                  strokeWidth='1'
                                  fill='none'
                                  fillRule='evenodd'
                                >
                                  <rect x='0' y='0' width='24' height='24' />
                                  <path
                                    d='M12,4.56204994 L7.76822128,9.6401844 C7.4146572,10.0644613 6.7840925,10.1217854 6.3598156,9.76822128 C5.9355387,9.4146572 5.87821464,8.7840925 6.23177872,8.3598156 L11.2317787,2.3598156 C11.6315738,1.88006147 12.3684262,1.88006147 12.7682213,2.3598156 L17.7682213,8.3598156 C18.1217854,8.7840925 18.0644613,9.4146572 17.6401844,9.76822128 C17.2159075,10.1217854 16.5853428,10.0644613 16.2317787,9.6401844 L12,4.56204994 Z'
                                    fill='#000000'
                                    fillRule='nonzero'
                                    opacity='0.3'
                                  />
                                  <path
                                    d='M3.28077641,9 L20.7192236,9 C21.2715083,9 21.7192236,9.44771525 21.7192236,10 C21.7192236,10.0817618 21.7091962,10.163215 21.6893661,10.2425356 L19.5680983,18.7276069 C19.234223,20.0631079 18.0342737,21 16.6576708,21 L7.34232922,21 C5.96572629,21 4.76577697,20.0631079 4.43190172,18.7276069 L2.31063391,10.2425356 C2.17668518,9.70674072 2.50244587,9.16380623 3.03824078,9.0298575 C3.11756139,9.01002735 3.1990146,9 3.28077641,9 Z M12,12 C11.4477153,12 11,12.4477153 11,13 L11,17 C11,17.5522847 11.4477153,18 12,18 C12.5522847,18 13,17.5522847 13,17 L13,13 C13,12.4477153 12.5522847,12 12,12 Z M6.96472382,12.1362967 C6.43125772,12.2792385 6.11467523,12.8275755 6.25761704,13.3610416 L7.29289322,17.2247449 C7.43583503,17.758211 7.98417199,18.0747935 8.51763809,17.9318517 C9.05110419,17.7889098 9.36768668,17.2405729 9.22474487,16.7071068 L8.18946869,12.8434035 C8.04652688,12.3099374 7.49818992,11.9933549 6.96472382,12.1362967 Z M17.0352762,12.1362967 C16.5018101,11.9933549 15.9534731,12.3099374 15.8105313,12.8434035 L14.7752551,16.7071068 C14.6323133,17.2405729 14.9488958,17.7889098 15.4823619,17.9318517 C16.015828,18.0747935 16.564165,17.758211 16.7071068,17.2247449 L17.742383,13.3610416 C17.8853248,12.8275755 17.5687423,12.2792385 17.0352762,12.1362967 Z'
                                    fill='#000000'
                                  />
                                </g>
                              </svg>
                            </span>
                            <span className='default-text'>Open TLD</span>
                          </div>
                        </div>
                      </div>
                      {/* End */}
                      <div className=''>
                        <h5 className='font-600 mb-3'>Open TLD's</h5>
                        <ul className='list-unstyled clearfix mb-0'>
                          <li>
                            <Link href='/tld'>
                              <a href='/tld' className='d-block text-reset'>
                                <div className='mr-2 float-left'>
                                  <span className='svg-icon svg-icon-dark-gray svg-icon-sm'>
                                    <svg
                                      width='24px'
                                      height='24px'
                                      viewBox='0 0 24 24'
                                      version='1.1'
                                    >
                                      <g
                                        stroke='none'
                                        strokeWidth='1'
                                        fill='none'
                                        fillRule='evenodd'
                                      >
                                        <rect
                                          x='0'
                                          y='0'
                                          width='24'
                                          height='24'
                                        />
                                        <path
                                          d='M12,4.56204994 L7.76822128,9.6401844 C7.4146572,10.0644613 6.7840925,10.1217854 6.3598156,9.76822128 C5.9355387,9.4146572 5.87821464,8.7840925 6.23177872,8.3598156 L11.2317787,2.3598156 C11.6315738,1.88006147 12.3684262,1.88006147 12.7682213,2.3598156 L17.7682213,8.3598156 C18.1217854,8.7840925 18.0644613,9.4146572 17.6401844,9.76822128 C17.2159075,10.1217854 16.5853428,10.0644613 16.2317787,9.6401844 L12,4.56204994 Z'
                                          fill='#000000'
                                          fillRule='nonzero'
                                          opacity='0.3'
                                        />
                                        <path
                                          d='M3.28077641,9 L20.7192236,9 C21.2715083,9 21.7192236,9.44771525 21.7192236,10 C21.7192236,10.0817618 21.7091962,10.163215 21.6893661,10.2425356 L19.5680983,18.7276069 C19.234223,20.0631079 18.0342737,21 16.6576708,21 L7.34232922,21 C5.96572629,21 4.76577697,20.0631079 4.43190172,18.7276069 L2.31063391,10.2425356 C2.17668518,9.70674072 2.50244587,9.16380623 3.03824078,9.0298575 C3.11756139,9.01002735 3.1990146,9 3.28077641,9 Z M12,12 C11.4477153,12 11,12.4477153 11,13 L11,17 C11,17.5522847 11.4477153,18 12,18 C12.5522847,18 13,17.5522847 13,17 L13,13 C13,12.4477153 12.5522847,12 12,12 Z M6.96472382,12.1362967 C6.43125772,12.2792385 6.11467523,12.8275755 6.25761704,13.3610416 L7.29289322,17.2247449 C7.43583503,17.758211 7.98417199,18.0747935 8.51763809,17.9318517 C9.05110419,17.7889098 9.36768668,17.2405729 9.22474487,16.7071068 L8.18946869,12.8434035 C8.04652688,12.3099374 7.49818992,11.9933549 6.96472382,12.1362967 Z M17.0352762,12.1362967 C16.5018101,11.9933549 15.9534731,12.3099374 15.8105313,12.8434035 L14.7752551,16.7071068 C14.6323133,17.2405729 14.9488958,17.7889098 15.4823619,17.9318517 C16.015828,18.0747935 16.564165,17.758211 16.7071068,17.2247449 L17.742383,13.3610416 C17.8853248,12.8275755 17.5687423,12.2792385 17.0352762,12.1362967 Z'
                                          fill='#000000'
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </div>
                                <div className='text-truncate pt-1'>
                                  handyman/
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/tld'>
                              <a href='/tld' className='d-block text-reset'>
                                <div className='mr-2 float-left'>
                                  <span className='svg-icon svg-icon-dark-gray svg-icon-sm'>
                                    <svg
                                      width='24px'
                                      height='24px'
                                      viewBox='0 0 24 24'
                                      version='1.1'
                                    >
                                      <g
                                        stroke='none'
                                        strokeWidth='1'
                                        fill='none'
                                        fillRule='evenodd'
                                      >
                                        <rect
                                          x='0'
                                          y='0'
                                          width='24'
                                          height='24'
                                        />
                                        <path
                                          d='M12,4.56204994 L7.76822128,9.6401844 C7.4146572,10.0644613 6.7840925,10.1217854 6.3598156,9.76822128 C5.9355387,9.4146572 5.87821464,8.7840925 6.23177872,8.3598156 L11.2317787,2.3598156 C11.6315738,1.88006147 12.3684262,1.88006147 12.7682213,2.3598156 L17.7682213,8.3598156 C18.1217854,8.7840925 18.0644613,9.4146572 17.6401844,9.76822128 C17.2159075,10.1217854 16.5853428,10.0644613 16.2317787,9.6401844 L12,4.56204994 Z'
                                          fill='#000000'
                                          fillRule='nonzero'
                                          opacity='0.3'
                                        />
                                        <path
                                          d='M3.28077641,9 L20.7192236,9 C21.2715083,9 21.7192236,9.44771525 21.7192236,10 C21.7192236,10.0817618 21.7091962,10.163215 21.6893661,10.2425356 L19.5680983,18.7276069 C19.234223,20.0631079 18.0342737,21 16.6576708,21 L7.34232922,21 C5.96572629,21 4.76577697,20.0631079 4.43190172,18.7276069 L2.31063391,10.2425356 C2.17668518,9.70674072 2.50244587,9.16380623 3.03824078,9.0298575 C3.11756139,9.01002735 3.1990146,9 3.28077641,9 Z M12,12 C11.4477153,12 11,12.4477153 11,13 L11,17 C11,17.5522847 11.4477153,18 12,18 C12.5522847,18 13,17.5522847 13,17 L13,13 C13,12.4477153 12.5522847,12 12,12 Z M6.96472382,12.1362967 C6.43125772,12.2792385 6.11467523,12.8275755 6.25761704,13.3610416 L7.29289322,17.2247449 C7.43583503,17.758211 7.98417199,18.0747935 8.51763809,17.9318517 C9.05110419,17.7889098 9.36768668,17.2405729 9.22474487,16.7071068 L8.18946869,12.8434035 C8.04652688,12.3099374 7.49818992,11.9933549 6.96472382,12.1362967 Z M17.0352762,12.1362967 C16.5018101,11.9933549 15.9534731,12.3099374 15.8105313,12.8434035 L14.7752551,16.7071068 C14.6323133,17.2405729 14.9488958,17.7889098 15.4823619,17.9318517 C16.015828,18.0747935 16.564165,17.758211 16.7071068,17.2247449 L17.742383,13.3610416 C17.8853248,12.8275755 17.5687423,12.2792385 17.0352762,12.1362967 Z'
                                          fill='#000000'
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </div>
                                <div className='text-truncate pt-1'>
                                  photostream/
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/tld'>
                              <a href='/tld' className='d-block text-reset'>
                                <div className='mr-2 float-left'>
                                  <span className='svg-icon svg-icon-dark-gray svg-icon-sm'>
                                    <svg
                                      width='24px'
                                      height='24px'
                                      viewBox='0 0 24 24'
                                      version='1.1'
                                    >
                                      <g
                                        stroke='none'
                                        strokeWidth='1'
                                        fill='none'
                                        fillRule='evenodd'
                                      >
                                        <rect
                                          x='0'
                                          y='0'
                                          width='24'
                                          height='24'
                                        />
                                        <path
                                          d='M12,4.56204994 L7.76822128,9.6401844 C7.4146572,10.0644613 6.7840925,10.1217854 6.3598156,9.76822128 C5.9355387,9.4146572 5.87821464,8.7840925 6.23177872,8.3598156 L11.2317787,2.3598156 C11.6315738,1.88006147 12.3684262,1.88006147 12.7682213,2.3598156 L17.7682213,8.3598156 C18.1217854,8.7840925 18.0644613,9.4146572 17.6401844,9.76822128 C17.2159075,10.1217854 16.5853428,10.0644613 16.2317787,9.6401844 L12,4.56204994 Z'
                                          fill='#000000'
                                          fillRule='nonzero'
                                          opacity='0.3'
                                        />
                                        <path
                                          d='M3.28077641,9 L20.7192236,9 C21.2715083,9 21.7192236,9.44771525 21.7192236,10 C21.7192236,10.0817618 21.7091962,10.163215 21.6893661,10.2425356 L19.5680983,18.7276069 C19.234223,20.0631079 18.0342737,21 16.6576708,21 L7.34232922,21 C5.96572629,21 4.76577697,20.0631079 4.43190172,18.7276069 L2.31063391,10.2425356 C2.17668518,9.70674072 2.50244587,9.16380623 3.03824078,9.0298575 C3.11756139,9.01002735 3.1990146,9 3.28077641,9 Z M12,12 C11.4477153,12 11,12.4477153 11,13 L11,17 C11,17.5522847 11.4477153,18 12,18 C12.5522847,18 13,17.5522847 13,17 L13,13 C13,12.4477153 12.5522847,12 12,12 Z M6.96472382,12.1362967 C6.43125772,12.2792385 6.11467523,12.8275755 6.25761704,13.3610416 L7.29289322,17.2247449 C7.43583503,17.758211 7.98417199,18.0747935 8.51763809,17.9318517 C9.05110419,17.7889098 9.36768668,17.2405729 9.22474487,16.7071068 L8.18946869,12.8434035 C8.04652688,12.3099374 7.49818992,11.9933549 6.96472382,12.1362967 Z M17.0352762,12.1362967 C16.5018101,11.9933549 15.9534731,12.3099374 15.8105313,12.8434035 L14.7752551,16.7071068 C14.6323133,17.2405729 14.9488958,17.7889098 15.4823619,17.9318517 C16.015828,18.0747935 16.564165,17.758211 16.7071068,17.2247449 L17.742383,13.3610416 C17.8853248,12.8275755 17.5687423,12.2792385 17.0352762,12.1362967 Z'
                                          fill='#000000'
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </div>
                                <div className='text-truncate pt-1'>
                                  autograph/
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/tld'>
                              <a href='/tld' className='d-block text-reset'>
                                <div className='mr-2 float-left'>
                                  <span className='svg-icon svg-icon-dark-gray svg-icon-sm'>
                                    <svg
                                      width='24px'
                                      height='24px'
                                      viewBox='0 0 24 24'
                                      version='1.1'
                                    >
                                      <g
                                        stroke='none'
                                        strokeWidth='1'
                                        fill='none'
                                        fillRule='evenodd'
                                      >
                                        <rect
                                          x='0'
                                          y='0'
                                          width='24'
                                          height='24'
                                        />
                                        <path
                                          d='M12,4.56204994 L7.76822128,9.6401844 C7.4146572,10.0644613 6.7840925,10.1217854 6.3598156,9.76822128 C5.9355387,9.4146572 5.87821464,8.7840925 6.23177872,8.3598156 L11.2317787,2.3598156 C11.6315738,1.88006147 12.3684262,1.88006147 12.7682213,2.3598156 L17.7682213,8.3598156 C18.1217854,8.7840925 18.0644613,9.4146572 17.6401844,9.76822128 C17.2159075,10.1217854 16.5853428,10.0644613 16.2317787,9.6401844 L12,4.56204994 Z'
                                          fill='#000000'
                                          fillRule='nonzero'
                                          opacity='0.3'
                                        />
                                        <path
                                          d='M3.28077641,9 L20.7192236,9 C21.2715083,9 21.7192236,9.44771525 21.7192236,10 C21.7192236,10.0817618 21.7091962,10.163215 21.6893661,10.2425356 L19.5680983,18.7276069 C19.234223,20.0631079 18.0342737,21 16.6576708,21 L7.34232922,21 C5.96572629,21 4.76577697,20.0631079 4.43190172,18.7276069 L2.31063391,10.2425356 C2.17668518,9.70674072 2.50244587,9.16380623 3.03824078,9.0298575 C3.11756139,9.01002735 3.1990146,9 3.28077641,9 Z M12,12 C11.4477153,12 11,12.4477153 11,13 L11,17 C11,17.5522847 11.4477153,18 12,18 C12.5522847,18 13,17.5522847 13,17 L13,13 C13,12.4477153 12.5522847,12 12,12 Z M6.96472382,12.1362967 C6.43125772,12.2792385 6.11467523,12.8275755 6.25761704,13.3610416 L7.29289322,17.2247449 C7.43583503,17.758211 7.98417199,18.0747935 8.51763809,17.9318517 C9.05110419,17.7889098 9.36768668,17.2405729 9.22474487,16.7071068 L8.18946869,12.8434035 C8.04652688,12.3099374 7.49818992,11.9933549 6.96472382,12.1362967 Z M17.0352762,12.1362967 C16.5018101,11.9933549 15.9534731,12.3099374 15.8105313,12.8434035 L14.7752551,16.7071068 C14.6323133,17.2405729 14.9488958,17.7889098 15.4823619,17.9318517 C16.015828,18.0747935 16.564165,17.758211 16.7071068,17.2247449 L17.742383,13.3610416 C17.8853248,12.8275755 17.5687423,12.2792385 17.0352762,12.1362967 Z'
                                          fill='#000000'
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </div>
                                <div className='text-truncate pt-1'>
                                  globalventures/
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/tld'>
                              <a href='/tld' className='d-block text-reset'>
                                <div className='mr-2 float-left'>
                                  <span className='svg-icon svg-icon-dark-gray svg-icon-sm'>
                                    <svg
                                      width='24px'
                                      height='24px'
                                      viewBox='0 0 24 24'
                                      version='1.1'
                                    >
                                      <g
                                        stroke='none'
                                        strokeWidth='1'
                                        fill='none'
                                        fillRule='evenodd'
                                      >
                                        <rect
                                          x='0'
                                          y='0'
                                          width='24'
                                          height='24'
                                        />
                                        <path
                                          d='M12,4.56204994 L7.76822128,9.6401844 C7.4146572,10.0644613 6.7840925,10.1217854 6.3598156,9.76822128 C5.9355387,9.4146572 5.87821464,8.7840925 6.23177872,8.3598156 L11.2317787,2.3598156 C11.6315738,1.88006147 12.3684262,1.88006147 12.7682213,2.3598156 L17.7682213,8.3598156 C18.1217854,8.7840925 18.0644613,9.4146572 17.6401844,9.76822128 C17.2159075,10.1217854 16.5853428,10.0644613 16.2317787,9.6401844 L12,4.56204994 Z'
                                          fill='#000000'
                                          fillRule='nonzero'
                                          opacity='0.3'
                                        />
                                        <path
                                          d='M3.28077641,9 L20.7192236,9 C21.2715083,9 21.7192236,9.44771525 21.7192236,10 C21.7192236,10.0817618 21.7091962,10.163215 21.6893661,10.2425356 L19.5680983,18.7276069 C19.234223,20.0631079 18.0342737,21 16.6576708,21 L7.34232922,21 C5.96572629,21 4.76577697,20.0631079 4.43190172,18.7276069 L2.31063391,10.2425356 C2.17668518,9.70674072 2.50244587,9.16380623 3.03824078,9.0298575 C3.11756139,9.01002735 3.1990146,9 3.28077641,9 Z M12,12 C11.4477153,12 11,12.4477153 11,13 L11,17 C11,17.5522847 11.4477153,18 12,18 C12.5522847,18 13,17.5522847 13,17 L13,13 C13,12.4477153 12.5522847,12 12,12 Z M6.96472382,12.1362967 C6.43125772,12.2792385 6.11467523,12.8275755 6.25761704,13.3610416 L7.29289322,17.2247449 C7.43583503,17.758211 7.98417199,18.0747935 8.51763809,17.9318517 C9.05110419,17.7889098 9.36768668,17.2405729 9.22474487,16.7071068 L8.18946869,12.8434035 C8.04652688,12.3099374 7.49818992,11.9933549 6.96472382,12.1362967 Z M17.0352762,12.1362967 C16.5018101,11.9933549 15.9534731,12.3099374 15.8105313,12.8434035 L14.7752551,16.7071068 C14.6323133,17.2405729 14.9488958,17.7889098 15.4823619,17.9318517 C16.015828,18.0747935 16.564165,17.758211 16.7071068,17.2247449 L17.742383,13.3610416 C17.8853248,12.8275755 17.5687423,12.2792385 17.0352762,12.1362967 Z'
                                          fill='#000000'
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </div>
                                <div className='text-truncate pt-1'>
                                  mobiledev/
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li className='mt-3'>
                            <Link href='/tld'>
                              <a
                                href='/tld'
                                className='btn btn-light-dark-gray btn-sm btn-block'
                              >
                                <i className='fas fa-search mr-2'></i>
                                View All
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='card mb-4'>
                    <div className='card-body'>
                      {/* Start :: Default Text */}
                      <div className='row d-none'>
                        <div className='col-lg-12'>
                          <div className='default-main align-items-center justify-content-center'>
                            <span className='svg-icon svg-icon-default svg-icon-2x mr-2'>
                              <svg
                                width='24px'
                                height='24px'
                                viewBox='0 0 24 24'
                                version='1.1'
                              >
                                <g
                                  stroke='none'
                                  strokeWidth='1'
                                  fill='none'
                                  fillRule='evenodd'
                                >
                                  <rect x='0' y='0' width='24' height='24' />
                                  <path
                                    d='M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z'
                                    fill='#000000'
                                    opacity='0.3'
                                  />
                                  <path
                                    d='M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z'
                                    fill='#000000'
                                  />
                                </g>
                              </svg>
                            </span>
                            <span className='default-text'>Your TLD's</span>
                          </div>
                        </div>
                      </div>
                      {/* End */}
                      <div className=''>
                        <h5 className='font-600 mb-3'>Your TLD's</h5>
                        <ul className='list-unstyled clearfix mb-0'>
                          <li>
                            <Link href='/tld'>
                              <a href='/tld' className='d-block text-reset'>
                                <div className='mr-2 float-left'>
                                  <span className='svg-icon svg-icon-dark-gray svg-icon-sm'>
                                    <svg
                                      width='24px'
                                      height='24px'
                                      viewBox='0 0 24 24'
                                      version='1.1'
                                    >
                                      <g
                                        stroke='none'
                                        strokeWidth='1'
                                        fill='none'
                                        fillRule='evenodd'
                                      >
                                        <rect
                                          x='0'
                                          y='0'
                                          width='24'
                                          height='24'
                                        />
                                        <path
                                          d='M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z'
                                          fill='#000000'
                                          opacity='0.3'
                                        />
                                        <path
                                          d='M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z'
                                          fill='#000000'
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </div>
                                <div className='text-truncate pt-1'>
                                  handyman/
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/tld'>
                              <a href='/tld' className='d-block text-reset'>
                                <div className='mr-2 float-left'>
                                  <span className='svg-icon svg-icon-dark-gray svg-icon-sm'>
                                    <svg
                                      width='24px'
                                      height='24px'
                                      viewBox='0 0 24 24'
                                      version='1.1'
                                    >
                                      <g
                                        stroke='none'
                                        strokeWidth='1'
                                        fill='none'
                                        fillRule='evenodd'
                                      >
                                        <rect
                                          x='0'
                                          y='0'
                                          width='24'
                                          height='24'
                                        />
                                        <path
                                          d='M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z'
                                          fill='#000000'
                                          opacity='0.3'
                                        />
                                        <path
                                          d='M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z'
                                          fill='#000000'
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </div>
                                <div className='text-truncate pt-1'>
                                  photostream/
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/tld'>
                              <a href='/tld' className='d-block text-reset'>
                                <div className='mr-2 float-left'>
                                  <span className='svg-icon svg-icon-dark-gray svg-icon-sm'>
                                    <svg
                                      width='24px'
                                      height='24px'
                                      viewBox='0 0 24 24'
                                      version='1.1'
                                    >
                                      <g
                                        stroke='none'
                                        strokeWidth='1'
                                        fill='none'
                                        fillRule='evenodd'
                                      >
                                        <rect
                                          x='0'
                                          y='0'
                                          width='24'
                                          height='24'
                                        />
                                        <path
                                          d='M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z'
                                          fill='#000000'
                                          opacity='0.3'
                                        />
                                        <path
                                          d='M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z'
                                          fill='#000000'
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </div>
                                <div className='text-truncate pt-1'>
                                  autograph/
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/tld'>
                              <a href='/tld' className='d-block text-reset'>
                                <div className='mr-2 float-left'>
                                  <span className='svg-icon svg-icon-dark-gray svg-icon-sm'>
                                    <svg
                                      width='24px'
                                      height='24px'
                                      viewBox='0 0 24 24'
                                      version='1.1'
                                    >
                                      <g
                                        stroke='none'
                                        strokeWidth='1'
                                        fill='none'
                                        fillRule='evenodd'
                                      >
                                        <rect
                                          x='0'
                                          y='0'
                                          width='24'
                                          height='24'
                                        />
                                        <path
                                          d='M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z'
                                          fill='#000000'
                                          opacity='0.3'
                                        />
                                        <path
                                          d='M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z'
                                          fill='#000000'
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </div>
                                <div className='text-truncate pt-1'>
                                  globalventures/
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/tld'>
                              <a href='/tld' className='d-block text-reset'>
                                <div className='mr-2 float-left'>
                                  <span className='svg-icon svg-icon-dark-gray svg-icon-sm'>
                                    <svg
                                      width='24px'
                                      height='24px'
                                      viewBox='0 0 24 24'
                                      version='1.1'
                                    >
                                      <g
                                        stroke='none'
                                        strokeWidth='1'
                                        fill='none'
                                        fillRule='evenodd'
                                      >
                                        <rect
                                          x='0'
                                          y='0'
                                          width='24'
                                          height='24'
                                        />
                                        <path
                                          d='M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z'
                                          fill='#000000'
                                          opacity='0.3'
                                        />
                                        <path
                                          d='M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z'
                                          fill='#000000'
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </div>
                                <div className='text-truncate pt-1'>
                                  mobiledev/
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li className='mt-3'>
                            <Link href='/tld'>
                              <a
                                href='/tld'
                                className='btn btn-light-dark-gray btn-sm btn-block'
                              >
                                <i className='fas fa-search mr-2'></i>
                                View All
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='card mb-4'>
                    <div className='card-body'>
                      {/* Start :: Default Text */}
                      <div className='row d-none'>
                        <div className='col-lg-12'>
                          <div className='default-main align-items-center justify-content-center'>
                            <span className='svg-icon svg-icon-default svg-icon-2x mr-2'>
                              <svg
                                width='24px'
                                height='24px'
                                viewBox='0 0 24 24'
                                version='1.1'
                              >
                                <g
                                  stroke='none'
                                  strokeWidth='1'
                                  fill='none'
                                  fillRule='evenodd'
                                >
                                  <rect x='0' y='0' width='24' height='24' />
                                  <path
                                    d='M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z M12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 Z M19.0710678,4.92893219 L19.0710678,4.92893219 C19.4615921,5.31945648 19.4615921,5.95262146 19.0710678,6.34314575 L6.34314575,19.0710678 C5.95262146,19.4615921 5.31945648,19.4615921 4.92893219,19.0710678 L4.92893219,19.0710678 C4.5384079,18.6805435 4.5384079,18.0473785 4.92893219,17.6568542 L17.6568542,4.92893219 C18.0473785,4.5384079 18.6805435,4.5384079 19.0710678,4.92893219 Z'
                                    fill='#000000'
                                    fillRule='nonzero'
                                    opacity='0.3'
                                  />
                                </g>
                              </svg>
                            </span>
                            <span className='default-text'>Closed TLD</span>
                          </div>
                        </div>
                      </div>
                      {/* End */}
                      <div className=''>
                        <h5 className='font-600 mb-3'>Closed TLD's</h5>
                        <ul className='list-unstyled clearfix mb-0'>
                          <li>
                            <Link href='/tld'>
                              <a href='/tld' className='d-block text-reset'>
                                <div className='mr-2 float-left'>
                                  <span className='svg-icon svg-icon-dark-gray svg-icon-sm'>
                                    <svg
                                      width='24px'
                                      height='24px'
                                      viewBox='0 0 24 24'
                                      version='1.1'
                                    >
                                      <g
                                        stroke='none'
                                        strokeWidth='1'
                                        fill='none'
                                        fillRule='evenodd'
                                      >
                                        <rect
                                          x='0'
                                          y='0'
                                          width='24'
                                          height='24'
                                        />
                                        <path
                                          d='M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z M12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 Z M19.0710678,4.92893219 L19.0710678,4.92893219 C19.4615921,5.31945648 19.4615921,5.95262146 19.0710678,6.34314575 L6.34314575,19.0710678 C5.95262146,19.4615921 5.31945648,19.4615921 4.92893219,19.0710678 L4.92893219,19.0710678 C4.5384079,18.6805435 4.5384079,18.0473785 4.92893219,17.6568542 L17.6568542,4.92893219 C18.0473785,4.5384079 18.6805435,4.5384079 19.0710678,4.92893219 Z'
                                          fill='#000000'
                                          fillRule='nonzero'
                                          opacity='0.3'
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </div>
                                <div className='text-truncate pt-1'>
                                  handyman/
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/tld'>
                              <a href='/tld' className='d-block text-reset'>
                                <div className='mr-2 float-left'>
                                  <span className='svg-icon svg-icon-dark-gray svg-icon-sm'>
                                    <svg
                                      width='24px'
                                      height='24px'
                                      viewBox='0 0 24 24'
                                      version='1.1'
                                    >
                                      <g
                                        stroke='none'
                                        strokeWidth='1'
                                        fill='none'
                                        fillRule='evenodd'
                                      >
                                        <rect
                                          x='0'
                                          y='0'
                                          width='24'
                                          height='24'
                                        />
                                        <path
                                          d='M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z M12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 Z M19.0710678,4.92893219 L19.0710678,4.92893219 C19.4615921,5.31945648 19.4615921,5.95262146 19.0710678,6.34314575 L6.34314575,19.0710678 C5.95262146,19.4615921 5.31945648,19.4615921 4.92893219,19.0710678 L4.92893219,19.0710678 C4.5384079,18.6805435 4.5384079,18.0473785 4.92893219,17.6568542 L17.6568542,4.92893219 C18.0473785,4.5384079 18.6805435,4.5384079 19.0710678,4.92893219 Z'
                                          fill='#000000'
                                          fillRule='nonzero'
                                          opacity='0.3'
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </div>
                                <div className='text-truncate pt-1'>
                                  photostream/
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/tld'>
                              <a href='/tld' className='d-block text-reset'>
                                <div className='mr-2 float-left'>
                                  <span className='svg-icon svg-icon-dark-gray svg-icon-sm'>
                                    <svg
                                      width='24px'
                                      height='24px'
                                      viewBox='0 0 24 24'
                                      version='1.1'
                                    >
                                      <g
                                        stroke='none'
                                        strokeWidth='1'
                                        fill='none'
                                        fillRule='evenodd'
                                      >
                                        <rect
                                          x='0'
                                          y='0'
                                          width='24'
                                          height='24'
                                        />
                                        <path
                                          d='M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z M12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 Z M19.0710678,4.92893219 L19.0710678,4.92893219 C19.4615921,5.31945648 19.4615921,5.95262146 19.0710678,6.34314575 L6.34314575,19.0710678 C5.95262146,19.4615921 5.31945648,19.4615921 4.92893219,19.0710678 L4.92893219,19.0710678 C4.5384079,18.6805435 4.5384079,18.0473785 4.92893219,17.6568542 L17.6568542,4.92893219 C18.0473785,4.5384079 18.6805435,4.5384079 19.0710678,4.92893219 Z'
                                          fill='#000000'
                                          fillRule='nonzero'
                                          opacity='0.3'
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </div>
                                <div className='text-truncate pt-1'>
                                  autograph/
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/tld'>
                              <a href='/tld' className='d-block text-reset'>
                                <div className='mr-2 float-left'>
                                  <span className='svg-icon svg-icon-dark-gray svg-icon-sm'>
                                    <svg
                                      width='24px'
                                      height='24px'
                                      viewBox='0 0 24 24'
                                      version='1.1'
                                    >
                                      <g
                                        stroke='none'
                                        strokeWidth='1'
                                        fill='none'
                                        fillRule='evenodd'
                                      >
                                        <rect
                                          x='0'
                                          y='0'
                                          width='24'
                                          height='24'
                                        />
                                        <path
                                          d='M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z M12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 Z M19.0710678,4.92893219 L19.0710678,4.92893219 C19.4615921,5.31945648 19.4615921,5.95262146 19.0710678,6.34314575 L6.34314575,19.0710678 C5.95262146,19.4615921 5.31945648,19.4615921 4.92893219,19.0710678 L4.92893219,19.0710678 C4.5384079,18.6805435 4.5384079,18.0473785 4.92893219,17.6568542 L17.6568542,4.92893219 C18.0473785,4.5384079 18.6805435,4.5384079 19.0710678,4.92893219 Z'
                                          fill='#000000'
                                          fillRule='nonzero'
                                          opacity='0.3'
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </div>
                                <div className='text-truncate pt-1'>
                                  globalventures/
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/tld'>
                              <a href='/tld' className='d-block text-reset'>
                                <div className='mr-2 float-left'>
                                  <span className='svg-icon svg-icon-dark-gray svg-icon-sm'>
                                    <svg
                                      width='24px'
                                      height='24px'
                                      viewBox='0 0 24 24'
                                      version='1.1'
                                    >
                                      <g
                                        stroke='none'
                                        strokeWidth='1'
                                        fill='none'
                                        fillRule='evenodd'
                                      >
                                        <rect
                                          x='0'
                                          y='0'
                                          width='24'
                                          height='24'
                                        />
                                        <path
                                          d='M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z M12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 Z M19.0710678,4.92893219 L19.0710678,4.92893219 C19.4615921,5.31945648 19.4615921,5.95262146 19.0710678,6.34314575 L6.34314575,19.0710678 C5.95262146,19.4615921 5.31945648,19.4615921 4.92893219,19.0710678 L4.92893219,19.0710678 C4.5384079,18.6805435 4.5384079,18.0473785 4.92893219,17.6568542 L17.6568542,4.92893219 C18.0473785,4.5384079 18.6805435,4.5384079 19.0710678,4.92893219 Z'
                                          fill='#000000'
                                          fillRule='nonzero'
                                          opacity='0.3'
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </div>
                                <div className='text-truncate pt-1'>
                                  mobiledev/
                                </div>
                              </a>
                            </Link>
                          </li>
                          <li className='mt-3'>
                            <Link href='/tld'>
                              <a
                                href='/tld'
                                className='btn btn-light-dark-gray btn-sm btn-block'
                              >
                                <i className='fas fa-search mr-2'></i>
                                View All
                              </a>
                            </Link>
                          </li>
                        </ul>
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
