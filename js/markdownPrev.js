import React, { useState } from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";  // Assure-toi d'importer ReactDOM depuis ici
import { marked } from 'https://cdnjs.cloudflare.com/ajax/libs/marked/15.0.7/marked.min.js';

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        input: "# Markdown Previewer \n\n ## Learning React.js \n[Check to know more about **learning React** here](https://www.freecodecamp.org/news/install-react-with-create-react-app/) \n\n Here the `code` below : \n\n ```\n const code = () => {let x = 5;};\n ```  \n\n- JavaScript \n- Front-end frameworks \n > Strive not to be a success, but rather to be of value \n\n ![coding-image](https://image.noelshack.com/fichiers/2025/16/5/1744981631-screenshot-17.png)",
        message: []
      }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <div>
        <div id="div-editor">Editor</div>
          <textarea id="editor" onChange={this.handleChange} cols="90" rows="15">
            {this.state.input}
            </textarea>
        
        <div id="div-preview">Previewer</div>
        <div id="preview" dangerouslySetInnerHTML={{
            __html: marked(this.state.input, {breaks: true}),
          }}></div>
      </div>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<MarkdownPreviewer />);
