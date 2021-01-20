exports.handlePSQLErrors = (err, req, res, next) => {
  const badReqCode = ["42703"];
  console.log(err.code)
  if (badReqCode.includes(err.code)) {
    res.status(400).send({ msg: "Bad Request" });
  } else {
    next(err);
  }
};

exports.handleInternalErrors = (err, req, res, next) => {
  console.log(err);
  res.send(500).send({ msg: "Internal server error" });
};

exports.handle404s = (req, res, next) => {
  res.status(404).send({ msg: "Invalid endpoint" });
};
