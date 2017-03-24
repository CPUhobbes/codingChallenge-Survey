module.exports = function(sequelize, DataTypes) {
  const Answer = sequelize.define('Answer', {
	answer: DataTypes.STRING,
	allowNull: false,
  }, {
	classMethods: {
	  associate: function(models) {
		// associations can be defined here
		associate:(models) =>{
			Answer.belongsTo(models.Question,{
				foreignKey:'questionId',
				onDelete: 'CASCADE',
			})
		  
		}
	  }
	}
  });
  return Answer;
};