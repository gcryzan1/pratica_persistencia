const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://admin:admin@cluster0.rstrt.mongodb.net/persistencia?retryWrites=true&w=majority',
    { useNewUrlParser: true }
);
mongoose.set('useFindAndModify', false);

module.exports = mongoose;
