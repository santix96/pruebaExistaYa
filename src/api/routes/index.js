/* Controllers */
const HeroController = require('../controllers/HeroController');

module.exports = (app) => {
   console.log(HeroController);
   app.get('/api', (req, res) => res.status(200).send ({
        message: 'Example project did not give you access to the api web services',
   }));
   app.post('/api/hero/create', HeroController.create);
   app.get('/api/hero/getall', HeroController.getAll);
   app.get('/api/hero/getbyid', HeroController.getHeroById);
};