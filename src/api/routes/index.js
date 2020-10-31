/* Controllers */
const heroController = require('../controllers/HeroController');
module.exports = (app) => {
   app.get('/api', (req, res) => res.status(200).send ({
        message: 'Example project did not give you access to the api web services',
   }));
   app.post('/api/hero/create', heroController.create);
   app.get('/api/hero/getall', heroController.getAll);
   app.post('/api/hero/getbyid', heroController.getHeroById);
};