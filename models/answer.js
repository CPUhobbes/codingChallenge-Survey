module.exports = function(sequelize, DataTypes) {
  const Answer = sequelize.define('Answer', {
	answer: {
		type:DataTypes.STRING,
		allowNull: false,
	}
  }, {
	classMethods: {
		// associations can be defined here
		associate:(models) =>{
			Answer.belongsTo(models.Question,{
				foreignKey:'questionId',
				onDelete: 'CASCADE',
			})
		  
		}
	}
  });
  return Answer;
};