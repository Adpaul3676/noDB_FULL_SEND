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
  }
  
  componentDidMount () {
    axios.get('/api/notes')
      .then((res) => {
        this.setState({notesArray: res.data})
        console.log(res.data)
      }
    )
  }

  selectNote (obj) {
    this.setState ({selectedNote: [obj]})
  }

  render() {
    return (
      <section>
        <NotepadDisplay 
          selectedNote = {this.state.selectedNote}
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