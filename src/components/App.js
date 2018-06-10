import React, { Component } from 'react';
import marked from 'marked';



marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
});


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown : ''
    }
  }

  render() {
    return (
      <div className='container'>        
        <div className='screen'>
        <h4>Editor</h4>
          <textarea id='editor' onInput={(e) => this.setState({markdown : e.target.value}) }/>
        </div>

        <div className='screen'>
          <h4>Preview</h4>
          <div id='preview'>
            {marked(this.state.markdown)}
          </div>
        </div>
      </div>
    )
  }

}

export default App;
