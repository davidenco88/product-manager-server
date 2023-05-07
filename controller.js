
const {
    getAllData,
    getDataById,
    deleteDataById,
    addData,
    updateData
  } = require('./model')
  
  function handleGetAllData(req, res) {
    const allData = getAllData();
  
    return res.json(allData);
  }
  
   function handleGetDataById(req, res) {
    const { id } = req.params;
    const record = getDataById(id);
  
    if (Object.keys(record).length === 0) {
      return res.status(404).json({ message: 'Id Not found' });
    }
  
    return res.json(record);
  }
  
  function handleDeleteById(req, res) {
    const { id } = req.params;
    deleteDataById(id);
    return res.status(202).json({ message: 'Successful delete' });
  }
  
  function handleAddData(req, res) {
    const data = req.body;
    addData(data);
    return res.status(201).json({message: 'Successful add'});
  }

  function handleUpdateData (req, res) {
    console.log('Actualizar');
    const data = req.body
    updateData(data);
    return res.status(201).json({message: 'Actualizar'});
  }
  
  module.exports = {
    handleGetAllData,
    handleGetDataById,
    handleDeleteById,
    handleAddData,
    handleUpdateData
  }