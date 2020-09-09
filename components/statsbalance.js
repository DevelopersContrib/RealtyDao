const statsbalance = (props) => (
  <React.Fragment>
    <div
      className={`card bg-card ${
        props.bgCard ? props.bgCard : "bg-card-dark-light"
      } `}
    >
      <div className='card-body'>
        <div className='row mb-4'>
          <div className='col-lg-8 mb-2'>
            <div className='card-num-stats'>
              {props.numbalance ? props.numbalance : "0"}
            </div>
          </div>
          <div
            className={`
            col-lg-4 mb-3
            ${props.align ? props.align : ""}
          `}
          >
            <img width='50' src='../img/hns-logo-white.png' alt='' />
          </div>
        </div>
        <div className='card-meta-viewall'>
          {props.statsdesc ? props.statsdesc : "Total HNS Balance"}
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default statsbalance;
