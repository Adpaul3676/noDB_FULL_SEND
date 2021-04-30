import React, {Component} from 'react';

class DisplayButtons extends Component {
  constructor (props) {
    super (props)

    this.state = {
      textInput: '',
      titleInput: '',
    }
  }
  
  callFunctions () {
    this.props.editNote(this.props.selectedNote.id);
    this.props.toggleEdit();
  }
  
  editFunction (){
    this.props.toggleEdit();
    
  }

  handleTitleChange (input) {

  }

  handleTextChange (input) {

  }
  
  render () {
    let inputFields = <section>
      <input value={this.state.titleInput} onChange={(e) => this.handleTextChange(e.target.value)} className='editTitleField'></input>
      <input value={this.state.textInput} onChange={(e) => this.handleTitleChange(e.target.value)} className='editTextField'></input>
    </section>
    let saveButton = <button onClick={() => this.callFunctions()} className='saveButton'>Save Changes</button>
    let editButton = <button onClick={() => this.editFunction()} className='editButton'>Edit Note</button>
    return (
      <section className='buttonBox'>
        {this.props.toggleEditValue ? saveButton : editButton}
        {inputFields}
        {/* {deleteButton} */}
      </section>
    )
  }
}

export default DisplayButtons;