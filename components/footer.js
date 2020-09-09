import Link from "next/link";

export default function footer() {
  return (
    <React.Fragment>
      <section className='footer py-2'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <span className='text-muted'>2020 </span>
              &copy;&nbsp;
              <Link href='/'>
                <a
                  href='/'
                  className=' text-reset text-decoration-none font-500'
                >
                  Realtydao.com
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
