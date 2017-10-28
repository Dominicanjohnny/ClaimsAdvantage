const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const claimSchema = new Schema({
  homeowner: { type: Schema.Types.ObjectId, ref: 'User' },
  dol         : String,
  policynumber : String,
  typeofdamage: String,
  insurance   : String,
  deductible  : String,
  urlImage    : String,


});


const Claim = mongoose.model('Claim', claimSchema);

module.exports = Claim;
