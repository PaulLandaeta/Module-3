const { query } = require("../database/pg");

const userPost = async (body) => {
  try {
    const queryString = "INSERT INTO usuarios (nombrecompleto, edad) values ($1, $2)";
    const user = await query(queryString, [body.nombreCompleto, body.edad]);
    return user;
  } catch (err) {
    throw new Error(err);
  }
};

const usersGet = async (req, res) => {
  try {
    const queryString = "SELECT * FROM usuarios";
    const user = await query(queryString);
    console.log(user.rows);
    return user.rows;
  } catch (err) {
    throw new Error(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const { body } = req;
    const { nombreCompleto, edad} = body;
    const user = await query("UPDATE usuarios SET nombreCompleto = $1, edad = $2 WHERE id = $3", [nombreCompleto, edad, req.params.id]);
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }
    return {
      status: "success",
      data: user,
      message: "User updated successfully",
    };
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

const getUser = async (req) => {
  try {
    const queryString = "SELECT AVG(edad) FROM usuarios";
    const avg = await query(queryString);
    return {
      status: 'success',
      promedioEdad: avg.rows[0].avg
    };
  } catch (err) {
    return {
      status: 'error',
      message: err.message
    };
  };
};

const deleteUser = async (req) => {
  try {    
    const user = await query("DELETE FROM usuarios WHERE id = $1", [req.params.id]);
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }
    return {
      status: "success",
      data: user,
      message: "User deleted successfully",
    };
  } catch (err) {
    return {
      status: 'error',
      message: err.message
    };
  }
};

module.exports = {
  userPost,
  usersGet,
  updateUser,
  getUser,
  deleteUser
};
