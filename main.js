let express = require('express');
let BodyParser = require('body-parser');
let MongoClient = require('mongodb').MongoClient;

let Routes = require('./routes');

MongoClient.connect(
  'mongodb://localhost:27017',
  (err, dbconn) => {
    let db = dbconn.db('lp');

    let app = express();
    app.use(BodyParser.json());

    //let db={};

    // app.get("/index.html",(req,res)=>{
    //     res.send("Hello World");
    // });

    Routes(app, db);

    app.listen(9000, () => {
      console.log('server started.');
    });
  }
);
