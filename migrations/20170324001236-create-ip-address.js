module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('IpAddresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ip: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      questionId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Questions',
          key: 'id',
          as: 'questionId',
        },
	    }
	  });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('IpAddresses');
  }
};