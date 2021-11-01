const mongoose = require('mongoose')
const connectionString =
  "mongodb+srv://maombi:ZwRttUwiB0dc5kHk@nodeexpressprojects.l4v5d.mongodb.net/TaskManager?retryWrites=true&w=majority";

const connectDB = (url) => {
    return mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
}


module.exports = connectDB


