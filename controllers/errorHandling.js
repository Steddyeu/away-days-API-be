exports.handlePSQLErrors = (err, req, res, next) => {
  const badReqCode = ["42703", "23503", "22P02", "22003"];
  //console.log(err.code)
  if (badReqCode.includes(err.code)) {
    res.status(400).send({ msg: "Bad Request" });
  } else {
    next(err);
  }
};

exports.handleInternalErrors = (err, req, res, next) => {
  console.log(err);
  res.send(500).send({ msg: "Internal server error", err });
};

exports.handle404s = (req, res, next) => {
  res.status(404).send({ msg: "Invalid endpoint" });
};

exports.handleCustomError = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send({ msg: err.msg });
  } else {
    next(err);
  }
};

exports.handle405s = (req, res, next) => {
  res.status(405).send({ msg: "Method not allowed" });
};
