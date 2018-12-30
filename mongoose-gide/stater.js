
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })
const db = mongoose.connection

db.on('error', console.error.bind(console,'connection error'))
db.once('open', () => {
	console.log("DB connected...  ctrl + c")
})

const kittySchema = new mongoose.Schema({
	name: String,
	age: Number
})

// Function
kittySchema.methods.speak = function () {
  const noName = "名前はまだ無い"
  const greeting = this.name ? "みゃ〜の名前は " + this.name : noName ;
  // console.log(greeting);
}

const Kitten = mongoose.model('Kitten', kittySchema);


const silence = new Kitten({ name: 'Silence'})
const tama = new Kitten({ name: 'Tama' });

// Talk
kittySchema.methods.speak()
silence.speak()
tama.speak()

// Save
tama.save()
	.then(result => console.log(result))
	.catch(err => console.error(err))
silence.save()
	.then(result => console.log(result))
	.catch(err => console.error(err))

// list
Kitten.find()
	.exec()
	.then(result => console.log(result))
	.catch(err => console.error(err))

// filter
Kitten.find({ name: /^T/})
	.exec()
	.then(result => console.log(result))
	.catch(err => console.error(err))

