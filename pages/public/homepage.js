import Meta from "../../components/seo-meta";
import Nav from "../../components/navhome";
import Footer from "../../components/footerhome";
import Head from "next/head";
import Contact from "../Contact";

export default function homepage() {
  return (
    <React.Fragment>
      <Meta title={"Home"} description={""} />
      <Nav />
      <div className='mainFeature'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <div className='mainFeatInner'>
                <h1 className='mainFeatTitle'>
                  Fractional TLD <span className=''>Naming Platform</span>
                </h1>
                <h5 className='mainFeatDesc'>
                  Making <span className='txt-hns'>Handshake</span> names
                  available as tokenized ethereum assets.
                </h5>
                <div className='mt-3'>
                  <a href='signup' className='btn btn-primary btn-lg'>
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='mainFeatImage'>
                <img
                  className='img-fluid'
                  src='https://cdn.vnoc.com/realtydao/data-management.png'
                  alt='realty dao management'
                />
              </div>
            </div>
          </div>
          <div className='row row-roll'>
            <div className='col-md-12'>
              <div className='rolling-box'>
                Recent RealtyDao's
                <span className='roll-text'></span>
                <b>/</b>
              </div>
            </div>
          </div>
          <div className='row row-stats'>
            <div className='col-md-5 col-hns-desc'>
              <img
                src='https://cdn.vnoc.com/realtydao/icon-hns.png'
                className='mr-2 mb-1'
                alt='hns'
                width='42'
              />
              <span className='hnsdesc'>Handshake (HNS)</span>
            </div>
            <div className='col-md-7 text-right'>
              <div className='buyhns'>
                <span className='btcdesc'>
                  0.00001489 <span className='text-info'>BTC</span>
                </span>
                <span className='usddesc'>
                  $0.17 <span className='text-info'>USD</span>
                </span>
                <a href='login' className='btn btn-primary'>
                  Buy
                </a>
              </div>
            </div>
            <div className='col-md-12 mt-1'>
              <div className='card p-4'>
                <div className='row'>
                  <div className='col-md-4 br bb pb-4c'>
                    <div className='media'>
                      <img
                        src='https://cdn.vnoc.com/realtydao/icon-global-trade.png'
                        className='mr-2'
                        alt='trade'
                      />
                      <div className='media-body'>
                        <h5 className='font-size-1 text-uppercase text-secondary mb-0'>
                          Trading Volume
                        </h5>
                        <a className='text-size-1 text-link' href='/'>
                          $900,855
                          <span className='text-secondary'></span>
                          <span className='text-success small'> (+2.35%)</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4 br bb pb-4c'>
                    <div className='media'>
                      <img
                        src='https://cdn.vnoc.com/realtydao/icon-global.png'
                        className='mr-2'
                        alt='market'
                      />
                      <div className='media-body'>
                        <h5 className='font-size-1 text-uppercase text-secondary mb-0'>
                          Market Cap
                        </h5>
                        <a className='text-size-1 text-link' href='/'>
                          $50,000,325
                          <span className='text-secondary'></span>
                          <span className='text-success small'> (+2.35%)</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4 bb pb-4c'>
                    <div className='media'>
                      <img
                        src='https://cdn.vnoc.com/realtydao/icon-global-auction.png'
                        className='mr-2'
                        alt='auction'
                      />
                      <div className='media-body'>
                        <h5 className='font-size-1 text-uppercase text-secondary mb-0'>
                          Latest Auctions
                        </h5>
                        <a className='text-size-1 text-link' href='/'>
                          25
                          <span className='text-secondary'> HNS total bid</span>
                          <span className='text-success small'> (+2.35%)</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3 br pt-4c pt0'>
                    <div className='media'>
                      <img
                        src='https://cdn.vnoc.com/realtydao/icon-global-open.png'
                        className='mr-2'
                        alt='open'
                      />
                      <div className='media-body'>
                        <h5 className='font-size-1 text-uppercase text-secondary mb-0'>
                          Open TLD
                        </h5>
                        <a className='text-size-1 text-link' href='/'>
                          4
                          <span className='text-secondary'> HNS total bid</span>
                          <span className='text-success small'> (+2.35%)</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3 br pt-4c'>
                    <div className='media'>
                      <img
                        src='https://cdn.vnoc.com/realtydao/icon-global-reveal.png'
                        className='mr-2'
                        alt='reveal'
                      />
                      <div className='media-body'>
                        <h5 className='font-size-1 text-uppercase text-secondary mb-0'>
                          Reveal TLD
                        </h5>
                        <a className='text-size-1 text-link' href='/'>
                          10
                          <span className='text-secondary'> HNS total bid</span>
                          <span className='text-success small'> (+2.35%)</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3 br pt-4c'>
                    <div className='media'>
                      <img
                        src='https://cdn.vnoc.com/realtydao/icon-global-bidding.png'
                        className='mr-2'
                        alt='bidding'
                      />
                      <div className='media-body'>
                        <h5 className='font-size-1 text-uppercase text-secondary mb-0'>
                          Bidding TLD
                        </h5>
                        <a className='text-size-1 text-link' href='/'>
                          30
                          <span className='text-secondary'> HNS total bid</span>
                          <span className='text-success small'> (+2.35%)</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3 pt-4c'>
                    <div className='media'>
                      <img
                        src='https://cdn.vnoc.com/realtydao/icon-global-closed.png'
                        className='mr-2'
                        alt='closed'
                      />
                      <div className='media-body'>
                        <h5 className='font-size-1 text-uppercase text-secondary mb-0'>
                          Closed TLD
                        </h5>
                        <a className='text-size-1 text-link' href='/'>
                          15
                          <span className='text-secondary'> HNS total bid</span>
                          <span className='text-success small'> (+2.35%)</span>
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
	<div className="contactFeature" id="contact">
		<div className="container">
			<div className="row row-contact">
				<Contact />
			</div>
		</div>
	  </div>
      <Footer />
    </React.Fragment>
  );
}
