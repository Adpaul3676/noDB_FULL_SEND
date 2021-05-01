import React, {Component} from 'react';

class DisplayButtons extends Component {
  constructor (props) {
    super (props)

    this.state = {
      textInput: '',
      titleInput: '',
    }
    // this.callFunctions = this.callFunctions.bind (this)
    this.editInitializeFunction = this.editInitializeFunction.bind (this)
    // this.handleTextChange = this.handleTextChange.bind (this)
    // this.handleTitleChange = this.handleTitleChange.bind (this)
  }
  
  editInitializeFunction (){
    if (this.props.selectedNote.length !== 0) {
      this.props.toggleEdit();
      this.props.initializeEdit()
    } else {
      alert ('You need to select a note to edit!')
    }
  }

  render () {

    let saveButton = <button onClick={() => this.props.callFunctions()} className='saveButton'>Save Changes</button>

    let editButton = <button onClick={() => this.editInitializeFunction()} className='editButton'>Edit Note</button>

    let deleteButton = <button onClick={() => {
      if (this.props.selectedNote.length !== 0) {
       this.props.deleteNote(this.props.selectedNote[0].id)
      } else {
        alert ('You need to select a note to delete!')
      }
    }}>Delete Note</button>

    return (
      <section>
        {this.props.toggleEditValue ? saveButton : editButton}
        {deleteButton}
      </section>
    )
  }
}

export default DisplayButtons;