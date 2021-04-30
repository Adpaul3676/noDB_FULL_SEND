import React, {Component} from 'react';

class NotepadDisplay extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render () {
    let display = this.props.selectedNote.map((e) => {
      return (
        <section key={e.id}>
          <header className='noteTitle'>{e.title}</header>
          <div className='noteBody'>{e.text}</div>
        </section>
      )
    })
    return (
      <section className='displayFrame'>
        {display}
      </section>
    )
  }
}

export default NotepadDisplay;
