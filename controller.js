
const {
    getAllData,
    getDataById,
    deleteDataById,
    addData
  } = require('./model')
  
  function handleGetAllData(req, res) {
    const allData = getAllData();
  
    return res.json(allData);
  }
  
  function handleGetInfo(req, res) {
  
    const allData = getAllData();
    const countPersons = allData.length;
    const date = new Date().toString();
  
    return res.status(200).send(`La libreta telefonica tiene información de ${countPersons} personas <br><br> ${date}`);
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
    const allData = getAllData();
    dataSize = Object.keys(data).length;
    repeatRecord = allData.find((record) => record.name === data.name);
  
    if (data.name && data.number && dataSize === 2 && !repeatRecord) {
      addData(data);
      console.log('Parametro Ingresado');
      return res.status(201).json({message: 'Successful add'});
    } else if (!data.name) {
      return res.status(406).json({ error: 'Parameter name is mandatory' })
    } else if (!data.number) {
      return res.status(406).json({ error: 'Parameter number is mandatory' })
    } else if (repeatRecord) {
      return res.status(406).json({ error: 'name must be unique' })
    }
  }
  
  module.exports = {
    handleGetAllData,
    handleGetInfo,
    handleGetDataById,
    handleDeleteById,
    handleAddData
  }