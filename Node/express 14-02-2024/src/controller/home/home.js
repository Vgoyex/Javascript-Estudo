exports.getHome = (req, res,next) => {
  res.render(`index`);
  console.log("Foi");
};

exports.postHome = (req, res,next) => {
  res.send("O que foi enviado foi - " + req.body.teste);
  console.log(req.body.teste);
};
