const table = require("@makeitrealcamp/db-mock")

table.insert({
  name: "Arto Hellas",
  number: "040-123456"
});
table.insert({
  name: "Ada Lovelace",
  number: "39-44-5323523"
});
table.insert({
  name: "Dan Ambramov",
  number: "12-43-234345"
});
table.insert({
  name: "Mary Poppendick",
  number: "39-236423122"
});

function getAllData() {
  const records = table.findAll();
  return records;
}

function getDataById (id) {
  const record = table.findById(id);
  return record;
}

function deleteDataById (id) {
  table.remove(id);
}

function addData (data) {
  table.insert(data);
}

module.exports = {
  getAllData,
  getDataById,
  deleteDataById,
  addData
}