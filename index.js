const { v4: uuidv4 }= require('uuid');

exports.helloworld = (req, res) => {
  res.send(uuidv4());
};
