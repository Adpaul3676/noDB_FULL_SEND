import axios from 'axios';
import React, {Component} from 'react';
import NotepadDisplay from './notepadDisplay.js'
import NotepadColumn from './notepadColumn.js'

class NotepadMain extends Component {
  constructor () {
    super()

    this.state = {
      notesArray: [],
      toggleEdit: false,
      toggleCreate: false,
      selectedNote: [],
    }
    this.selectNote = this.selectNote.bind (this)
    this.createMode = this.createMode.bind (this)
    this.createNote = this.createNote.bind (this)
    this.toggleEdit = this.toggleEdit.bind (this)
    this.editNote = this.editNote.bind (this)
    this.deleteNote = this.deleteNote.bind (this)
  }
  
  componentDidMount () {
    axios.get('/api/notes')
      .then((res) => {
        this.setState({notesArray: res.data})
        console.log(res.data)
      }
    )
  }

  toggleEdit () {
    this.setState ({toggleEdit: !this.state.toggleEdit})
  }

  createNote (title, text) {
    axios.post('/api/notes', {text, title})
      .then((res) => {
        this.setState({notesArray: res.data})
      }
    )
    console.log (this.state.notesArray)
  }

  deleteNote (id) {
    if (id !== undefined) {
      axios.delete(`api/notes/${id}`)
      .then((res) => {
        this.setState({notesArray: res.data, selectedNote: []})
      })
    }
  }

  editNote (text, title, id) {
    if (text !== undefined) {
      axios.put(`/api/notes/${id}`, {text, title})
      .then((res) => {
        this.setState({notesArray: res.data, selectedNote: [{text, title, id}]})
      })
    }
  }

  createMode () {
    this.setState({toggleCreate: !this.state.toggleCreate})
  }

  selectNote (obj) {
    this.setState ({selectedNote: [obj]})
  }

  render() {
    return (
      <section className='App'>
        <NotepadDisplay 
          selectedNote = {this.state.selectedNote}
          toggleCreate = {this.state.toggleCreate}
          createMode = {this.createMode}
          newNote = {this.createNote}
          deleteNote = {this.deleteNote}
          editNote = {this.editNote}
          toggleEdit = {this.toggleEdit}
          toggleEditValue = {this.state.toggleEdit}
          selectNote = {this.selectNote}
        />
        <NotepadColumn 
          notesArray = {this.state.notesArray}
          selectNote = {this.selectNote}
        />
      </section>
    )
  }
}

export default NotepadMain;