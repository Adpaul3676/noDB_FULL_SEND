import axios from 'axios';
import React, {Component} from 'react';

class NotepadMain extends Component {
  constructor () {
    super()

    this.state = {
      notesArray: []
    }
  }
  
  componentDidMount () {
    axios.get('/api/notes').then(
      this.setState((res) => {
        this.setState ({notesArray: res.data})
        console.log(res)
      })
    )
  }

  render() {
    return (
      <section>

      </section>
    )
  }
}

export default NotepadMain;