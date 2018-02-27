'use strict'

const Schema = use('Schema')

class VendorDataSchema extends Schema {
  up () {
    this.create('vendor_data', (table) => {

      table.increments()
      table.string("company_name")
      table.string("company_registration")
      table.string("company_email")
      table.string("company_contact_tel")
      table.string("company_contact_mobile")
      table.string("company_address")
      table.string("company_address_state")
      table.string("company_address_city")
      table.string("company_address_zipcode")
      table.string("company_tytpe_bussiness")
      table.string("company_profile")
      table.string("company_authorization_letter")
      table.string("company_registration_letter")
      table.string("company_gst_letter")
      table.string("company_shearholders_ID")
      table.timestamps()

    })
  }

  down () {
    this.drop('vendor_data')
  }
}

module.exports = VendorDataSchema
