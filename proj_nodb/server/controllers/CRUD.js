let notesArr = [
  {
    id: 1,
    text: 'This is a sample note ^-^',
    title: 'Sample Note'
  }
]

let id = 2


module.exports = {
  newNote: (req, res) => {
    let {text, title} = req.body;
    notesArr.push({text, title, id,});
    res.status(200).send(notesArr)
    id++
  },

  getNotes: (req, res) => {
    res.status(200).send(notesArr)
  },

  deleteNote: (req, res) => {
    let {id} = req.params;
    notesArr = notesArr.filter((note) => note.id !== +id)
    res.status(200).send(notesArr)
  },

  updateNote: (req,res) => {
    let {id} = req.params;
    let {text, title} = req.body;
    let foundIndex = notesArr.findIndex((message) => message.id === +id);
    let note = notesArr[foundIndex];


    notesArr[foundIndex] = {
      id: +id,
      text: text || note.text,
      title: title || note.title,
    }
    res.status(200).send(notesArr);
  }
}