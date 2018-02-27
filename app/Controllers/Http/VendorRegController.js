'use strict'


const vendorInfo = use("App/Models/Vendor");
const Helpers = use("Helpers")
const Mail = use('Mail')
class VendorRegController {
  async regForm({view}){
    return view.render("registration");
  }
  async registerVendor({request}){


    return "registered";

}


}

module.exports = VendorRegController
