import React, {Component} from 'react';
import DisplayButtons from './displayButtons.js'

class NotepadDisplay extends Component {
  constructor(props) {
    super(props)

    this.state = {
      titleInput: '',
      textInput: '',
    }
    this.callAll = this.callAll.bind (this);  
  }

  handleTitleChange (input) {
    this.setState ({titleInput: input})
  } 

  handleTextChange (input) {
    this.setState ({textInput: input})
  } 

  callAll (title, text) {
    this.props.newNote(title, text);
    this.props.createMode();
    this.setState({titleInput: '', textInput: ''})
  }

  render () {
    let displayNew =
        <section>
          <header>
            <input value={this.state.titleInput} className='createTitleField' placeholder='Note title here' onChange={(e) => this.handleTitleChange(e.target.value)}></input>
          </header>
          <section>
            <input onChange={(e) => this.handleTextChange(e.target.value)} value={this.state.textInput} className ='createTextField' placeholder='Note text here'></input>
          </section>
        </section>

    let displayNormal = this.props.selectedNote.map((e) => {
      if (this.props.toggleCreate === false && this.props.toggleEditValue === false) {
        return (
          <section key={e.id}>
            <header className='noteTitle'>{e.title}</header>
            <div className='noteBody'>{e.text}</div>
          </section>
        )
      } 
    })

    let newNoteButton = <button onClick={() => this.props.createMode()}>New Note</button>
    let createButton = <button onClick={() => this.callAll(this.state.titleInput, this.state.textInput)}>Create</button>

    return (
      <section className='displayFrame'>
        {displayNormal}
        {this.props.toggleCreate ? displayNew : null}
        {this.props.toggleCreate ? createButton : newNoteButton}
        <DisplayButtons
        editNote = {this.props.editNote}
        deleteNote = {this.props.deleteNote}
        selectedNote = {this.props.selectedNote}
        toggleEdit = {this.props.toggleEdit}
        toggleEditValue = {this.props.toggleEditValue}
        />
      </section>
    )
  }
}

export default NotepadDisplay;
