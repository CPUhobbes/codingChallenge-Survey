const index = require('./IndexController');
const questions = require('./QuestionController');
const answers = require('./AnswerController');
const ipAddress = require('./IpAddressController');

module.exports = {
  index,
  questions,
  answers,
  ipAddress
};