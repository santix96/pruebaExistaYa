'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('heroes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      short_description: {
        type: Sequelize.STRING
      },
      url_more_information: {
        type: Sequelize.STRING
      },
      url_main_image: {
        type: Sequelize.STRING
      },
      positive_votes: {
        type: Sequelize.INTEGER
      },
      negative_votes: {
        type: Sequelize.INTEGER
      },
      city_creation: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('heroes');
  }
};