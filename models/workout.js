const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: { 
    type: Date, 
    default: Date.now 
},
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
},
  exercises: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Exercise' 
}],
});

module.exports = mongoose.model('Workout', workoutSchema);