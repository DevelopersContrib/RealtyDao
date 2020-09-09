import Meta from "../components/seo-meta";
import Navmenu from "../components/nav";
import Footer from "../components/footer";
import Swal from "sweetalert2";
import Statsbalance from "../components/statsbalance";

const handleSubmit = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You will not be able to recover your HNS!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, Keep going!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        "Successfully Funds Sent!",
        "Reminder: Estimate Delivery: 10 - 15 mins.",
        "success"
      );
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire("Cancelled", "Transaction Cancelled.", "error");
    }
  });
};

export default function send() {
  return (
    <React.Fragment>
      <Meta title={"Send Funds"} description={""} />
      <Navmenu />
      <div className='section-main card-widget'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3'>
              <div className='row'>
                <div className='col-lg-12 d-none'>
                  <div className='alert-2 alert-2-success'>
                    <div className='alert-2-header'>
                      <i className='fas fa-check mr-1'></i> Success
                    </div>
                    <div className='alert-2-body'>
                      Estimate Delivery: 10 - 15 mins.
                    </div>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <Statsbalance
                    statsdesc={""}
                    numbalance={"10,000"}
                    bgCard={"bg-card-dark-gray"}
                    align={"d-flex align-items-center justify-content-end"}
                  />
                </div>
              </div>
              <div className='card'>
                <div className='card-body'>
                  <h1 className='text-center'>Send Funds</h1>
                  <div className='was-validated'>
                    <div className='form-group'>
                      <label>Sending To</label>
                      <input
                        type='text'
                        placeholder='Recipient address'
                        className='form-control'
                        required
                      />
                      <div className='invalid-feedback'>
                        Please input valid address.
                      </div>
                    </div>
                    <div className='form-group'>
                      <label>Amount (HNS)</label>
                      <input
                        type='number'
                        placeholder='0'
                        className='form-control'
                        required
                      />
                      <div className='invalid-feedback'>
                        Please input valid amount.
                      </div>
                    </div>
                    <div className='form-group'>
                      <label>Network Fee Rate</label>
                      <input
                        type='text'
                        placeholder='0'
                        className='form-control'
                      />
                      <small className='form-text text-muted'>
                        Estimate Delivery: 10 - 15 mins.
                      </small>
                    </div>
                    <div className='form-group mb-0'>
                      <button
                        onClick={handleSubmit}
                        className='btn btn-dark-gray btn-block'
                      >
                        Submit
                      </button>
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
