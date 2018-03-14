var express = require('express'),
  app =express(),
  cors = require('cors'),
  mongoose=require('mongoose'),
  bodyParser = require('body-parser');

app.use(cors());


//app.use(express.static('public'));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/marlabs');

var db = mongoose.connection;

db.on('error', function () {
  console.log("Error connecting to database");
});

db.on('open', function () {
  console.log('connection established');
});

var UserSchema = mongoose.Schema({
  "username": String,
  "password": String,
  "email": String,
  "location": String,
  "phone": Number
});

var Customer = mongoose.model('customers', UserSchema);


app.get('/getusers',function (req,res) {
  Customer.find({},function (err,docs) {
    if(!err){
      res.send(docs);
    }
    else{
      res.send({flag:'error'});
    }
  });
});

app.post('/savecourseTemp',function (req,res) {

  var newCustomer = new Customer({
    "username": req.body.data.username,
    "password": req.body.data.password,
    "email": req.body.data.email,
    "location": req.body.data.location,
    "phone": req.body.data.phone
  });
  newCustomer.save(function (err,docs) {
    if (!err) {
      res.send(docs);
    }
    else {
      res.send({flag:"failure"});
    }
  });
});


app.post('/savecustomer',function (req,res) {
  if(req.body.data._id){
    var cust_id = req.body.data._id;

    Customer.update({'_id':cust_id},
      {
       '$set':{
         "username": req.body.data.username,
         "password": req.body.data.password,
         "email": req.body.data.email,
         "location": req.body.data.location,
         "phone": req.body.data.phone
       }
      }, function (err,docs) {
          if(!err){
            console.log("success");
            res.send(req.body.data);
          }else{
            console.log("failure");
            res.send(docs);
          }
      })

  }

  else{
    console.log("in else");
    var newCustomer = new Customer({
      "username": req.body.data.username,
      "password": req.body.data.password,
      "email": req.body.data.email,
      "location": req.body.data.location,
      "phone": req.body.data.phone
    });
    newCustomer.save(function (err,docs) {
      if (!err) {
        res.send(docs);
      }
      else {
        res.send({flag:"failure"});
      }
    });
  }



});

app.listen(2000,function () {
  console.log("server running @localhost:2000");
});
