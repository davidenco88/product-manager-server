const table = require("@makeitrealcamp/db-mock")

table.insert({
  name: 'Recycled Steel Sausages',
  color: 'White',
  category: 'Music',
  price: '$386.00',
});
table.insert({
  name: 'Fantastic Frozen Shirt',
  color: 'Pink',
  category: 'Clothing',
  price: '$20.00',
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

function updateData (data) {
  table.update(data);
}

module.exports = {
  getAllData,
  getDataById,
  deleteDataById,
  addData,
  updateData
}