const routes = require("express").Router();
const { userPost, usersGet, updateUser, deleteUser, getUser  } = require("../../controller/user");

routes.get("/usuarios", async (req, res) => {
  const userData = await usersGet();
  const response = {
    status: "success",
    data: userData,
  };
  res.json(response);
});

routes.post("/usuarios", async (req, res) => {
  const { body } = req;
  const responsePost = await userPost(body);
  console.log(body);
  const response = {
    status: "success",
    data: responsePost,
  };
  res.json(response);
});

routes.get("/usuarios/promedio-edad", async (req, res) => {
  const responseUser = await getUser(req);
  res.json(responseUser);
});

routes.get("/status", async (req, res) => {
  const response = {
    nameSystem: "api-users",
    version: "0.0.1",
    developer: "Paul Wilker Landaeta Flores",
    email: "paulwilkerlf@gmail.com",
  };
  res.json(response);
});

routes.put("/usuarios/:id", async (req, res) => {
  const responsePut = await updateUser(req,res);
  res.json(responsePut);
});

routes.delete("/usuarios/:id", async (req, res) => {
  const responseDelete = await deleteUser(req,res);
  res.json(responseDelete);
});

module.exports = routes;
