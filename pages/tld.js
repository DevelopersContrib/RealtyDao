import Meta from "../components/seo-meta";
import Navmenu from "../components/nav";
import Footer from "../components/footer";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import Head from "next/head";
import Link from "next/link";
import Statswidget from "../components/statswidget";

export default function tld() {
  return (
    <React.Fragment>
      <Meta title={"TLD Reports"} description={"List of your domains."} />
      <Navmenu />
      <div className='section-main dashboard card-widget'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='row'>
                <div className='col-lg-3'>
                  <Statswidget
                    statRef={"/domains"}
                    statTitle={"your domains"}
                    statNum={"10,563"}
                    statDesc={"Total"}
                    statIconAlign={""}
                    bgCard={"bg-card-blue"}
                    colorIcon={"svg-icon-blue"}
                  >
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
                  </Statswidget>
                </div>
                <div className='col-lg-3'>
                  <Statswidget
                    statRef={"/domains"}
                    statTitle={"Watchlist"}
                    statNum={"1,332"}
                    statDesc={"Total"}
                    statIconAlign={""}
                    bgCard={"bg-card-blue"}
                    colorIcon={"svg-icon-blue"}
                  >
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
                  </Statswidget>
                </div>
                <div className='col-lg-3'>
                  <Statswidget
                    statRef={"/tld"}
                    statTitle={"Open Bids"}
                    statNum={"203"}
                    statDesc={"Total"}
                    statIconAlign={""}
                    bgCard={"bg-card-blue"}
                    colorIcon={"svg-icon-blue"}
                  >
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
                  </Statswidget>
                </div>
                <div className='col-lg-3'>
                  <Statswidget
                    statRef={"/tld"}
                    statTitle={"close Bids"}
                    statNum={"503"}
                    statDesc={"Total"}
                    statIconAlign={""}
                    bgCard={"bg-card-blue"}
                    colorIcon={"svg-icon-blue"}
                  >
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
                  </Statswidget>
                </div>
              </div>
            </div>
            <div className='col-lg-12'>
              <Head>
                <link
                  rel='stylesheet'
                  href='https://cdn.datatables.net/1.10.21/css/dataTables.bootstrap4.min.css'
                />
                <script src='https://code.jquery.com/jquery-3.5.1.js'></script>
                <script src='https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js'></script>
                <script src='https://cdn.datatables.net/1.10.21/js/dataTables.bootstrap4.min.js'></script>
                <script src='../js/dashboard-dt.js'></script>
              </Head>
              <Tab.Container
                id='dashboard-tabs-custom'
                defaultActiveKey='tldlistreport'
              >
                <Row>
                  <Col sm={12}>
                    <Nav
                      variant='tabs'
                      className='navtab-custom-sub nav-justified'
                    >
                      <Nav.Item>
                        <Nav.Link eventKey='tldlistreport'>
                          <span className='nav-item-title'>TLD List</span>
                          <span className='nav-item-desc'>All Reports</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='tldList'>
                          <span className='nav-item-title'>TLD</span>
                          <span className='nav-item-desc'>TLD Auction </span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='history'>
                          <span className='nav-item-title'>History</span>
                          <span className='nav-item-desc'>
                            Transaction History
                          </span>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={12}>
                    <Tab.Content className='tab-content-custom tab-content-minimal'>
                      <Tab.Pane eventKey='tldlistreport'>
                        <div className='row'>
                          <div className='col-lg-12'>
                            <div className='card mb-4'>
                              <div className='card-header bg-white'>
                                <p className='mb-0 font-500'>Open TLD</p>
                              </div>
                              <div className='card-body'>
                                <div className='table-responsive'>
                                  <table
                                    id='openTLD'
                                    className='table table-striped table-hover table-minimal mb-0'
                                  >
                                    <thead>
                                      <tr>
                                        <th scope='col'>TLD Name</th>
                                        <th scope='col'>Time Left</th>
                                        <th scope='col'>Your Bid</th>
                                        <th scope='col'>Highest Bid</th>
                                        <th scope='col'>Total Bid</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <Link href='/domain/details'>
                                            <a>officepool/</a>
                                          </Link>
                                        </td>
                                        <td>7 hrs 19 mins</td>
                                        <td>
                                          3.3
                                          <img
                                            src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                            alt='realtydao hns'
                                            className='d-inline-block ml-2 img-activity-hns'
                                          />
                                        </td>
                                        <td>
                                          501
                                          <img
                                            src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                            alt='realtydao hns'
                                            className='d-inline-block ml-2 img-activity-hns'
                                          />
                                        </td>
                                        <td>5</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Link href='/domain/details'>
                                            <a>studentchallenge/</a>
                                          </Link>
                                        </td>
                                        <td>4 hrs 02 mins</td>
                                        <td>
                                          2
                                          <img
                                            src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                            alt='realtydao hns'
                                            className='d-inline-block ml-2 img-activity-hns'
                                          />
                                        </td>
                                        <td>
                                          51
                                          <img
                                            src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                            alt='realtydao hns'
                                            className='d-inline-block ml-2 img-activity-hns'
                                          />
                                        </td>
                                        <td>3</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-12'>
                            <div className='card mb-4'>
                              <div className='card-header bg-white'>
                                <p className='mb-0 font-500'>Reveal TLD</p>
                              </div>
                              <div className='card-body'>
                                <div className='table-responsive'>
                                  <table
                                    id='revealTLD'
                                    className='table table-striped table-hover table-minimal mb-0'
                                  >
                                    <thead>
                                      <tr>
                                        <th scope='col'>TLD Name</th>
                                        <th scope='col'>Time Left</th>
                                        <th scope='col'>Your Bid</th>
                                        <th scope='col'>Highest Bid</th>
                                        <th scope='col'>Total Bid</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <Link href='/domain/details'>
                                            <a>officepool/</a>
                                          </Link>
                                        </td>
                                        <td>7 hrs 19 mins</td>
                                        <td>
                                          3.3
                                          <img
                                            src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                            alt='realtydao hns'
                                            className='d-inline-block ml-2 img-activity-hns'
                                          />
                                        </td>
                                        <td>
                                          501
                                          <img
                                            src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                            alt='realtydao hns'
                                            className='d-inline-block ml-2 img-activity-hns'
                                          />
                                        </td>
                                        <td>5</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Link href='/domain/details'>
                                            <a>studentchallenge/</a>
                                          </Link>
                                        </td>
                                        <td>4 hrs 02 mins</td>
                                        <td>
                                          2
                                          <img
                                            src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                            alt='realtydao hns'
                                            className='d-inline-block ml-2 img-activity-hns'
                                          />
                                        </td>
                                        <td>
                                          51
                                          <img
                                            src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                            alt='realtydao hns'
                                            className='d-inline-block ml-2 img-activity-hns'
                                          />
                                        </td>
                                        <td>3</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-12'>
                            <div className='card mb-4'>
                              <div className='card-header bg-white'>
                                <p className='mb-0 font-500'>Bidding TLD</p>
                              </div>
                              <div className='card-body'>
                                <div className='table-responsive'>
                                  <table
                                    id='biddingTLD'
                                    className='table table-striped table-hover table-minimal mb-0'
                                  >
                                    <thead>
                                      <tr>
                                        <th scope='col'>TLD Name</th>
                                        <th scope='col'>Time Left</th>
                                        <th scope='col'>Your Bid</th>
                                        <th scope='col'>Highest Bid</th>
                                        <th scope='col'>Total Bid</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <Link href='/domain/details'>
                                            <a>officepool/</a>
                                          </Link>
                                        </td>
                                        <td>7 hrs 19 mins</td>
                                        <td>
                                          3.3
                                          <img
                                            src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                            alt='realtydao hns'
                                            className='d-inline-block ml-2 img-activity-hns'
                                          />
                                        </td>
                                        <td>
                                          501
                                          <img
                                            src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                            alt='realtydao hns'
                                            className='d-inline-block ml-2 img-activity-hns'
                                          />
                                        </td>
                                        <td>5</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Link href='/domain/details'>
                                            <a>studentchallenge/</a>
                                          </Link>
                                        </td>
                                        <td>4 hrs 02 mins</td>
                                        <td>
                                          2
                                          <img
                                            src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                            alt='realtydao hns'
                                            className='d-inline-block ml-2 img-activity-hns'
                                          />
                                        </td>
                                        <td>
                                          51
                                          <img
                                            src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                            alt='realtydao hns'
                                            className='d-inline-block ml-2 img-activity-hns'
                                          />
                                        </td>
                                        <td>3</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-12'>
                            <div className='card'>
                              <div className='card-header bg-white'>
                                <p className='mb-0 font-500'>Closed TLD</p>
                              </div>
                              <div className='card-body'>
                                <div className='table-responsive'>
                                  <table
                                    id='closeTLD'
                                    className='table table-striped table-hover table-minimal mb-0'
                                  >
                                    <thead>
                                      <tr>
                                        <th scope='col'>TLD Name</th>
                                        <th scope='col'>Your Bid</th>
                                        <th scope='col'>Highest Bid</th>
                                        <th scope='col'>Total Bid</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <Link href='/domain/details'>
                                            <a>officepool/</a>
                                          </Link>
                                        </td>
                                        <td>
                                          3.3
                                          <img
                                            src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                            alt='realtydao hns'
                                            className='d-inline-block ml-2 img-activity-hns'
                                          />
                                        </td>
                                        <td>
                                          501
                                          <img
                                            src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                            alt='realtydao hns'
                                            className='d-inline-block ml-2 img-activity-hns'
                                          />
                                        </td>
                                        <td>5</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Link href='/domain/details'>
                                            <a>studentchallenge/</a>
                                          </Link>
                                        </td>
                                        <td>
                                          2
                                          <img
                                            src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                            alt='realtydao hns'
                                            className='d-inline-block ml-2 img-activity-hns'
                                          />
                                        </td>
                                        <td>
                                          51
                                          <img
                                            src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                            alt='realtydao hns'
                                            className='d-inline-block ml-2 img-activity-hns'
                                          />
                                        </td>
                                        <td>3</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey='tldList'>
                        <div className='row'>
                          <div className='col-lg-12'>
                            <div className='card'>
                              <div className='card-header bg-white'>
                                <p className='mb-0 font-500'>
                                  TLD AUCTION LIST
                                </p>
                              </div>
                              <div className='card-body'>
                                <div className='table-responsive'>
                                  <table
                                    id='tld-full-list'
                                    className='table table-striped table-hover table-minimal mb-0'
                                  >
                                    <thead>
                                      <tr>
                                        <th scope='col'>TLD Name</th>
                                        <th scope='col'>STATUS</th>
                                        <th scope='col'>Date</th>
                                        <th scope='col'>Your Bid</th>
                                        <th scope='col'>Highest Bid</th>
                                        <th scope='col'>Total Bid</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <Link href='/domain/details'>
                                            <a>officepool/</a>
                                          </Link>
                                        </td>
                                        <td>
                                          <span className='label label-light-primary label-inline'>
                                            Open
                                          </span>
                                        </td>
                                        <td>2020-08-16T09:50:16Z</td>
                                        <td>
                                          3
                                          <img
                                            src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                            alt='realtydao hns'
                                            className='d-inline-block ml-2 img-activity-hns'
                                          />
                                        </td>
                                        <td>
                                          21
                                          <img
                                            src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                            alt='realtydao hns'
                                            className='d-inline-block ml-2 img-activity-hns'
                                          />
                                        </td>
                                        <td>4</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Link href='/domain/details'>
                                            <a>hamak/</a>
                                          </Link>
                                        </td>
                                        <td>
                                          <span className='label label-light-primary label-inline'>
                                            Closed
                                          </span>
                                        </td>
                                        <td>2020-08-10T05:03:40Z</td>
                                        <td>
                                          2
                                          <img
                                            src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                            alt='realtydao hns'
                                            className='d-inline-block ml-2 img-activity-hns'
                                          />
                                        </td>
                                        <td>
                                          2
                                          <img
                                            src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                            alt='realtydao hns'
                                            className='d-inline-block ml-2 img-activity-hns'
                                          />
                                        </td>
                                        <td>1</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Link href='/domain/details'>
                                            <a>freaknet/</a>
                                          </Link>
                                        </td>
                                        <td>
                                          <span className='label label-light-primary label-inline'>
                                            Reveal
                                          </span>
                                        </td>
                                        <td>2020-08-10T06:10:11Z</td>
                                        <td>
                                          1
                                          <img
                                            src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                            alt='realtydao hns'
                                            className='d-inline-block ml-2 img-activity-hns'
                                          />
                                        </td>
                                        <td>
                                          5
                                          <img
                                            src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                            alt='realtydao hns'
                                            className='d-inline-block ml-2 img-activity-hns'
                                          />
                                        </td>
                                        <td>3</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Link href='/domain/details'>
                                            <a>builderconference/</a>
                                          </Link>
                                        </td>
                                        <td>
                                          <span className='label label-light-primary label-inline'>
                                            Bidding
                                          </span>
                                        </td>
                                        <td>2020-08-10T06:10:12Z</td>
                                        <td>
                                          3
                                          <img
                                            src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                            alt='realtydao hns'
                                            className='d-inline-block ml-2 img-activity-hns'
                                          />
                                        </td>
                                        <td>
                                          5.5
                                          <img
                                            src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                            alt='realtydao hns'
                                            className='d-inline-block ml-2 img-activity-hns'
                                          />
                                        </td>
                                        <td>6</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey='history'>
                        <div className='row'>
                          <div className='col-lg-12'>
                            <div className='card'>
                              <div className='card-header bg-white'>
                                <p className='mb-0 font-500'>
                                  Transaction History
                                </p>
                              </div>
                              <div className='card-body'>
                                <div className='table-responsive'>
                                  <table
                                    id='transaction-history'
                                    className='table table-striped table-hover table-minimal mb-0'
                                  >
                                    <thead>
                                      <tr>
                                        <th scope='col'>TLD Name</th>
                                        <th scope='col'>Description</th>
                                        <th scope='col'>Date</th>
                                        <th scope='col'>Value</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <Link href='/domain/details'>
                                            <a>officepool/</a>
                                          </Link>
                                        </td>
                                        <td>Opened Auction</td>
                                        <td>2020-08-16T09:50:16Z</td>
                                        <td>
                                          <span className='text-blue'>
                                            +1
                                            <img
                                              src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                              alt='realtydao hns'
                                              className='d-inline-block ml-2 img-activity-hns'
                                            />
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Link href='/domain/details'>
                                            <a>hamak/</a>
                                          </Link>
                                        </td>
                                        <td>Placed Bid</td>
                                        <td>2020-08-10T05:03:40Z</td>
                                        <td>
                                          <span className='text-blue'>
                                            +2
                                            <img
                                              src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                              alt='realtydao hns'
                                              className='d-inline-block ml-2 img-activity-hns'
                                            />
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Link href='/domain/details'>
                                            <a>freaknet/</a>
                                          </Link>
                                        </td>
                                        <td>Revealed Bid (multiple)</td>
                                        <td>2020-08-10T06:10:11Z</td>
                                        <td>
                                          <span className='text-blue'>
                                            +0
                                            <img
                                              src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                              alt='realtydao hns'
                                              className='d-inline-block ml-2 img-activity-hns'
                                            />
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Link href='/domain/details'>
                                            <a>builderconference/</a>
                                          </Link>
                                        </td>
                                        <td>Redeemed Bid</td>
                                        <td>2020-08-10T06:10:12Z</td>
                                        <td>
                                          <span className='text-danger'>
                                            -3.3
                                            <img
                                              src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                              alt='realtydao hns'
                                              className='d-inline-block ml-2 img-activity-hns'
                                            />
                                          </span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
