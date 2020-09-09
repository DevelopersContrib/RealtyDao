import Link from "next/link";

const statsaddress = (props) => (
  <React.Fragment>
    <div className='card bg-card'>
      <div className='card-body'>
        <div className='card-title-stats mb-2 font-500'>Your Address</div>
        <div className='card-num-stats mb-4'>
          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control'
              value={props.addressKey ? props.addressKey : ""}
              readOnly
            />
            <div className='input-group-append'>
              <button className='btn btn-light' type='button'>
                <i className='fas fa-copy mr-2'></i>
                Copy
              </button>
            </div>
          </div>
        </div>
        <Link href='/settings'>
          <a href='/settings' className='card-meta-viewall'>
            <i className='fas fa-cog mr-2'></i>
            settings
          </a>
        </Link>
      </div>
    </div>
  </React.Fragment>
);

export default statsaddress;
