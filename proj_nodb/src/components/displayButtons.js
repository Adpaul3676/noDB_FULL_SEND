import React, {Component} from 'react';

class DisplayButtons extends Component {
  constructor (props) {
    super (props)

    this.state = {
      textInput: '',
      titleInput: '',
    }
    this.callFunctions = this.callFunctions.bind (this)
    this.editInitializeFunction = this.editInitializeFunction.bind (this)
    this.handleTextChange = this.handleTextChange.bind (this)
    this.handleTitleChange = this.handleTitleChange.bind (this)
  }
  
  callFunctions () {
    this.props.editNote(this.state.textInput, this.state.titleInput, this.props.selectedNote[0].id);
    this.props.toggleEdit();
    this.setState({textInput: '', titleInput: ''})
  }
  
  editInitializeFunction (){
    this.props.toggleEdit();
    this.setState({textInput: this.props.selectedNote[0].text, titleInput: this.props.selectedNote[0].title})
  }

  handleTitleChange (input) {
    this.setState({titleInput: input})
  }

  handleTextChange (input) {
    this.setState({textInput: input})
  }
  
  render () {

    let inputFields = <section>
      <input placeholder='Updated Title Here' value={this.state.titleInput} onChange={(e) => this.handleTitleChange(e.target.value)} className='editTitleField'></input>
      <input placeholder='Updated Text Here' value={this.state.textInput} onChange={(e) => this.handleTextChange(e.target.value)} className='editTextField'></input>
    </section>

    let saveButton = <button onClick={() => this.callFunctions()} className='saveButton'>Save Changes</button>

    let editButton = <button onClick={() => this.editInitializeFunction()} className='editButton'>Edit Note</button>

    return (
      <section className='buttonBox'>
        {this.props.toggleEditValue ? saveButton : editButton}
        {this.props.toggleEditValue ? inputFields : null}
        {/* {deleteButton} */}
      </section>
    )
  }
}

export default DisplayButtons;