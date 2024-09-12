const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const equipmentTypeSchema = new Schema({
  name: { // "Dumbbells", "Treadmill"
    type: String, 
    required: true, 
    unique: true 
},
  description: { type: String },
  isCustom: { 
    type: Boolean, 
    default: false 
},
  createdBy: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' 
}});

module.exports = mongoose.model('EquipmentType', equipmentTypeSchema);