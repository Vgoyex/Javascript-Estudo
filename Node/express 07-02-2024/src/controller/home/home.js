exports.getHome = (req, res) => {
  res.render(`index`);
  console.log("Foi");
};

exports.postHome = (req, res) => {
  res.send("O que foi enviado foi - " + req.body.teste);
  console.log(req.body.teste);
};
