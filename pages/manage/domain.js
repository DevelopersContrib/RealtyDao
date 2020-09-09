import Meta from "../../components/seo-meta";
import Navmenu from "../../components/nav";
import Footer from "../../components/footer";
import Head from "next/head";

export default function domain() {
  return (
    <React.Fragment>
      <style jsx>{`
        .default-main {
          display: flex;
          min-height: 200px;
        }
        .default-text {
          font-size: 3rem;
          color: #b5b5c3;
        }
      `}</style>
      <Meta title={"Manage TLD Details"} description={""} />
      <Navmenu />
      <div className='section-main'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h1 className='mt-0 mb-3'>Manage</h1>
              <div className='card mb-3'>
                <div className='card-body'>
                  <div className='mb-4'>
                    <h3 className='mb-1'>autograph/</h3>
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
                      <span className=''>Highest Bid:</span>
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
                      <span className=''>Registered:</span>
                      <span className='font-700 ml-2'>YES</span>
                    </div>
                  </div>
                  <div className='ml-auto'>
                    <div className='d-flex justify-content-end'>
                      <div className='badge-light badge-dark-light'>
                        Status: <span className='text-uppercase'>closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-12'>
              <h5 className='mb-3 mt-5 text-uppercase'>Records</h5>
              <div className='card mb-3'>
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-lg-3'>
                      <div className='form-group'>
                        <select className='form-control'>
                          <option value='DS'>DS</option>
                          <option value='NS'>NS</option>
                          <option value='GLUE4'>GLUE4</option>
                          <option value='GLUE6'>GLUE6</option>
                          <option value='SYNTH4'>SYNTH4</option>
                          <option value='SYNTH6'>SYNTH6</option>
                          <option value='TXT'>TXT</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-lg-2'>
                      <div className='form-group'>
                        <button className='btn btn-primary btn-block'>
                          <i className='fas fa-check mr-2'></i>
                          Add Record
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    {/* Start:: No Recoard Default Display */}
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
                        <span className='default-text'>Add Records.</span>
                      </div>
                    </div>
                    {/* End */}
                    <div className='col-lg-12  d-none'>
                      <table className='table table-hover'>
                        <tbody>
                          <tr>
                            <td className='align-middle font-600'>DS</td>
                            <td>
                              <input
                                type='text'
                                className='form-control'
                                placeholder='keyTag'
                              />
                            </td>
                            <td>
                              <input
                                type='text'
                                className='form-control'
                                placeholder='algorithm'
                              />
                            </td>
                            <td>
                              <input
                                type='text'
                                className='form-control'
                                placeholder='digestType'
                              />
                            </td>
                            <td>
                              <input
                                type='text'
                                className='form-control'
                                placeholder='digest'
                              />
                            </td>
                            <td>
                              <button className='btn btn-danger'>
                                <i className='fas fa-trash'></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className='align-middle font-600'>NS</td>
                            <td colSpan='4'>
                              <input
                                type='text'
                                className='form-control'
                                placeholder='ns'
                              />
                            </td>
                            <td>
                              <button className='btn btn-danger'>
                                <i className='fas fa-trash'></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className='align-middle font-600'>GLUE4</td>
                            <td colSpan='2'>
                              <input
                                type='text'
                                className='form-control'
                                placeholder='ns'
                              />
                            </td>
                            <td colSpan='2'>
                              <input
                                type='text'
                                className='form-control'
                                placeholder='address'
                              />
                            </td>
                            <td>
                              <button className='btn btn-danger'>
                                <i className='fas fa-trash'></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className='align-middle font-600'>GLUE6</td>
                            <td colSpan='2'>
                              <input
                                type='text'
                                className='form-control'
                                placeholder='ns'
                              />
                            </td>
                            <td colSpan='2'>
                              <input
                                type='text'
                                className='form-control'
                                placeholder='address'
                              />
                            </td>
                            <td>
                              <button className='btn btn-danger'>
                                <i className='fas fa-trash'></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className='align-middle font-600'>SYNTH4</td>
                            <td colSpan='4'>
                              <input
                                type='text'
                                className='form-control'
                                placeholder='address'
                              />
                            </td>
                            <td>
                              <button className='btn btn-danger'>
                                <i className='fas fa-trash'></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className='align-middle font-600'>SYNTH6</td>
                            <td colSpan='4'>
                              <input
                                type='text'
                                className='form-control'
                                placeholder='address'
                              />
                            </td>
                            <td>
                              <button className='btn btn-danger'>
                                <i className='fas fa-trash'></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className='align-middle font-600'>TXT</td>
                            <td colSpan='4'>
                              <input
                                type='text'
                                className='form-control'
                                placeholder='text'
                              />
                            </td>
                            <td>
                              <button className='btn btn-danger'>
                                <i className='fas fa-trash'></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td colSpan='6'>
                              <button type='button' className='btn btn-primary'>
                                <i className='fas fa-check mr-2'></i>
                                Submit Changes
                              </button>
                              <button type='button' className='btn btn-danger'>
                                <i className='fas fa-ban mr-2'></i>
                                Cancel
                              </button>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
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
