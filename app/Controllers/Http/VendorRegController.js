'use strict'

class VendorRegController {
  async regForm({view}){
    return view.render("registration");
  }
  async registerVendor({view}){
    return "veder resgitration running";
  }
}

module.exports = VendorRegController
