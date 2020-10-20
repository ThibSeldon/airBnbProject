const mongoose = require('mongoose');



mongoose.connect("mongodb+srv://thib_seldon:"+ process.env.MONGOPSW + "@cluster0.l69fw.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB DATABASE réussie !'))
  .catch(() => console.log('Connexion à MongoDB DATABSE échouée !'));

