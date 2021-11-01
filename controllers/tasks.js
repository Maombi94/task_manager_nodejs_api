const getAllTasks = (req,res) => {
    res.send('all items FROMFILES')
}

const createTasks = (req,res) => {
    res.json(req.body)
}

const getTask = (req, res) => {
  res.send({id: req.params.id});
}

const updateTask = (req,res) => {
    res.send('update tasks')
}

const deleteTask = (req,res) => {
    res.send('delete a task')
}

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
};