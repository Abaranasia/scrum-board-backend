

const usersGet = (req, res) => {
  //res.send('Hello World')
  res.status(200).json({
    request: 'get',
    status: 'ok'
  })
};


const usersPost = (req, res) => {
  const body = req.body;
  console.log(body);

  res.status(201).json({
    request: 'get',
    status: 'ok',
    body
  })
};

const usersPut = (req, res) => {
  const body = req.body;
  console.log(body);

  res.status(200).json({
    request: 'put',
    status: 'ok',
    body
  })
};

const usersPatch = (req, res) => {
  const body = req.body;
  console.log(body);

  res.status(200).json({
    request: 'patch',
    status: 'ok',
    body
  })
};

const usersDelete = (req, res) => {
  const body = req.body;
  console.log(body);

  res.status(200).json({
    request: 'delete',
    status: 'ok',
    body
  })
};
module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersPatch,
  usersDelete,
}