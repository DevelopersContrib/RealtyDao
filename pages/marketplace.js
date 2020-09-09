import Meta from "../components/seo-meta";
import Navmenu from "../components/nav";
import Footer from "../components/footer";
import {
  Tab,
  Row,
  Col,
  Nav,
  Modal,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Swal from "sweetalert2";

const handlePurchase = () => {
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

const handleClickWatchlist = () => {
  Swal.fire("Success!", "Mobiledev was Added to Watchlist", "success");
};

function PurchaseModal(props) {
  return (
    <Modal
      {...props}
      size=''
      aria-labelledby='purchased-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='purchased-modal-title-vcenter'>
          <span className='svg-icon svg-icon-primary svg-icon-2x mr-2'>
            <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1'>
              <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                <rect x='0' y='0' width='24' height='24' />
                <path
                  d='M20.4061385,6.73606154 C20.7672665,6.89656288 21,7.25468437 21,7.64987309 L21,16.4115967 C21,16.7747638 20.8031081,17.1093844 20.4856429,17.2857539 L12.4856429,21.7301984 C12.1836204,21.8979887 11.8163796,21.8979887 11.5143571,21.7301984 L3.51435707,17.2857539 C3.19689188,17.1093844 3,16.7747638 3,16.4115967 L3,7.64987309 C3,7.25468437 3.23273352,6.89656288 3.59386153,6.73606154 L11.5938615,3.18050598 C11.8524269,3.06558805 12.1475731,3.06558805 12.4061385,3.18050598 L20.4061385,6.73606154 Z'
                  fill='#000000'
                  opacity='0.3'
                />
                <polygon
                  fill='#000000'
                  points='14.9671522 4.22441676 7.5999999 8.31727912 7.5999999 12.9056825 9.5999999 13.9056825 9.5999999 9.49408582 17.25507 5.24126912'
                />
              </g>
            </svg>
          </span>
          Purchase Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='py-4'>
          <h3 className='text-center font-600'>mobiledev</h3>
          <div className='row mt-4 mb-3'>
            <div className='col-lg-6'>
              <p className='font-600'>Purchase TLD Price</p>
            </div>
            <div className='col-lg-6 text-lg-right'>
              <p className='label label-light-primary label-inline font-600'>
                3,000,000.00 HNS
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className='btn btn-light-danger' onClick={props.onHide}>
          <i className='fas fa-times mr-2'></i>
          Close
        </Button>
        <button onClick={handlePurchase} className='btn btn-primary'>
          <i className='fas fa-gift mr-2'></i>
          Purchase
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default function browse() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <React.Fragment>
      <style jsx>{`
        .default-main {
          display: flex;
          min-height: 300px;
        }
        .default-text {
          font-size: 3rem;
          color: #b5b5c3;
        }
      `}</style>
      <PurchaseModal show={modalShow} onHide={() => setModalShow(false)} />
      <Meta title={"Marketplace TLD"} description={""} />
      <Navmenu />
      <div className='section-main marketplace'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 mb-3 '>
              <div className='card'>
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-lg-8 mb-3'>
                      <div className='row'>
                        <div className='col-lg-8'>
                          <p className='mb-1 font-500'>
                            <span className=''>Browse TLD</span>
                            <i className='fas fa-long-arrow-alt-right mx-2'></i>
                            <span className='mr-2 text-muted'>Search:</span>
                            <span className='text-muted'>
                              Keyword or domain name.
                            </span>
                          </p>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='Search...'
                          />
                        </div>
                        <div className='col-lg-4'>
                          <p className='mb-1 font-500'>
                            <span className=''>Filter</span>
                            <i className='fas fa-long-arrow-alt-right mx-2'></i>
                            <span className='mr-2 text-muted'>
                              Sort or Set Price
                            </span>
                          </p>
                          <select className='custom-select'>
                            <option>Default Ordered</option>
                            <option>Sort: a-z</option>
                            <option>Sort: z-a</option>
                            <option>Price: Lowest</option>
                            <option>Price: Highest</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='row'>
                        <div className='col-lg-12'>
                          <p className='mb-1'>&nbsp;</p>
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <button
                            className='btn btn-primary btn-block'
                            type='button'
                          >
                            <i className='fas fa-search mr-2'></i>
                            Search
                          </button>
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <button
                            className='btn btn-light-danger btn-block'
                            type='button'
                          >
                            <i className='fas fa-redo mr-2'></i>
                            Reset
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-12'>
              <Tab.Container
                id='dashboard-tabs-custom'
                defaultActiveKey='marketplace'
              >
                <Row>
                  <Col sm={12}>
                    <Nav
                      variant='tabs'
                      className='navtab-custom-sub nav-justified nav-marketplace'
                    >
                      <Nav.Item>
                        <Nav.Link eventKey='marketplace'>
                          <span className='d-block mb-2'>
                            <span className='svg-icon svg-icon-info svg-icon-2x'>
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
                                    d='M20.4061385,6.73606154 C20.7672665,6.89656288 21,7.25468437 21,7.64987309 L21,16.4115967 C21,16.7747638 20.8031081,17.1093844 20.4856429,17.2857539 L12.4856429,21.7301984 C12.1836204,21.8979887 11.8163796,21.8979887 11.5143571,21.7301984 L3.51435707,17.2857539 C3.19689188,17.1093844 3,16.7747638 3,16.4115967 L3,7.64987309 C3,7.25468437 3.23273352,6.89656288 3.59386153,6.73606154 L11.5938615,3.18050598 C11.8524269,3.06558805 12.1475731,3.06558805 12.4061385,3.18050598 L20.4061385,6.73606154 Z'
                                    fill='#000000'
                                    opacity='0.3'
                                  />
                                  <polygon
                                    fill='#000000'
                                    points='14.9671522 4.22441676 7.5999999 8.31727912 7.5999999 12.9056825 9.5999999 13.9056825 9.5999999 9.49408582 17.25507 5.24126912'
                                  />
                                </g>
                              </svg>
                            </span>
                          </span>
                          <span className='nav-item-title'>Marketplace</span>
                          <span className='nav-item-desc'>Browse TLD</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='opentld'>
                          <span className='mb-2 d-block'>
                            <span className='svg-icon svg-icon-info svg-icon-2x'>
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
                          </span>
                          <span className='nav-item-title'>Open TLD</span>
                          <span className='nav-item-desc'>Bid TLD</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='endingtld'>
                          <span className='mb-2 d-block'>
                            <span className='svg-icon svg-icon-info svg-icon-2x'>
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
                                    d='M12,22 C7.02943725,22 3,17.9705627 3,13 C3,8.02943725 7.02943725,4 12,4 C16.9705627,4 21,8.02943725 21,13 C21,17.9705627 16.9705627,22 12,22 Z'
                                    fill='#000000'
                                    opacity='0.3'
                                  />
                                  <path
                                    d='M11.9630156,7.5 L12.0475062,7.5 C12.3043819,7.5 12.5194647,7.69464724 12.5450248,7.95024814 L13,12.5 L16.2480695,14.3560397 C16.403857,14.4450611 16.5,14.6107328 16.5,14.7901613 L16.5,15 C16.5,15.2109164 16.3290185,15.3818979 16.1181021,15.3818979 C16.0841582,15.3818979 16.0503659,15.3773725 16.0176181,15.3684413 L11.3986612,14.1087258 C11.1672824,14.0456225 11.0132986,13.8271186 11.0316926,13.5879956 L11.4644883,7.96165175 C11.4845267,7.70115317 11.7017474,7.5 11.9630156,7.5 Z'
                                    fill='#000000'
                                  />
                                </g>
                              </svg>
                            </span>
                          </span>
                          <span className='nav-item-title'>Ending Soon</span>
                          <span className='nav-item-desc'>Bid TLD</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='closedtld'>
                          <span className='d-block mb-2'>
                            <span className='svg-icon svg-icon-info svg-icon-2x'>
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
                          </span>
                          <span className='nav-item-title'>Closed</span>
                          <span className='nav-item-desc'>Sold TLD</span>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={12}>
                    <Tab.Content className='tab-content-custom tab-content-minimal'>
                      <Tab.Pane
                        eventKey='marketplace'
                        className='pt-4 px-3 pb-3'
                      >
                        <div className='row'>
                          <div className='col-lg-6'>
                            <div className='card mb-3'>
                              <div className='card-body'>
                                <div className='mb-4'>
                                  <h3 className='m-0'>
                                    <Link href='/domain/details'>
                                      <a
                                        href='/domain/details'
                                        className='link-dotted d-inline-block text-decoration-none'
                                      >
                                        mobiledev/
                                      </a>
                                    </Link>
                                  </h3>
                                </div>
                              </div>
                              <div className='card-footer d-flex align-items-center bg-white'>
                                <div className='d-flex'>
                                  <div className='d-flex align-items-center mr-4'>
                                    <p className='mb-1 mr-2 font-600 d-inline-block'>
                                      Price
                                    </p>
                                    <div className='d-inline-block mb-1'>
                                      <div className='badge-light badge-primary-light'>
                                        1,950,000.00 HNS
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='ml-auto'>
                                  <div className='d-flex justify-content-end'>
                                    <button
                                      onClick={handleClickWatchlist}
                                      className='btn btn-light-blue btn-sm'
                                    >
                                      <i className='fas fa-plus mr-2'></i>
                                      Watchlist
                                    </button>
                                    <a
                                      className='btn btn-light-dark-gray btn-sm'
                                      onClick={() => setModalShow(true)}
                                    >
                                      <i className='fas fa-shopping-cart mr-2'></i>
                                      Purchase
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='card mb-3'>
                              <div className='card-body'>
                                <div className='mb-4'>
                                  <h3 className='m-0'>
                                    <Link href='/domain/details'>
                                      <a
                                        href='/domain/details'
                                        className='link-dotted d-inline-block text-decoration-none'
                                      >
                                        facebook/
                                      </a>
                                    </Link>
                                  </h3>
                                </div>
                              </div>
                              <div className='card-footer d-flex align-items-center bg-white'>
                                <div className='d-flex'>
                                  <div className='d-flex align-items-center mr-4'>
                                    <p className='mb-1 mr-2 font-600 d-inline-block'>
                                      Price
                                    </p>
                                    <div className='d-inline-block mb-1'>
                                      <div className='badge-light badge-primary-light'>
                                        1,950,000.00 HNS
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='ml-auto'>
                                  <div className='d-flex justify-content-end'>
                                    <button
                                      onClick={handleClickWatchlist}
                                      className='btn btn-light-blue btn-sm'
                                    >
                                      <i className='fas fa-plus mr-2'></i>
                                      Watchlist
                                    </button>
                                    <a
                                      className='btn btn-light-dark-gray btn-sm'
                                      onClick={() => setModalShow(true)}
                                    >
                                      <i className='fas fa-shopping-cart mr-2'></i>
                                      Purchase
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='card mb-3'>
                              <div className='card-body'>
                                <div className='mb-4'>
                                  <h3 className='m-0'>
                                    <Link href='/domain/details'>
                                      <a
                                        href='/domain/details'
                                        className='link-dotted d-inline-block text-decoration-none'
                                      >
                                        pornhub/
                                      </a>
                                    </Link>
                                  </h3>
                                </div>
                              </div>
                              <div className='card-footer d-flex align-items-center bg-white'>
                                <div className='d-flex'>
                                  <div className='d-flex align-items-center mr-4'>
                                    <p className='mb-1 mr-2 font-600 d-inline-block'>
                                      Price
                                    </p>
                                    <div className='d-inline-block mb-1'>
                                      <div className='badge-light badge-primary-light'>
                                        1,950,000.00 HNS
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='ml-auto'>
                                  <div className='d-flex justify-content-end'>
                                    <button
                                      onClick={handleClickWatchlist}
                                      className='btn btn-light-blue btn-sm'
                                    >
                                      <i className='fas fa-plus mr-2'></i>
                                      Watchlist
                                    </button>
                                    <a
                                      className='btn btn-light-dark-gray btn-sm'
                                      onClick={() => setModalShow(true)}
                                    >
                                      <i className='fas fa-shopping-cart mr-2'></i>
                                      Purchase
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='card mb-3'>
                              <div className='card-body'>
                                <div className='mb-4'>
                                  <h3 className='m-0'>
                                    <Link href='/domain/details'>
                                      <a
                                        href='/domain/details'
                                        className='link-dotted d-inline-block text-decoration-none'
                                      >
                                        globalventures/
                                      </a>
                                    </Link>
                                  </h3>
                                </div>
                              </div>
                              <div className='card-footer d-flex align-items-center bg-white'>
                                <div className='d-flex'>
                                  <div className='d-flex align-items-center mr-4'>
                                    <p className='mb-1 mr-2 font-600 d-inline-block'>
                                      Price
                                    </p>
                                    <div className='d-inline-block mb-1'>
                                      <div className='badge-light badge-primary-light'>
                                        1,950,000.00 HNS
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='ml-auto'>
                                  <div className='d-flex justify-content-end'>
                                    <button
                                      onClick={handleClickWatchlist}
                                      className='btn btn-light-blue btn-sm'
                                    >
                                      <i className='fas fa-plus mr-2'></i>
                                      Watchlist
                                    </button>
                                    <a
                                      className='btn btn-light-dark-gray btn-sm'
                                      onClick={() => setModalShow(true)}
                                    >
                                      <i className='fas fa-shopping-cart mr-2'></i>
                                      Purchase
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='card mb-3'>
                              <div className='card-body'>
                                <div className='mb-4'>
                                  <h3 className='m-0'>
                                    <Link href='/domain/details'>
                                      <a
                                        href='/domain/details'
                                        className='link-dotted d-inline-block text-decoration-none'
                                      >
                                        handyman/
                                      </a>
                                    </Link>
                                  </h3>
                                </div>
                              </div>
                              <div className='card-footer d-flex align-items-center bg-white'>
                                <div className='d-flex'>
                                  <div className='d-flex align-items-center mr-4'>
                                    <p className='mb-1 mr-2 font-600 d-inline-block'>
                                      Price
                                    </p>
                                    <div className='d-inline-block mb-1'>
                                      <div className='badge-light badge-primary-light'>
                                        1,950,000.00 HNS
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='ml-auto'>
                                  <div className='d-flex justify-content-end'>
                                    <button
                                      onClick={handleClickWatchlist}
                                      className='btn btn-light-blue btn-sm'
                                    >
                                      <i className='fas fa-plus mr-2'></i>
                                      Watchlist
                                    </button>
                                    <a
                                      className='btn btn-light-dark-gray btn-sm'
                                      onClick={() => setModalShow(true)}
                                    >
                                      <i className='fas fa-shopping-cart mr-2'></i>
                                      Purchase
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='card mb-3'>
                              <div className='card-body'>
                                <div className='mb-4'>
                                  <h3 className='m-0'>
                                    <Link href='/domain/details'>
                                      <a
                                        href='/domain/details'
                                        className='link-dotted d-inline-block text-decoration-none'
                                      >
                                        autograph/
                                      </a>
                                    </Link>
                                  </h3>
                                </div>
                              </div>
                              <div className='card-footer d-flex align-items-center bg-white'>
                                <div className='d-flex'>
                                  <div className='d-flex align-items-center mr-4'>
                                    <p className='mb-1 mr-2 font-600 d-inline-block'>
                                      Price
                                    </p>
                                    <div className='d-inline-block mb-1'>
                                      <div className='badge-light badge-primary-light'>
                                        1,950,000.00 HNS
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='ml-auto'>
                                  <div className='d-flex justify-content-end'>
                                    <button
                                      onClick={handleClickWatchlist}
                                      className='btn btn-light-blue btn-sm'
                                    >
                                      <i className='fas fa-plus mr-2'></i>
                                      Watchlist
                                    </button>
                                    <a
                                      className='btn btn-light-dark-gray btn-sm'
                                      onClick={() => setModalShow(true)}
                                    >
                                      <i className='fas fa-shopping-cart mr-2'></i>
                                      Purchase
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-lg-12 mt-3'>
                            <nav>
                              <ul className='pagination justify-content-center mb-0'>
                                <li className='page-item disabled'>
                                  <a className='page-link' href='#'>
                                    <i className='fas fa-chevron-left'></i>
                                  </a>
                                </li>
                                <li className='page-item'>
                                  <a className='page-link' href='#'>
                                    1
                                  </a>
                                </li>
                                <li className='page-item active'>
                                  <a className='page-link' href='#'>
                                    2 <span className='sr-only'>(current)</span>
                                  </a>
                                </li>
                                <li className='page-item'>
                                  <a className='page-link' href='#'>
                                    3
                                  </a>
                                </li>
                                <li className='page-item'>
                                  <a className='page-link' href='#'>
                                    <i className='fas fa-chevron-right'></i>
                                  </a>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                        {/* Start:: Default Text */}
                        <div className='row d-none'>
                          <div className='col-lg-12'>
                            <div className='default-main justify-content-center align-items-center'>
                              <span className='svg-icon svg-icon-default svg-icon-4x mr-3'>
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
                                      d='M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z'
                                      fill='#000000'
                                      fillRule='nonzero'
                                      opacity='0.3'
                                    />
                                    <path
                                      d='M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z'
                                      fill='#000000'
                                      fillRule='nonzero'
                                    />
                                  </g>
                                </svg>
                              </span>
                              <span className='default-text'>
                                No Result Found
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* End */}
                      </Tab.Pane>
                      <Tab.Pane eventKey='opentld' className='pt-4 px-3 pb-3'>
                        <div className=''>
                          <div className='row'>
                            <div className='col-lg-6'>
                              <div className='card mb-3'>
                                <div className='card-body'>
                                  <div className='mb-4'>
                                    <h3 className='m-0'>
                                      <Link href='/domain/details'>
                                        <a
                                          href='/domain/details'
                                          className='link-dotted d-inline-block text-decoration-none'
                                        >
                                          mobiledev/
                                        </a>
                                      </Link>
                                    </h3>
                                  </div>
                                  <div className='row'>
                                    <div className='col-lg-6'>
                                      <p className='mr-2 mb-1 font-600'>
                                        Reveal Period
                                      </p>
                                      <div className='d-block mb-1'>
                                        <div className='badge-light badge-dark-light'>
                                          Ends: 2 days 21 hrs 59 mins
                                        </div>
                                      </div>
                                    </div>
                                    <div className='col-lg-6'>
                                      <p className='mr-2 mb-1 font-600'>
                                        Status
                                      </p>
                                      <div className='d-block mb-1'>
                                        <div className='badge-light badge-primary-light text-uppercase'>
                                          Open
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='card-footer d-flex align-items-center bg-white'>
                                  <div className='d-flex'>
                                    <div className='d-flex align-items-center mr-4'>
                                      <div className='d-flex mr-4'>
                                        <span className=''>Total Bids:</span>
                                        <span className='font-700 ml-2'>6</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='ml-auto'>
                                    <div className='d-flex justify-content-end'>
                                      <button
                                        onClick={handleClickWatchlist}
                                        className='btn btn-light-blue btn-sm'
                                      >
                                        <i className='fas fa-plus mr-2'></i>
                                        Watchlist
                                      </button>
                                      <Link href='/bid/domain'>
                                        <a
                                          href='/bid/domain'
                                          className='btn btn-light-danger btn-sm'
                                        >
                                          <i className='fas fa-handshake mr-2'></i>
                                          Bid
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='card mb-3'>
                                <div className='card-body'>
                                  <div className='mb-4'>
                                    <h3 className='m-0'>
                                      <Link href='/domain/details'>
                                        <a
                                          href='/domain/details'
                                          className='link-dotted d-inline-block text-decoration-none'
                                        >
                                          photostream/
                                        </a>
                                      </Link>
                                    </h3>
                                  </div>
                                  <div className='row'>
                                    <div className='col-lg-6'>
                                      <p className='mr-2 mb-1 font-600'>
                                        Reveal Period
                                      </p>
                                      <div className='d-block mb-1'>
                                        <div className='badge-light badge-dark-light'>
                                          Ends: 2 days 21 hrs 59 mins
                                        </div>
                                      </div>
                                    </div>
                                    <div className='col-lg-6'>
                                      <p className='mr-2 mb-1 font-600'>
                                        Status
                                      </p>
                                      <div className='d-block mb-1'>
                                        <div className='badge-light badge-primary-light text-uppercase'>
                                          Open
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='card-footer d-flex align-items-center bg-white'>
                                  <div className='d-flex'>
                                    <div className='d-flex align-items-center mr-4'>
                                      <div className='d-flex mr-4'>
                                        <span className=''>Total Bids:</span>
                                        <span className='font-700 ml-2'>6</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='ml-auto'>
                                    <div className='d-flex justify-content-end'>
                                      <button
                                        onClick={handleClickWatchlist}
                                        className='btn btn-light-blue btn-sm'
                                      >
                                        <i className='fas fa-plus mr-2'></i>
                                        Watchlist
                                      </button>
                                      <Link href='/bid/domain'>
                                        <a
                                          href='/bid/domain'
                                          className='btn btn-light-danger btn-sm'
                                        >
                                          <i className='fas fa-handshake mr-2'></i>
                                          Bid
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='card mb-3'>
                                <div className='card-body'>
                                  <div className='mb-4'>
                                    <h3 className='m-0'>
                                      <Link href='/domain/details'>
                                        <a
                                          href='/domain/details'
                                          className='link-dotted d-inline-block text-decoration-none'
                                        >
                                          globalventures/
                                        </a>
                                      </Link>
                                    </h3>
                                  </div>
                                  <div className='row'>
                                    <div className='col-lg-6'>
                                      <p className='mr-2 mb-1 font-600'>
                                        Reveal Period
                                      </p>
                                      <div className='d-block mb-1'>
                                        <div className='badge-light badge-dark-light'>
                                          Ends: 2 days 21 hrs 59 mins
                                        </div>
                                      </div>
                                    </div>
                                    <div className='col-lg-6'>
                                      <p className='mr-2 mb-1 font-600'>
                                        Status
                                      </p>
                                      <div className='d-block mb-1'>
                                        <div className='badge-light badge-primary-light text-uppercase'>
                                          Open
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='card-footer d-flex align-items-center bg-white'>
                                  <div className='d-flex'>
                                    <div className='d-flex align-items-center mr-4'>
                                      <div className='d-flex mr-4'>
                                        <span className=''>Total Bids:</span>
                                        <span className='font-700 ml-2'>6</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='ml-auto'>
                                    <div className='d-flex justify-content-end'>
                                      <button
                                        onClick={handleClickWatchlist}
                                        className='btn btn-light-blue btn-sm'
                                      >
                                        <i className='fas fa-plus mr-2'></i>
                                        Watchlist
                                      </button>
                                      <Link href='/bid/domain'>
                                        <a
                                          href='/bid/domain'
                                          className='btn btn-light-danger btn-sm'
                                        >
                                          <i className='fas fa-handshake mr-2'></i>
                                          Bid
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='card mb-3'>
                                <div className='card-body'>
                                  <div className='mb-4'>
                                    <h3 className='m-0'>
                                      <Link href='/domain/details'>
                                        <a
                                          href='/domain/details'
                                          className='link-dotted d-inline-block text-decoration-none'
                                        >
                                          handyman/
                                        </a>
                                      </Link>
                                    </h3>
                                  </div>
                                  <div className='row'>
                                    <div className='col-lg-6'>
                                      <p className='mr-2 mb-1 font-600'>
                                        Reveal Period
                                      </p>
                                      <div className='d-block mb-1'>
                                        <div className='badge-light badge-dark-light'>
                                          Ends: 2 days 21 hrs 59 mins
                                        </div>
                                      </div>
                                    </div>
                                    <div className='col-lg-6'>
                                      <p className='mr-2 mb-1 font-600'>
                                        Status
                                      </p>
                                      <div className='d-block mb-1'>
                                        <div className='badge-light badge-primary-light text-uppercase'>
                                          Open
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='card-footer d-flex align-items-center bg-white'>
                                  <div className='d-flex'>
                                    <div className='d-flex align-items-center mr-4'>
                                      <div className='d-flex mr-4'>
                                        <span className=''>Total Bids:</span>
                                        <span className='font-700 ml-2'>6</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='ml-auto'>
                                    <div className='d-flex justify-content-end'>
                                      <button
                                        onClick={handleClickWatchlist}
                                        className='btn btn-light-blue btn-sm'
                                      >
                                        <i className='fas fa-plus mr-2'></i>
                                        Watchlist
                                      </button>
                                      <Link href='/bid/domain'>
                                        <a
                                          href='/bid/domain'
                                          className='btn btn-light-danger btn-sm'
                                        >
                                          <i className='fas fa-handshake mr-2'></i>
                                          Bid
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='card mb-3'>
                                <div className='card-body'>
                                  <div className='mb-4'>
                                    <h3 className='m-0'>
                                      <Link href='/domain/details'>
                                        <a
                                          href='/domain/details'
                                          className='link-dotted d-inline-block text-decoration-none'
                                        >
                                          google/
                                        </a>
                                      </Link>
                                    </h3>
                                  </div>
                                  <div className='row'>
                                    <div className='col-lg-6'>
                                      <p className='mr-2 mb-1 font-600'>
                                        Reveal Period
                                      </p>
                                      <div className='d-block mb-1'>
                                        <div className='badge-light badge-dark-light'>
                                          Ends: 2 days 21 hrs 59 mins
                                        </div>
                                      </div>
                                    </div>
                                    <div className='col-lg-6'>
                                      <p className='mr-2 mb-1 font-600'>
                                        Status
                                      </p>
                                      <div className='d-block mb-1'>
                                        <div className='badge-light badge-primary-light text-uppercase'>
                                          Open
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='card-footer d-flex align-items-center bg-white'>
                                  <div className='d-flex'>
                                    <div className='d-flex align-items-center mr-4'>
                                      <div className='d-flex mr-4'>
                                        <span className=''>Total Bids:</span>
                                        <span className='font-700 ml-2'>6</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='ml-auto'>
                                    <div className='d-flex justify-content-end'>
                                      <button
                                        onClick={handleClickWatchlist}
                                        className='btn btn-light-blue btn-sm'
                                      >
                                        <i className='fas fa-plus mr-2'></i>
                                        Watchlist
                                      </button>
                                      <Link href='/bid/domain'>
                                        <a
                                          href='/bid/domain'
                                          className='btn btn-light-danger btn-sm'
                                        >
                                          <i className='fas fa-handshake mr-2'></i>
                                          Bid
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='card mb-3'>
                                <div className='card-body'>
                                  <div className='mb-4'>
                                    <h3 className='m-0'>
                                      <Link href='/domain/details'>
                                        <a
                                          href='/domain/details'
                                          className='link-dotted d-inline-block text-decoration-none'
                                        >
                                          facebook/
                                        </a>
                                      </Link>
                                    </h3>
                                  </div>
                                  <div className='row'>
                                    <div className='col-lg-6'>
                                      <p className='mr-2 mb-1 font-600'>
                                        Reveal Period
                                      </p>
                                      <div className='d-block mb-1'>
                                        <div className='badge-light badge-dark-light'>
                                          Ends: 2 days 21 hrs 59 mins
                                        </div>
                                      </div>
                                    </div>
                                    <div className='col-lg-6'>
                                      <p className='mr-2 mb-1 font-600'>
                                        Status
                                      </p>
                                      <div className='d-block mb-1'>
                                        <div className='badge-light badge-primary-light text-uppercase'>
                                          Open
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='card-footer d-flex align-items-center bg-white'>
                                  <div className='d-flex'>
                                    <div className='d-flex align-items-center mr-4'>
                                      <div className='d-flex mr-4'>
                                        <span className=''>Total Bids:</span>
                                        <span className='font-700 ml-2'>6</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='ml-auto'>
                                    <div className='d-flex justify-content-end'>
                                      <button
                                        onClick={handleClickWatchlist}
                                        className='btn btn-light-blue btn-sm'
                                      >
                                        <i className='fas fa-plus mr-2'></i>
                                        Watchlist
                                      </button>
                                      <Link href='/bid/domain'>
                                        <a
                                          href='/bid/domain'
                                          className='btn btn-light-danger btn-sm'
                                        >
                                          <i className='fas fa-handshake mr-2'></i>
                                          Bid
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-lg-12 mt-3'>
                              <nav>
                                <ul className='pagination justify-content-center mb-0'>
                                  <li className='page-item disabled'>
                                    <a className='page-link' href='#'>
                                      <i className='fas fa-chevron-left'></i>
                                    </a>
                                  </li>
                                  <li className='page-item'>
                                    <a className='page-link' href='#'>
                                      1
                                    </a>
                                  </li>
                                  <li className='page-item active'>
                                    <a className='page-link' href='#'>
                                      2{" "}
                                      <span className='sr-only'>(current)</span>
                                    </a>
                                  </li>
                                  <li className='page-item'>
                                    <a className='page-link' href='#'>
                                      3
                                    </a>
                                  </li>
                                  <li className='page-item'>
                                    <a className='page-link' href='#'>
                                      <i className='fas fa-chevron-right'></i>
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                            </div>
                          </div>
                        </div>
                        <div className='row d-none'>
                          {/* Start :: Default Text */}
                          <div className='col-lg-12'>
                            <div className='default-main justify-content-center align-items-center'>
                              <span className='svg-icon svg-icon-default svg-icon-4x mr-3'>
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
                                      d='M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z'
                                      fill='#000000'
                                      fillRule='nonzero'
                                      opacity='0.3'
                                    />
                                    <path
                                      d='M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z'
                                      fill='#000000'
                                      fillRule='nonzero'
                                    />
                                  </g>
                                </svg>
                              </span>
                              <span className='default-text'>
                                No Result Found
                              </span>
                            </div>
                          </div>
                          {/* End */}
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey='endingtld' className='pt-4 px-3 pb-3'>
                        <div className=''>
                          <div className='row'>
                            <div className='col-lg-6'>
                              <div className='card mb-3'>
                                <div className='card-body'>
                                  <div className='mb-4'>
                                    <h3 className='m-0'>
                                      <Link href='/domain/details'>
                                        <a
                                          href='/domain/details'
                                          className='link-dotted d-inline-block text-decoration-none'
                                        >
                                          mobiledev/
                                        </a>
                                      </Link>
                                    </h3>
                                  </div>
                                  <div className='row'>
                                    <div className='col-lg-6'>
                                      <p className='mr-2 mb-1 font-600'>
                                        Reveal Period
                                      </p>
                                      <div className='d-block mb-1'>
                                        <div className='badge-light badge-dark-light'>
                                          Ends: 2 days 21 hrs 59 mins
                                        </div>
                                      </div>
                                    </div>
                                    <div className='col-lg-6'>
                                      <p className='mr-2 mb-1 font-600'>
                                        Status
                                      </p>
                                      <div className='d-block mb-1'>
                                        <div className='badge-light badge-primary-light text-uppercase'>
                                          Open
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='card-footer d-flex align-items-center bg-white'>
                                  <div className='d-flex'>
                                    <div className='d-flex align-items-center mr-4'>
                                      <div className='d-flex mr-4'>
                                        <span className=''>Total Bids:</span>
                                        <span className='font-700 ml-2'>6</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='ml-auto'>
                                    <div className='d-flex justify-content-end'>
                                      <button
                                        onClick={handleClickWatchlist}
                                        className='btn btn-light-blue btn-sm'
                                      >
                                        <i className='fas fa-plus mr-2'></i>
                                        Watchlist
                                      </button>
                                      <Link href='/bid/domain'>
                                        <a
                                          href='/bid/domain'
                                          className='btn btn-light-danger btn-sm'
                                        >
                                          <i className='fas fa-handshake mr-2'></i>
                                          Bid
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='card mb-3'>
                                <div className='card-body'>
                                  <div className='mb-4'>
                                    <h3 className='m-0'>
                                      <Link href='/domain/details'>
                                        <a
                                          href='/domain/details'
                                          className='link-dotted d-inline-block text-decoration-none'
                                        >
                                          photostream/
                                        </a>
                                      </Link>
                                    </h3>
                                  </div>
                                  <div className='row'>
                                    <div className='col-lg-6'>
                                      <p className='mr-2 mb-1 font-600'>
                                        Reveal Period
                                      </p>
                                      <div className='d-block mb-1'>
                                        <div className='badge-light badge-dark-light'>
                                          Ends: 2 days 21 hrs 59 mins
                                        </div>
                                      </div>
                                    </div>
                                    <div className='col-lg-6'>
                                      <p className='mr-2 mb-1 font-600'>
                                        Status
                                      </p>
                                      <div className='d-block mb-1'>
                                        <div className='badge-light badge-primary-light text-uppercase'>
                                          Open
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='card-footer d-flex align-items-center bg-white'>
                                  <div className='d-flex'>
                                    <div className='d-flex align-items-center mr-4'>
                                      <div className='d-flex mr-4'>
                                        <span className=''>Total Bids:</span>
                                        <span className='font-700 ml-2'>6</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='ml-auto'>
                                    <div className='d-flex justify-content-end'>
                                      <button
                                        onClick={handleClickWatchlist}
                                        className='btn btn-light-blue btn-sm'
                                      >
                                        <i className='fas fa-plus mr-2'></i>
                                        Watchlist
                                      </button>
                                      <Link href='/bid/domain'>
                                        <a
                                          href='/bid/domain'
                                          className='btn btn-light-danger btn-sm'
                                        >
                                          <i className='fas fa-handshake mr-2'></i>
                                          Bid
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='card mb-3'>
                                <div className='card-body'>
                                  <div className='mb-4'>
                                    <h3 className='m-0'>
                                      <Link href='/domain/details'>
                                        <a
                                          href='/domain/details'
                                          className='link-dotted d-inline-block text-decoration-none'
                                        >
                                          globalventures/
                                        </a>
                                      </Link>
                                    </h3>
                                  </div>
                                  <div className='row'>
                                    <div className='col-lg-6'>
                                      <p className='mr-2 mb-1 font-600'>
                                        Reveal Period
                                      </p>
                                      <div className='d-block mb-1'>
                                        <div className='badge-light badge-dark-light'>
                                          Ends: 2 days 21 hrs 59 mins
                                        </div>
                                      </div>
                                    </div>
                                    <div className='col-lg-6'>
                                      <p className='mr-2 mb-1 font-600'>
                                        Status
                                      </p>
                                      <div className='d-block mb-1'>
                                        <div className='badge-light badge-primary-light text-uppercase'>
                                          Open
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='card-footer d-flex align-items-center bg-white'>
                                  <div className='d-flex'>
                                    <div className='d-flex align-items-center mr-4'>
                                      <div className='d-flex mr-4'>
                                        <span className=''>Total Bids:</span>
                                        <span className='font-700 ml-2'>6</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='ml-auto'>
                                    <div className='d-flex justify-content-end'>
                                      <button
                                        onClick={handleClickWatchlist}
                                        className='btn btn-light-blue btn-sm'
                                      >
                                        <i className='fas fa-plus mr-2'></i>
                                        Watchlist
                                      </button>
                                      <Link href='/bid/domain'>
                                        <a
                                          href='/bid/domain'
                                          className='btn btn-light-danger btn-sm'
                                        >
                                          <i className='fas fa-handshake mr-2'></i>
                                          Bid
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='card mb-3'>
                                <div className='card-body'>
                                  <div className='mb-4'>
                                    <h3 className='m-0'>
                                      <Link href='/domain/details'>
                                        <a
                                          href='/domain/details'
                                          className='link-dotted d-inline-block text-decoration-none'
                                        >
                                          handyman/
                                        </a>
                                      </Link>
                                    </h3>
                                  </div>
                                  <div className='row'>
                                    <div className='col-lg-6'>
                                      <p className='mr-2 mb-1 font-600'>
                                        Reveal Period
                                      </p>
                                      <div className='d-block mb-1'>
                                        <div className='badge-light badge-dark-light'>
                                          Ends: 2 days 21 hrs 59 mins
                                        </div>
                                      </div>
                                    </div>
                                    <div className='col-lg-6'>
                                      <p className='mr-2 mb-1 font-600'>
                                        Status
                                      </p>
                                      <div className='d-block mb-1'>
                                        <div className='badge-light badge-primary-light text-uppercase'>
                                          Open
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='card-footer d-flex align-items-center bg-white'>
                                  <div className='d-flex'>
                                    <div className='d-flex align-items-center mr-4'>
                                      <div className='d-flex mr-4'>
                                        <span className=''>Total Bids:</span>
                                        <span className='font-700 ml-2'>6</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='ml-auto'>
                                    <div className='d-flex justify-content-end'>
                                      <button
                                        onClick={handleClickWatchlist}
                                        className='btn btn-light-blue btn-sm'
                                      >
                                        <i className='fas fa-plus mr-2'></i>
                                        Watchlist
                                      </button>
                                      <Link href='/bid/domain'>
                                        <a
                                          href='/bid/domain'
                                          className='btn btn-light-danger btn-sm'
                                        >
                                          <i className='fas fa-handshake mr-2'></i>
                                          Bid
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='card mb-3'>
                                <div className='card-body'>
                                  <div className='mb-4'>
                                    <h3 className='m-0'>
                                      <Link href='/domain/details'>
                                        <a
                                          href='/domain/details'
                                          className='link-dotted d-inline-block text-decoration-none'
                                        >
                                          google/
                                        </a>
                                      </Link>
                                    </h3>
                                  </div>
                                  <div className='row'>
                                    <div className='col-lg-6'>
                                      <p className='mr-2 mb-1 font-600'>
                                        Reveal Period
                                      </p>
                                      <div className='d-block mb-1'>
                                        <div className='badge-light badge-dark-light'>
                                          Ends: 2 days 21 hrs 59 mins
                                        </div>
                                      </div>
                                    </div>
                                    <div className='col-lg-6'>
                                      <p className='mr-2 mb-1 font-600'>
                                        Status
                                      </p>
                                      <div className='d-block mb-1'>
                                        <div className='badge-light badge-primary-light text-uppercase'>
                                          Open
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='card-footer d-flex align-items-center bg-white'>
                                  <div className='d-flex'>
                                    <div className='d-flex align-items-center mr-4'>
                                      <div className='d-flex mr-4'>
                                        <span className=''>Total Bids:</span>
                                        <span className='font-700 ml-2'>6</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='ml-auto'>
                                    <div className='d-flex justify-content-end'>
                                      <button
                                        onClick={handleClickWatchlist}
                                        className='btn btn-light-blue btn-sm'
                                      >
                                        <i className='fas fa-plus mr-2'></i>
                                        Watchlist
                                      </button>
                                      <Link href='/bid/domain'>
                                        <a
                                          href='/bid/domain'
                                          className='btn btn-light-danger btn-sm'
                                        >
                                          <i className='fas fa-handshake mr-2'></i>
                                          Bid
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='card mb-3'>
                                <div className='card-body'>
                                  <div className='mb-4'>
                                    <h3 className='m-0'>
                                      <Link href='/domain/details'>
                                        <a
                                          href='/domain/details'
                                          className='link-dotted d-inline-block text-decoration-none'
                                        >
                                          facebook/
                                        </a>
                                      </Link>
                                    </h3>
                                  </div>
                                  <div className='row'>
                                    <div className='col-lg-6'>
                                      <p className='mr-2 mb-1 font-600'>
                                        Reveal Period
                                      </p>
                                      <div className='d-block mb-1'>
                                        <div className='badge-light badge-dark-light'>
                                          Ends: 2 days 21 hrs 59 mins
                                        </div>
                                      </div>
                                    </div>
                                    <div className='col-lg-6'>
                                      <p className='mr-2 mb-1 font-600'>
                                        Status
                                      </p>
                                      <div className='d-block mb-1'>
                                        <div className='badge-light badge-primary-light text-uppercase'>
                                          Open
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='card-footer d-flex align-items-center bg-white'>
                                  <div className='d-flex'>
                                    <div className='d-flex align-items-center mr-4'>
                                      <div className='d-flex mr-4'>
                                        <span className=''>Total Bids:</span>
                                        <span className='font-700 ml-2'>6</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='ml-auto'>
                                    <div className='d-flex justify-content-end'>
                                      <button
                                        onClick={handleClickWatchlist}
                                        className='btn btn-light-blue btn-sm'
                                      >
                                        <i className='fas fa-plus mr-2'></i>
                                        Watchlist
                                      </button>
                                      <Link href='/bid/domain'>
                                        <a
                                          href='/bid/domain'
                                          className='btn btn-light-danger btn-sm'
                                        >
                                          <i className='fas fa-handshake mr-2'></i>
                                          Bid
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-lg-12 mt-3'>
                              <nav>
                                <ul className='pagination justify-content-center mb-0'>
                                  <li className='page-item disabled'>
                                    <a className='page-link' href='#'>
                                      <i className='fas fa-chevron-left'></i>
                                    </a>
                                  </li>
                                  <li className='page-item'>
                                    <a className='page-link' href='#'>
                                      1
                                    </a>
                                  </li>
                                  <li className='page-item active'>
                                    <a className='page-link' href='#'>
                                      2
                                      <span className='sr-only'>(current)</span>
                                    </a>
                                  </li>
                                  <li className='page-item'>
                                    <a className='page-link' href='#'>
                                      3
                                    </a>
                                  </li>
                                  <li className='page-item'>
                                    <a className='page-link' href='#'>
                                      <i className='fas fa-chevron-right'></i>
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                            </div>
                          </div>
                        </div>
                        <div className='row d-none'>
                          {/* Start :: Default Text */}
                          <div className='col-lg-12'>
                            <div className='default-main justify-content-center align-items-center'>
                              <span className='svg-icon svg-icon-default svg-icon-4x mr-3'>
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
                                      d='M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z'
                                      fill='#000000'
                                      fillRule='nonzero'
                                      opacity='0.3'
                                    />
                                    <path
                                      d='M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z'
                                      fill='#000000'
                                      fillRule='nonzero'
                                    />
                                  </g>
                                </svg>
                              </span>
                              <span className='default-text'>
                                Search Result
                              </span>
                            </div>
                          </div>
                          {/* End */}
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey='closedtld' className='pt-4 px-3 pb-3'>
                        <div className=''>
                          <div className='row'>
                            <div className='col-lg-6'>
                              <div className='card mb-3'>
                                <div className='card-body'>
                                  <div className='mb-4'>
                                    <h3 className='m-0'>
                                      <Link href='/domain/details'>
                                        <a
                                          href='/domain/details'
                                          className='link-dotted d-inline-block text-decoration-none'
                                        >
                                          mobiledev/
                                        </a>
                                      </Link>
                                    </h3>
                                  </div>
                                  <div className='mb-0'>
                                    <p className='mr-2 mb-0 font-500 d-block text-muted-light'>
                                      This TLD is closed
                                    </p>
                                    <div className='mb-1'>
                                      <div className='progress'>
                                        <div
                                          className='progress-bar'
                                          role='progressbar'
                                          style={{ width: "0%" }}
                                          aria-valuenow='50'
                                          aria-valuemin='0'
                                          aria-valuemax='100'
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='card-footer d-flex align-items-center bg-white'>
                                  <div className='d-flex'>
                                    <div className='d-flex align-items-center mr-4'>
                                      <div className='d-flex mr-4 align-items-center'>
                                        <span className='mr-2'>Date Sold:</span>
                                        <span className='badge-light badge-primary-light'>
                                          01 Sep 2020
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='ml-auto'>
                                    <div className='d-flex justify-content-end'>
                                      <div className='badge-light badge-dark-light'>
                                        Status:
                                        <span className='text-uppercase'>
                                          Closed
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='card mb-3'>
                                <div className='card-body'>
                                  <div className='mb-4'>
                                    <h3 className='m-0'>
                                      <Link href='/domain/details'>
                                        <a
                                          href='/domain/details'
                                          className='link-dotted d-inline-block text-decoration-none'
                                        >
                                          projectstream/
                                        </a>
                                      </Link>
                                    </h3>
                                  </div>
                                  <div className='mb-0'>
                                    <p className='mr-2 mb-0 font-500 d-block text-muted-light'>
                                      This TLD is closed
                                    </p>
                                    <div className='mb-1'>
                                      <div className='progress'>
                                        <div
                                          className='progress-bar'
                                          role='progressbar'
                                          style={{ width: "0%" }}
                                          aria-valuenow='50'
                                          aria-valuemin='0'
                                          aria-valuemax='100'
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='card-footer d-flex align-items-center bg-white'>
                                  <div className='d-flex'>
                                    <div className='d-flex align-items-center mr-4'>
                                      <div className='d-flex mr-4 align-items-center'>
                                        <span className='mr-2'>Date Sold:</span>
                                        <span className='badge-light badge-primary-light'>
                                          01 Sep 2020
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='ml-auto'>
                                    <div className='d-flex justify-content-end'>
                                      <div className='badge-light badge-dark-light'>
                                        Status:
                                        <span className='text-uppercase'>
                                          Closed
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='card mb-3'>
                                <div className='card-body'>
                                  <div className='mb-4'>
                                    <h3 className='m-0'>
                                      <Link href='/domain/details'>
                                        <a
                                          href='/domain/details'
                                          className='link-dotted d-inline-block text-decoration-none'
                                        >
                                          photostream/
                                        </a>
                                      </Link>
                                    </h3>
                                  </div>
                                  <div className='mb-0'>
                                    <p className='mr-2 mb-0 font-500 d-block text-muted-light'>
                                      This TLD is closed
                                    </p>
                                    <div className='mb-1'>
                                      <div className='progress'>
                                        <div
                                          className='progress-bar'
                                          role='progressbar'
                                          style={{ width: "0%" }}
                                          aria-valuenow='50'
                                          aria-valuemin='0'
                                          aria-valuemax='100'
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='card-footer d-flex align-items-center bg-white'>
                                  <div className='d-flex'>
                                    <div className='d-flex align-items-center mr-4'>
                                      <div className='d-flex mr-4 align-items-center'>
                                        <span className='mr-2'>Date Sold:</span>
                                        <span className='badge-light badge-primary-light'>
                                          01 Sep 2020
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='ml-auto'>
                                    <div className='d-flex justify-content-end'>
                                      <div className='badge-light badge-dark-light'>
                                        Status:
                                        <span className='text-uppercase'>
                                          Closed
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='card mb-3'>
                                <div className='card-body'>
                                  <div className='mb-4'>
                                    <h3 className='m-0'>
                                      <Link href='/domain/details'>
                                        <a
                                          href='/domain/details'
                                          className='link-dotted d-inline-block text-decoration-none'
                                        >
                                          globalventures/
                                        </a>
                                      </Link>
                                    </h3>
                                  </div>
                                  <div className='mb-0'>
                                    <p className='mr-2 mb-0 font-500 d-block text-muted-light'>
                                      This TLD is closed
                                    </p>
                                    <div className='mb-1'>
                                      <div className='progress'>
                                        <div
                                          className='progress-bar'
                                          role='progressbar'
                                          style={{ width: "0%" }}
                                          aria-valuenow='50'
                                          aria-valuemin='0'
                                          aria-valuemax='100'
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='card-footer d-flex align-items-center bg-white'>
                                  <div className='d-flex'>
                                    <div className='d-flex align-items-center mr-4'>
                                      <div className='d-flex mr-4 align-items-center'>
                                        <span className='mr-2'>Date Sold:</span>
                                        <span className='badge-light badge-primary-light'>
                                          01 Sep 2020
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='ml-auto'>
                                    <div className='d-flex justify-content-end'>
                                      <div className='badge-light badge-dark-light'>
                                        Status:
                                        <span className='text-uppercase'>
                                          Closed
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='card mb-3'>
                                <div className='card-body'>
                                  <div className='mb-4'>
                                    <h3 className='m-0'>
                                      <Link href='/domain/details'>
                                        <a
                                          href='/domain/details'
                                          className='link-dotted d-inline-block text-decoration-none'
                                        >
                                          handyman/
                                        </a>
                                      </Link>
                                    </h3>
                                  </div>
                                  <div className='mb-0'>
                                    <p className='mr-2 mb-0 font-500 d-block text-muted-light'>
                                      This TLD is closed
                                    </p>
                                    <div className='mb-1'>
                                      <div className='progress'>
                                        <div
                                          className='progress-bar'
                                          role='progressbar'
                                          style={{ width: "0%" }}
                                          aria-valuenow='50'
                                          aria-valuemin='0'
                                          aria-valuemax='100'
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='card-footer d-flex align-items-center bg-white'>
                                  <div className='d-flex'>
                                    <div className='d-flex align-items-center mr-4'>
                                      <div className='d-flex mr-4 align-items-center'>
                                        <span className='mr-2'>Date Sold:</span>
                                        <span className='badge-light badge-primary-light'>
                                          01 Sep 2020
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='ml-auto'>
                                    <div className='d-flex justify-content-end'>
                                      <div className='badge-light badge-dark-light'>
                                        Status:
                                        <span className='text-uppercase'>
                                          Closed
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='col-lg-6'>
                              <div className='card mb-3'>
                                <div className='card-body'>
                                  <div className='mb-4'>
                                    <h3 className='m-0'>
                                      <Link href='/domain/details'>
                                        <a
                                          href='/domain/details'
                                          className='link-dotted d-inline-block text-decoration-none'
                                        >
                                          facebook/
                                        </a>
                                      </Link>
                                    </h3>
                                  </div>
                                  <div className='mb-0'>
                                    <p className='mr-2 mb-0 font-500 d-block text-muted-light'>
                                      This TLD is closed
                                    </p>
                                    <div className='mb-1'>
                                      <div className='progress'>
                                        <div
                                          className='progress-bar'
                                          role='progressbar'
                                          style={{ width: "0%" }}
                                          aria-valuenow='50'
                                          aria-valuemin='0'
                                          aria-valuemax='100'
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='card-footer d-flex align-items-center bg-white'>
                                  <div className='d-flex'>
                                    <div className='d-flex align-items-center mr-4'>
                                      <div className='d-flex mr-4 align-items-center'>
                                        <span className='mr-2'>Date Sold:</span>
                                        <span className='badge-light badge-primary-light'>
                                          01 Sep 2020
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='ml-auto'>
                                    <div className='d-flex justify-content-end'>
                                      <div className='badge-light badge-dark-light'>
                                        Status:
                                        <span className='text-uppercase'>
                                          Closed
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-lg-12 mt-3'>
                              <nav>
                                <ul className='pagination justify-content-center mb-0'>
                                  <li className='page-item disabled'>
                                    <a className='page-link' href='#'>
                                      <i className='fas fa-chevron-left'></i>
                                    </a>
                                  </li>
                                  <li className='page-item'>
                                    <a className='page-link' href='#'>
                                      1
                                    </a>
                                  </li>
                                  <li className='page-item active'>
                                    <a className='page-link' href='#'>
                                      2
                                      <span className='sr-only'>(current)</span>
                                    </a>
                                  </li>
                                  <li className='page-item'>
                                    <a className='page-link' href='#'>
                                      3
                                    </a>
                                  </li>
                                  <li className='page-item'>
                                    <a className='page-link' href='#'>
                                      <i className='fas fa-chevron-right'></i>
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                            </div>
                          </div>
                        </div>
                        <div className='row d-none'>
                          {/* Start :: Default Text */}
                          <div className='col-lg-12'>
                            <div className='default-main justify-content-center align-items-center'>
                              <span className='svg-icon svg-icon-default svg-icon-4x mr-3'>
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
                                      d='M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z'
                                      fill='#000000'
                                      fillRule='nonzero'
                                      opacity='0.3'
                                    />
                                    <path
                                      d='M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z'
                                      fill='#000000'
                                      fillRule='nonzero'
                                    />
                                  </g>
                                </svg>
                              </span>
                              <span className='default-text'>
                                Search Result
                              </span>
                            </div>
                          </div>
                          {/* End */}
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
