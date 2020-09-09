import Link from "next/link";

const statsaddress = (props) => (
  <React.Fragment>
    <Link href={props.statRef ? props.statRef : ""}>
      <a
        href={props.statRef ? props.statRef : ""}
        className={`
        card bg-card card-link bg-card-info-light
        ${props.bgCard ? props.bgCard : "bg-card-info-light"}
        `}
      >
        <div className='card-body'>
          <div className='row mb-4'>
            <div className='col-lg-8'>
              <div className='card-num-stats'>
                {props.statNum ? props.statNum : "0"}
              </div>
              <div className='card-title-stats'>
                {props.statTitle ? props.statTitle : "Title"}
              </div>
            </div>
            <div
              className={`
                col-lg-4 d-flex 
                ${
                  props.statIconAlign
                    ? props.statIconAlign
                    : "align-items-center justify-content-center"
                }
            `}
            >
              <div className='d-block mb-2 svg-icon svg-icon-2x svg-icon-paper'>
                <span
                  className={`
                  svg-icon svg-icon-2x
                  ${props.colorIcon ? props.colorIcon : "svg-icon-primary"}
                `}
                >
                  {props.children}
                </span>
              </div>
            </div>
            <div className='card-meta-viewall'>
              {props.statDesc ? props.statDesc : "Short Desc"}
            </div>
          </div>
        </div>
      </a>
    </Link>
  </React.Fragment>
);

export default statsaddress;
