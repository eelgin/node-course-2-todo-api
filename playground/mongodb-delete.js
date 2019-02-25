// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  };
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({
  //   text: 'db.collection'
  // }).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({
  //   text: 'db.collection'
  // }).then((result) => {
  //   console.log(result);
  // });
  //
  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({
  //   completed: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteMany({
    name: 'Ernie Elgin'
  }).then((result) => {
    console.log(JSON.stringify(result.result, undefined, 2));
  });

  db.collection('Users').deleteOne({
    _id: ObjectID('5c73f86cd79f6312f4ca024b')
  }).then((result) => {
    console.log(JSON.stringify(result.result, undefined, 2));
  });

  // db.close();
});
