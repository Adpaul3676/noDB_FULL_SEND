import React, {Component} from 'react';

class NotepadColumn extends Component {
  constructor (props) {
    super(props)

    this.state = {
      filteredNotesArray: [],
      userInput: '',
      showFilter: false,
    }
  }

  handleChange(input) {
    this.setState ({userInput: input})
  }

  filterColumn(input) {
    this.setState({showFilter: !this.state.showFilter})
    let filtered = this.props.notesArray.filter((e) => {
      if (e.title.includes(input) === true || e.text.includes(input) === true) {
        return (e)
      }
    })
    this.setState({filteredNotesArray: filtered})
    this.setState({userInput: ''})
  }

  render () {
    let column = this.props.notesArray.map((e) => {
      if (this.state.showFilter === false) {
        return (
        <button key={e.id} onClick={() => this.props.selectNote(e)}>
        {e.title}
        </button>
      )}
    })
    let filteredColumn = this.state.filteredNotesArray.map((e) => {
      if (this.state.showFilter === true) {
        return (
        <button key={e.id} onClick={() => this.props.selectNote(e)}>
        {e.title}
        </button>
      )}
    })
    return (
      <section>
        {/* This next part (the search bar) could be a separate component */}
        <input value={this.state.userInput} onChange={(e) => this.handleChange(e.target.value)}></input> 
        <button onClick={() => this.filterColumn(this.state.userInput)}>{this.state.showFilter ? 'Back' : 'Search'}</button>
        {/* It ends here */}
        <div>
          {column}
          {filteredColumn}
        </div>
      </section>
    )
  }
}

export default NotepadColumn;