import React from 'react'

const Checkout = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8 col-12 border p-4 rounded">
          <h6 className="py-2">Checkout</h6>
          <p className="py-2">Please enter your delivery address, so we can deliver your order.</p>
          <h6 className="text-gray mt-4">Contact details*</h6>
          <form>
            <div className="row mt-2">
              <div className="col-12 mb-3">
                <div className="form-floating">
                  <select className="form-select" id="title" name="title">
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                  </select>
                  <label for="title">Title</label>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-floating">
                  <input type="text" className="form-control" id="firstname" name="firstname" placeholder="First Name" />
                  <label for="firstname">First Name</label>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-floating">
                  <input type="text" className="form-control" id="lastname" name="lastname" placeholder="Last Name" />
                  <label for="lastname">Last Name</label>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-floating">
                  <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                  <label for="email">Email</label>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-floating">
                  <input type="text" className="form-control" id="mobile" name="mobile" placeholder="Mobile No" />
                  <label for="mobile">Mobile No</label>
                </div>
              </div>
            </div>
            <h6 className="text-gray mt-4">Address details*</h6>
            <div className="row mt-2">
              <div className="col-12 mb-3">
                <div className="form-floating">
                  <input type="text" className="form-control" id="flatnumber" name="flatnumber" placeholder="Flat, House No" />
                  <label for="flatnumber">Flat, House No</label>
                </div>
              </div>
              <div className="col-12 mb-3">
                <div className="form-floating">
                  <input type="text" className="form-control" id="address" name="address" placeholder="Address" />
                  <label for="address">Address</label>
                </div>
              </div>
              <div className="col-12 mb-3">
                <div className="form-floating">
                  <input type="text" className="form-control" id="landmark" name="landmark" placeholder="Landmark" />
                  <label for="landmark">Landmark</label>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-floating">
                  <input type="text" className="form-control" id="pincode" name="pincode" placeholder="Pincode" />
                  <label for="pincode">Pincode</label>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-floating">
                  <input type="text" className="form-control" id="city" name="city" placeholder="City" />
                  <label for="city">City</label>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-floating">
                  <input type="text" className="form-control" id="state" name="state" placeholder="State" />
                  <label for="state">State</label>
                </div>
              </div>
              <div className="col-12 mt-3">
                <button type="submit" className="btn btn-primary w-100 py-3">Add Address</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Checkout