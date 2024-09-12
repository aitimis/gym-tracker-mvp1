const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseTypeSchema = new Schema({
  name: { // "Bench Press", "Squat"
    type: String, 
    required: true, 
    unique: true 
},
  muscleGroup: { // "Chest", "Legs"
    type: String 
},
  description: { 
    type: String 
} });

module.exports = mongoose.model('ExerciseType', exerciseTypeSchema);