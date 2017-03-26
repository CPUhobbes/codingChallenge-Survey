module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Answers', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			answer: {
				type: Sequelize.STRING,
				allowNull: false,
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
	return queryInterface.dropTable('Answers');
  }
};