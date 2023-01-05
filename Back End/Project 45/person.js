const mongoose = require('mongoose');

mongoose.connect('mongodb://172.24.224.10:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
      console.log('Connection OPEN!!');
    })
    .catch((err) => {
      console.log('ERROR!');
      console.log(err);
    });

const personSchema = new mongoose.Schema({
  first: String,
  last: String,
});

personSchema.virtual('fullName').get(function() {
  return `${this.first} ${this.last}`;
});

personSchema.pre('save', async function() {
  console.log('ABOUT TO SAVE');
});

personSchema.post('save', async function() {
  console.log('JUST SAVED!');
});

const Person = mongoose.model('Person', personSchema);
