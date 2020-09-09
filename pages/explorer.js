import Meta from "../components/seo-meta";
import Nav from "../components/navhome";
import Footer from "../components/footerhome";
import Head from "next/head";
import Link from "next/link";

export default function tld() {
  return (
    <React.Fragment>
      <Meta title={"TLD Domain Names"} description={"List of your domains."} />
      <Nav />
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
      <div className='explorerMain'>
	    <div className="container">
		<div className='row'>
		  <div className='col-lg-12'>
		    <div className='card mb-3'>
			<div className='card-header card-header-custom text-white'>
			  <p className='mb-0 font-500'>
			    Latest Auctions
			  </p>
			</div>
			<div className='card-body p-2'>
			  <table className='table table-striped table-hover table-minimal mb-0'>
			    <thead>
				<tr>
				  <th scope='col'>TLD Name</th>
				  <th scope='col'>Status</th>
				  <th scope='col'>Date</th>
				  <th scope='col'>Highest Bid</th>
				  <th scope='col'>Total Bid</th>
				</tr>
			    </thead>
			    <tbody>
				<tr>
				  <td>
				    <a href=''>officepool</a>
				  </td>
				  <td>Open</td>
				  <td>2020-08-16T09:50:16Z</td>
				  <td>
				    <span className='text-info'>
					+1 HNS
				    </span>
				  </td>
				  <td>4</td>
				</tr>
				<tr>
				  <td>
				    <a href=''>deadma</a>
				  </td>
				  <td>Open</td>
				  <td>2020-08-16T09:50:16Z</td>
				  <td>
				    <span className='text-info'>
					+1 HNS
				    </span>
				  </td>
				  <td>4</td>
				</tr>
				<tr>
				  <td>
				    <a href=''>pasaway</a>
				  </td>
				  <td>Open</td>
				  <td>2020-08-16T09:50:16Z</td>
				  <td>
				    <span className='text-info'>
					+1 HNS
				    </span>
				  </td>
				  <td>4</td>
				</tr>
				<tr>
				  <td>
				    <a href=''>marcoleta</a>
				  </td>
				  <td>Open</td>
				  <td>2020-08-16T09:50:16Z</td>
				  <td>
				    <span className='text-info'>
					+1 HNS
				    </span>
				  </td>
				  <td>4</td>
				</tr>
				<tr>
				  <td>
				    <a href=''>sulong</a>
				  </td>
				  <td>Open</td>
				  <td>2020-08-16T09:50:16Z</td>
				  <td>
				    <span className='text-info'>
					+1 HNS
				    </span>
				  </td>
				  <td>4</td>
				</tr>
			    </tbody>
			  </table>
			</div>
			<div className="card-footer text-right">
				<a href="" className="btn btn-info btn-sm">View All Auctions</a>
			</div>
		    </div>
		  </div>
		  <div className='col-lg-12'>
		    <div className='card mb-3'>
			<div className='card-header card-header-custom text-white'>
			  <p className='mb-0 font-500'>
			    Latest Transactions
			  </p>
			</div>
			<div className='card-body p-2'>
			  <table className='table table-striped table-hover table-minimal mb-0'>
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
				    <a href=''>officepool</a>
				  </td>
				  <td>Opened Auction</td>
				  <td>2020-08-16T09:50:16Z</td>
				  <td>
				    <span className='text-info'>
					+1 HNS
				    </span>
				  </td>
				</tr>
				<tr>
				  <td>
				    <a href=''>hamak</a>
				  </td>
				  <td>Placed Bid</td>
				  <td>2020-08-10T05:03:40Z</td>
				  <td>
				    <span className='text-info'>
					+2 HNS
				    </span>
				  </td>
				</tr>
				<tr>
				  <td>
				    <a href=''>freaknet</a>
				  </td>
				  <td>Revealed Bid (multiple)</td>
				  <td>2020-08-10T06:10:11Z</td>
				  <td>
				    <span className='text-info'>
					+0 HNS
				    </span>
				  </td>
				</tr>
				<tr>
				  <td>
				    <a href=''>builderconference</a>
				  </td>
				  <td>Redeemed Bid</td>
				  <td>2020-08-10T06:10:12Z</td>
				  <td>
				    <span className='text-danger'>
					-3.3 HNS
				    </span>
				  </td>
				</tr>
				<tr>
				  <td>
				    <a href=''>tambay</a>
				  </td>
				  <td>Revealed Bid (multiple)</td>
				  <td>2020-08-10T06:10:11Z</td>
				  <td>
				    <span className='text-info'>
					+0 HNS
				    </span>
				  </td>
				</tr>
			    </tbody>
			  </table>
			</div>
			<div className="card-footer text-right">
				<a href="" className="btn btn-info btn-sm">View All Transactions</a>
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
