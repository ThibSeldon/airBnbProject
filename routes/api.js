var express = require("express");
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://thib_seldon:"+ process.env.MONGOPSW + "@cluster0.l69fw.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });


router.get('/', function(req, res, next){
    res.status(200);
    res.json({message : 'Hello World'});

    client.connect(err => {
        //if(err) return console.error(err)
        const collection = client.db("Rbnb").collection("quotes");
        collection.insertOne({name:"Thib3", quote: "Dont be afraid to fail "})
        client.close();
      });

})


router.post('/signup', function(req,res,next){
    
})


module.exports  = router;