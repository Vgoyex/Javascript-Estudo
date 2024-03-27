exports.getTestes = (req, res) => {
  res.render(`testes`);
  console.log("Filter");
};

exports.postTestes = (req, res) => {
  res.send(`<a>RESP postTestes body -> ${req.body.tantofaz}</a>`);
  console.log(`Body ->   ${JSON.stringify(req.body.tantofaz)}`);
};
