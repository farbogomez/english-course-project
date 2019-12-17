const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
const { database } = require("./Database");

app.get("/", (req, res) => {
  res.send("Hello! What's up?");
});

// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------

// RUTAS DE LOS USUARIOS

// Guardar un usuario

app.post("/usuarios", (req, res) => {
  let user = req.body;
  database.setUser(user, res);
});

app.post("/login", (req, res) => {
  let log = req.body;
  database.Login(log, res);
});

// Buscar todos los usuarios

app.get("/usuarios", (req, res) => {
  database.getUsers(res);
});

// Buscar un usuario por ID

app.get("/usuarios/:id", (req, res) => {
  let { id } = req.params;
  database.getUserId(res, id);
});

// Actualizar un usuario

app.put("/usuarios/:id", (req, res) => {
  let newDatas = req.body;
  newDatas.id = req.params.id;
  database.updateUser(newDatas, res);
});

// Actualizar un usuario con niveles del curso y coins

app.put("/usuarios/:id_usuario", (req, res) => {
  let { id_usuario } = req.params;
  let { id_nivelescurso, id_coins } = req.body;
  database.updateUserLevel(id_usuario, id_nivelescurso, id_coins, res);
});

// Borrar un usuario

app.delete("/usuarios/:id", (req, res) => {
  let { id } = req.params;
  database.deleteUser(id, res);
});

// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------

// RUTAS DE LOS NIVELES DEL CURSO

// Guardar un nivel del curso

app.post("/nivelescurso", (req, res) => {
  let level = req.body;
  database.setLevel(level, res);
});

// Buscar todos los niveles del curso

app.get("/nivelescurso", (req, res) => {
  database.getLevels(res);
});

// Buscar un nivel del curso por ID

app.get("/nivelescurso/:id", (req, res) => {
  let { id } = req.params;
  database.getLevelId(id, res);
});

// Traer los niveles del curso de un usuario
app.get("/usuarios/:id_usuario/nivelescurso", (req, res) => {
  let { id_usuario } = req.params;
  database.getLevelsUser(id_usuario, res);
});

// Buscar un nivel del curso de un usuario

app.get("/users/:user_id/lists/:list_id", (req, res) => {
  let { user_id, list_id } = req.params;
  controller.getUserList(user_id, list_id, res);
});

// Actualizar niveles del curso con usuarios

app.put("/nivelescurso/:id_nivelcurso", (req, res) => {
  let { id_nivelcurso } = req.params;
  let { id_usuarios } = req.body;
  database.updateLevelUser(id_nivelcurso, id_usuarios, res);
});

// Borrar un nivel del curso

app.delete("/nivelescurso/:id", (req, res) => {
  let { id } = req.params;
  database.deleteLevel(id, res);
});

// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------

// RUTAS DE LOS COINS

// Guardar coins

app.post("/coins", (req, res) => {
  let coin = req.body;
  database.setCoin(coin, res);
});

// Buscar todos los coins

app.get("/coins", (req, res) => {
  database.getCoins(res);
});

// Buscar coins por ID

app.get("/coins/:id", (req, res) => {
  let { id } = req.params;
  database.getCoinId(id, res);
});

// Actualizar cantidad de coins

app.put("/coins/:id", (req, res) => {
  let newCant = req.body;
  newCant.id = req.params.id;
  database.updateCoin(newCant, res);
});

// Actualizar coins con usuarios

app.put("/coins/:id_coin", (req, res) => {
  let { id_coin } = req.params;
  let { id_usuarios } = req.body;
  database.updateCoinUser(id_coin, id_usuarios, res);
});

// Borrar la cantidad de coins por ID

app.delete("/coins/:id", (req, res) => {
  let { id } = req.params;
  database.deleteCoin(id, res);
});

// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------

// RUTAS DE LOS TEMAS

// Guardar tema

app.post("/temas", (req, res) => {
  let topic = req.body;
  database.setTopic(topic, res);
});

// Agregar un tema de un nivel del curso

app.post("/nivelescurso/:id_nivelcurso/temas", (req, res) => {
  let { id_nivelcurso } = req.params;
  let topic = req.body;
  database.setTopicLevel(id_nivelcurso, topic, res);
});

// Buscar todos los temas

app.get("/temas", (req, res) => {
  database.getTopics(res);
});

// Buscar un tema por ID

app.get("/temas/:id", (req, res) => {
  let { id } = req.params;
  database.getTopicId(id, res);
});

// Actualizar un tema

app.put("/temas/:id", (req, res) => {
  let newDatas = req.body;
  newDatas.id = req.params.id;
  database.updateTopic(newDatas, res);
});

// Borrar un tema

app.delete("/temas/:id", (req, res) => {
  let { id } = req.params;
  database.deleteTopic(id, res);
});

// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------

// RUTAS DE LOS SUBTEMAS

// Guardar subtema

app.post("/subtemas", (req, res) => {
  let subtopic = req.body;
  database.setSubtopic(subtopic, res);
});

// Agregar subtemas de un tema

app.post("/temas/:id_tema/subtemas", (req, res) => {
  let { id_tema } = req.params;
  let subtopic = req.body;
  database.setSubtopicTopic(id_tema, subtopic, res);
});

// Buscar todos los subtemas

app.get("/subtemas", (req, res) => {
  database.getSubtopics(res);
});

// Buscar un subtema por ID

app.get("/subtemas/:id", (req, res) => {
  let { id } = req.params;
  database.getSubtopicId(id, res);
});

// Actualizar un subtema

app.put("/subtemas/:id", (req, res) => {
  let newDatas = req.body;
  newDatas.id = req.params.id;
  database.updateSubtopic(newDatas, res);
});

// Borrar un subtema

app.delete("/subtemas/:id", (req, res) => {
  let { id } = req.params;
  database.deleteSubtopic(id, res);
});

// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------

// RUTAS DE LOS ACTIVIDADES

// Guardar actividad

app.post("/actividades", (req, res) => {
  let act = req.body;
  database.setAct(act, res);
});

// Agregar actividades de un subtema

app.post("/subtemas/:id_subtema/actividades", (req, res) => {
  let { id_subtema } = req.params;
  let activity = req.body;
  database.setActSubtopic(id_subtema, activity, res);
});

// Buscar todas las actividades

app.get("/actividades", (req, res) => {
  database.getActs(res);
});

// Buscar un actividad por ID

app.get("/actividades/:id", (req, res) => {
  let { id } = req.params;
  database.getActId(id, res);
});

// Actualizar una actividad

app.put("/actividades/:id", (req, res) => {
  let newDatas = req.body;
  newDatas.id = req.params.id;
  database.updateAct(newDatas, res);
});

// Borrar una actividad

app.delete("/actividades/:id", (req, res) => {
  let { id } = req.params;
  database.deleteAct(id, res);
});

exports.app = app;
