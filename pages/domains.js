import Meta from "../components/seo-meta";
import Navmenu from "../components/nav";
import Footer from "../components/footer";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import Link from "next/link";
import Head from "next/head";
import Statsbalance from "../components/statsbalance";
import Statswidget from "../components/statswidget";
import Swal from "sweetalert2";

const handleRemoveWatchlist = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "Data won't be available for viewing if you remove it.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, Keep going!",
    cancelButtonText: "No",
    cancelButtonColor: "#f64e60",
  }).then((result) => {
    if (result.value) {
      Swal.fire("Success!", "Removed from your watchlist", "success");
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire("Cancelled", "Remove Cancelled!", "error");
    }
  });
};

export default function domains() {
  return (
    <React.Fragment>
      <Meta title={"Manage TLD"} description={""} />
      <Navmenu />
      <div className='section-main card-widget'>
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
                  <Statsbalance
                    statsdesc={""}
                    numbalance={"10,000"}
                    bgCard={"bg-card-dark-gray"}
                  />
                </div>
                <div className='col-lg-3'>
                  <Statsbalance
                    statsdesc={"locked up in auction"}
                    numbalance={"1,000"}
                    bgCard={"bg-card-dark-light"}
                    align={""}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <Head>
                <link
                  rel='stylesheet'
                  href='https://cdn.datatables.net/1.10.21/css/dataTables.bootstrap4.min.css'
                />
                <script src='https://code.jquery.com/jquery-3.5.1.js'></script>
                <script src='https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js'></script>
                <script src='https://cdn.datatables.net/1.10.21/js/dataTables.bootstrap4.min.js'></script>
                <script src='../js/table-managedomain.js'></script>
              </Head>
              <Tab.Container
                id='managetld-tabs-custom'
                defaultActiveKey='yourtld'
              >
                <Row>
                  <Col sm={12}>
                    <Nav
                      variant='tabs'
                      className='navtab-custom-sub nav-justified'
                    >
                      <Nav.Item>
                        <Nav.Link eventKey='yourtld'>
                          <span className='nav-item-title'>Your TLD</span>
                          <span className='nav-item-desc'>All</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='watchlist'>
                          <span className='nav-item-title'>Watchlist</span>
                          <span className='nav-item-desc'>TLD</span>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={12}>
                    <Tab.Content className='tab-content-custom tab-content-minimal'>
                      <Tab.Pane eventKey='yourtld'>
                        <div className='row'>
                          <div className='col-lg-12'>
                            <div className='card'>
                              <div className='card-header bg-white'>
                                <p className='mb-0 font-500'>Manage TLD</p>
                              </div>
                              <div className='card-body'>
                                <div className='table-responsive'>
                                  <table
                                    style={{ width: "100%" }}
                                    id='domain-list'
                                    className='table table-striped table-hover table-minimal mb-0'
                                  >
                                    <thead>
                                      <tr>
                                        <th scope='col'>TLD Name</th>
                                        <th scope='col'>STATUS</th>
                                        <th scope='col'>Date</th>
                                        <th scope='col'>Actions</th>
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
                                          <div className='responsive-btn'>
                                            <Link href='/bid/domain'>
                                              <a
                                                href='/domain/bid'
                                                className='btn btn-sm btn-light-dark-gray'
                                              >
                                                <i className='fas fa-handshake mr-2'></i>
                                                Bid
                                              </a>
                                            </Link>
                                            <Link href='#'>
                                              <a
                                                href='#'
                                                className='btn btn-sm btn-light-blue btn-text-sm'
                                              >
                                                <i className='fas fa-sync mr-2'></i>
                                                Redeem
                                              </a>
                                            </Link>
                                            <Link href='/manage/domain'>
                                              <a
                                                href='/manage/domain'
                                                className='btn btn-light-dark-gray btn-text-sm btn-sm'
                                              >
                                                <i className='fas fa-pencil-alt mr-2'></i>
                                                Edit
                                              </a>
                                            </Link>
                                            <Link href='/domain/details'>
                                              <a
                                                href='/domain/details'
                                                className='btn btn-sm btn-light-blue btn-text-sm'
                                              >
                                                <i className='fas fa-search mr-2'></i>
                                                View
                                              </a>
                                            </Link>
                                          </div>
                                        </td>
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
                                          <div className='responsive-btn'>
                                            <Link href='/bid/domain'>
                                              <a
                                                href='/domain/bid'
                                                className='btn btn-sm btn-light-dark-gray'
                                              >
                                                <i className='fas fa-handshake mr-2'></i>
                                                Bid
                                              </a>
                                            </Link>
                                            <Link href='#'>
                                              <a
                                                href='#'
                                                className='btn btn-sm btn-light-blue btn-text-sm'
                                              >
                                                <i className='fas fa-sync mr-2'></i>
                                                Redeem
                                              </a>
                                            </Link>
                                            <Link href='/manage/domain'>
                                              <a
                                                href='/manage/domain'
                                                className='btn btn-light-dark-gray btn-text-sm btn-sm'
                                              >
                                                <i className='fas fa-pencil-alt mr-2'></i>
                                                Edit
                                              </a>
                                            </Link>
                                            <Link href='/domain/details'>
                                              <a
                                                href='/domain/details'
                                                className='btn btn-sm btn-light-blue btn-text-sm'
                                              >
                                                <i className='fas fa-search mr-2'></i>
                                                View
                                              </a>
                                            </Link>
                                          </div>
                                        </td>
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
                                          <div className='responsive-btn'>
                                            <Link href='/bid/domain'>
                                              <a
                                                href='/domain/bid'
                                                className='btn btn-sm btn-light-dark-gray'
                                              >
                                                <i className='fas fa-handshake mr-2'></i>
                                                Bid
                                              </a>
                                            </Link>
                                            <Link href='#'>
                                              <a
                                                href='#'
                                                className='btn btn-sm btn-light-blue btn-text-sm'
                                              >
                                                <i className='fas fa-sync mr-2'></i>
                                                Redeem
                                              </a>
                                            </Link>
                                            <Link href='/manage/domain'>
                                              <a
                                                href='/manage/domain'
                                                className='btn btn-light-dark-gray btn-text-sm btn-sm'
                                              >
                                                <i className='fas fa-pencil-alt mr-2'></i>
                                                Edit
                                              </a>
                                            </Link>
                                            <Link href='/domain/details'>
                                              <a
                                                href='/domain/details'
                                                className='btn btn-sm btn-light-blue btn-text-sm'
                                              >
                                                <i className='fas fa-search mr-2'></i>
                                                View
                                              </a>
                                            </Link>
                                          </div>
                                        </td>
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
                                          <div className='responsive-btn'>
                                            <Link href='/bid/domain'>
                                              <a
                                                href='/domain/bid'
                                                className='btn btn-sm btn-light-dark-gray'
                                              >
                                                <i className='fas fa-handshake mr-2'></i>
                                                Bid
                                              </a>
                                            </Link>
                                            <Link href='#'>
                                              <a
                                                href='#'
                                                className='btn btn-sm btn-light-blue btn-text-sm'
                                              >
                                                <i className='fas fa-sync mr-2'></i>
                                                Redeem
                                              </a>
                                            </Link>
                                            <Link href='/manage/domain'>
                                              <a
                                                href='/manage/domain'
                                                className='btn btn-light-dark-gray btn-text-sm btn-sm'
                                              >
                                                <i className='fas fa-pencil-alt mr-2'></i>
                                                Edit
                                              </a>
                                            </Link>
                                            <Link href='/domain/details'>
                                              <a
                                                href='/domain/details'
                                                className='btn btn-sm btn-light-blue btn-text-sm'
                                              >
                                                <i className='fas fa-search mr-2'></i>
                                                View
                                              </a>
                                            </Link>
                                          </div>
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
                      <Tab.Pane eventKey='watchlist'>
                        <div className='row'>
                          <div className='col-lg-12'>
                            <div className='card'>
                              <div className='card-header bg-white'>
                                <p className='mb-0 font-500'>Watchlist TLD</p>
                              </div>
                              <div className='card-body'>
                                <div className='table-responsive'>
                                  <table
                                    style={{ width: "100%" }}
                                    id='watchlist-tld'
                                    className='table table-striped table-hover table-minimal mb-0'
                                  >
                                    <thead>
                                      <tr>
                                        <th scope='col'>TLD Name</th>
                                        <th scope='col'>STATUS</th>
                                        <th scope='col'>HIGHEST BID</th>
                                        <th scope='col'>Action/s</th>
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
                                        <td>
                                          5
                                          <img
                                            src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                            alt='realtydao hns'
                                            className='d-inline-block ml-2 img-activity-hns'
                                          />
                                        </td>
                                        <td>
                                          <div className='responsive-btn'>
                                            <Link href='/bid/domain'>
                                              <a
                                                href='/domain/bid'
                                                className='btn btn-sm btn-light-dark-gray'
                                              >
                                                <i className='fas fa-handshake mr-2'></i>
                                                Bid
                                              </a>
                                            </Link>
                                            <a
                                              onClick={handleRemoveWatchlist}
                                              className='btn btn-sm btn-light-danger'
                                            >
                                              <i className='fas fa-trash mr-2'></i>
                                              Remove
                                            </a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Link href='/domain/details'>
                                            <a>builderconference/</a>
                                          </Link>
                                        </td>
                                        <td>
                                          <span className='label label-light-primary label-inline'>
                                            Open
                                          </span>
                                        </td>
                                        <td>
                                          5
                                          <img
                                            src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                                            alt='realtydao hns'
                                            className='d-inline-block ml-2 img-activity-hns'
                                          />
                                        </td>
                                        <td>
                                          <div className='responsive-btn'>
                                            <Link href='/bid/domain'>
                                              <a
                                                href='/domain/bid'
                                                className='btn btn-sm btn-light-dark-gray'
                                              >
                                                <i className='fas fa-handshake mr-2'></i>
                                                Bid
                                              </a>
                                            </Link>
                                            <a
                                              onClick={handleRemoveWatchlist}
                                              className='btn btn-sm btn-light-danger'
                                            >
                                              <i className='fas fa-trash mr-2'></i>
                                              Remove
                                            </a>
                                          </div>
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
