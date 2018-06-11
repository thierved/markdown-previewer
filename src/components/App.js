import React, { Component } from 'react';
import marked from 'marked';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input : ""
    }
  }

  convetToMarkdown() {
    let md = marked(this.state.input, {sanitize: true});
    return {__html : md};
  }

  render() {
    return (
      <div className='container'>        
        <div className='screen'>
        <h4>Editor</h4>
          <textarea id='editor' onInput={(e) => this.setState({input : e.target.value})}/>
        </div>

        <div className='screen'>
          <h4>Preview</h4>
          <div id='preview' dangerouslySetInnerHTML={this.convetToMarkdown()}></div>
        </div>
      </div>
    )
  }

}

export default App;
