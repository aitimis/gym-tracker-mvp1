const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  exerciseType: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'ExerciseType', 
    required: true 
},
  sets: { 
    type: Number, 
    required: true 
},
  reps: { 
    type: Number, 
    required: true 
},
  equipment: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'EquipmentType', 
    required: true 
},
  workout: { type: mongoose.Schema.Types.ObjectId, ref: 'Workout' }
});

module.exports = mongoose.model('Exercise', exerciseSchema);