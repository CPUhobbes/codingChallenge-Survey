'use strict';
module.exports = (sequelize, DataTypes) => {
  const IpAddress = sequelize.define('IpAddress', {
   ip: {
		type:DataTypes.STRING,
	}
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        IpAddress.belongsTo(models.Question,{
				foreignKey:'questionId',
				onDelete: 'CASCADE',
			})
      }
    }
  });
  return IpAddress;
};