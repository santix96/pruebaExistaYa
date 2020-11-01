const Sequelize = require('sequelize');
const hero = require('../models').hero;

module.exports = {
  create(req, res) {
    return hero
      .create({
        name: req.body.name,
        description: req.body.description,
        short_description: req.body.shortDescription,
        url_more_information: req.body.urlMoreInformation,
        url_main_image: req.body.urlMainImage,
        positive_votes: req.body.positiveVotes,
        negative_votes: req.body.negativeVotes,
        city_creation: req.body.cityCreation
      })
      .then((hero) => { 
        return res.status(200).send(hero);
      })
      .catch((error) => {
        console.log(error)
        return res.status(400).send(error);
      });
  },
  getAll(_, res) {
    return hero.findAll({})
      .then(hero => res.status(200).send(hero))
      .catch(error => res.status(400).send(error));
  },
  getHeroById(req, res) {
    return hero.findAll({
      where: {
        id: req.body.id
      }
    }).then(hero => res.status(200).send(hero))
      .catch(error => res.status(400).send(error));
  }
}