'use strict'

const Model = use('Model')

class Vendor extends Model {
  static get table () {
  return 'vendor_data'
}
}

module.exports = Vendor
