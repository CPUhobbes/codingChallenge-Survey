module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    question: DataTypes.STRING,
	allowNull: false,
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        Question.hasMany(models.Answers, {
			foreignKey:'questionId',
			as: 'answers',

        })

		Question.hasMany(models.IpAddresses, {
			foreignKey:'questionId',
			as: 'ipAddressId',

        })
      }
    }
  });
  return Question;
};