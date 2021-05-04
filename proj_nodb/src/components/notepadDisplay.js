import React, {Component} from 'react';
import DisplayButtons from './displayButtons.js'

class NotepadDisplay extends Component {
  constructor(props) {
    super(props)

    this.state = {
      titleInput: '',
      textInput: '',
      textInput2: '',
      titleInput2: '',
    }
    this.callAll = this.callAll.bind (this); 
    this.handleTextChange2 = this.handleTextChange2.bind (this) 
    this.handleTitleChange2 = this.handleTitleChange2.bind (this)
    this.callFunctions = this.callFunctions.bind (this)
    this.initializeEdit = this.initializeEdit.bind (this) 
  }

  handleTitleChange (input) {
    this.setState ({titleInput: input})
  } 

  handleTextChange (input) {
    this.setState ({textInput: input})
  } 

  handleTitleChange2 (input) {
    this.setState({titleInput2: input})
  }

  handleTextChange2 (input) {
    this.setState({textInput2: input})
  }
  

  callAll (title, text) {
    this.props.newNote(title, text);
    this.props.createMode();
    this.setState({titleInput: '', textInput: ''})
  }

  initializeEdit () {
    if (this.props.toggleCreate === false) {
      this.setState({textInput2: this.props.selectedNote[0].text, titleInput2: this.props.selectedNote[0].title})
    } else {
      alert('You need to finish this note first!')
    }
  }

  callFunctions () {
    this.props.editNote(this.state.textInput2, this.state.titleInput2, this.props.selectedNote[0].id);
    this.props.toggleEdit();
    this.setState({textInput2: '', titleInput2: ''})
  }

  render () {
    let displayNew =
        <section>
          <header className='noteTitle'>
            <input value={this.state.titleInput} className='createTitleField' placeholder='Note title here' onChange={(e) => this.handleTitleChange(e.target.value)}></input>
          </header>
          <div className='separator1'></div>
          <section className='noteBody'>
            <input onChange={(e) => this.handleTextChange(e.target.value)} value={this.state.textInput} className ='createTextField' placeholder='Note text here'></input>
          </section>
        </section>

    let displayNormal = this.props.selectedNote.map((e) => {
      if (this.props.toggleCreate === false && this.props.toggleEditValue === false) {
        return (
          <section key={e.id}>
            <header className='noteTitle'>
              <h1 className='titleText'>{e.title}</h1>
            </header>
            
            <div className='separator1'></div>
            <div className='noteBody'>{e.text}</div>
          </section>
        )
      } 
    })

    let newNoteButton = <button className='bottomButton' onClick={() => this.props.createMode()}>New Note</button>
    let createButton = <button className='bottomButton' onClick={() => this.callAll(this.state.titleInput, this.state.textInput)}>Create</button>
    let backButton = <button className='bottomButton' onClick={() => this.props.createMode()}>Back</button>

    let inputFields = <section>
      <header className='noteTitle'>
        <input placeholder='Updated Title Here' value={this.state.titleInput2} onChange={(e) => this.handleTitleChange2(e.target.value)} className='createTitleField'></input>
      </header>
      <div className='separator1'></div>
      <section className='noteBody'>
        <input placeholder='Updated Text Here' value={this.state.textInput2} onChange={(e) => this.handleTextChange2(e.target.value)} className='createTextField'></input>
      </section>
    </section>

    return (
      <section className='displayFrame'>
        <div className='viewPort'>
          {displayNormal}
          {this.props.toggleCreate ? displayNew : null}
          {this.props.toggleEditValue ? inputFields : null} 
        </div>
        <section className='buttonBox'>
          {/* <section className='buttonBottomSpacing'> */}
          {this.props.toggleCreate ? createButton : newNoteButton}
            {this.props.toggleCreate ? backButton : null}
            <DisplayButtons
            editNote = {this.props.editNote}
            deleteNote = {this.props.deleteNote}
            selectedNote = {this.props.selectedNote}
            toggleEdit = {this.props.toggleEdit}
            toggleEditValue = {this.props.toggleEditValue}
            initializeEdit = {this.initializeEdit}
            callFunctions = {this.callFunctions}
            toggleCreate = {this.props.toggleCreate}
            />
          {/* </section> */}
        </section>
      </section>
    )
  }
}

export default NotepadDisplay;
