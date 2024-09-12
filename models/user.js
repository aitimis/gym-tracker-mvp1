const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { 
    type: String, 
    required: true 
},
  email: { 
    type: String, 
    required: true, 
    unique: true 
},
  password: { 
    type: String, 
    required: true 
},
  workouts: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Workout' 
}],
  customExercises: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'ExerciseType' 
}],
  customEquipment: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'EquipmentType' 
}],
});

module.exports = mongoose.model('User', userSchema);