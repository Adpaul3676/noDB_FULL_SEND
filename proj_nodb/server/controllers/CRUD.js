let notesArr = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    title: 'Sample Note ^-^'
  },
  {
    id: 2,
    text: 'This is a test',
    title: 'Test Note'
  }
]

let id = 3


module.exports = {
  newNote: (req, res) => {
    let {text, title} = req.body;
      if (text !== undefined && title !== undefined) {
      notesArr.push({text, title, id,});
      id++;
      res.status(200).send(notesArr);
      // console.log(text, title)
    } else {
      res.status(500).send('Undefined variables')
    }
  },

  getNotes: (req, res) => {
    res.status(200).send(notesArr);
  },

  deleteNote: (req, res) => {
    let {id} = req.params;
      if (id !== undefined) {
      notesArr = notesArr.filter((note) => note.id !== +id)
      res.status(200).send(notesArr);
    } else {
      res.status(500).send('Undefined variables')
    }
  },

  updateNote: (req,res) => {
    let {id} = req.params;
    let {text, title} = req.body;
    if (id !== undefined && title !== undefined && text !==undefined) {
      let foundIndex = notesArr.findIndex((message) => message.id === +id);
      let note = notesArr[foundIndex];


      notesArr[foundIndex] = {
        id: +id,
        text: text || note.text,
        title: title || note.title,
      }
      res.status(200).send(notesArr);
    } else {
      res.status(500).send('Undefined variables')
    }
  }
}