var mongoose = require('mongoose');

// sets promise library to JS default
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
