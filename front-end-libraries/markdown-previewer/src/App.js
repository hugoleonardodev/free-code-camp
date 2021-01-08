import React from 'react';
import marked from 'marked';
import './App.css';

const defaultText = '# Markdown Previewer!' +
'\n\n### Pictures: ' +
'\n\n![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/FreeCodeCamp_logo.png/375px-FreeCodeCamp_logo.png)' +
'\n\n### Headings:\n# H1\n## H2\n### H3\netc...\n###### H6' +
'\n\n### Code blocks:' +
'\n```javascript\nfunction hello() {\n  console.log(\'Hello!\');\n}\n\nhello();\n```' +
'\n\n### Text Decoration:\n' +
'*italic*, \n**bold**, \n~~strikethrough~~, \n`inline code or monospace text`' +
'\n\n### Unordered lists:\n* item 1\n* item 2\n* item 3' +
'\n\n### Ordered lists:\n1. item 1\n2. item 2\n3. item 3' +
'\n\n### Hyperlinks: ' +
'\n\n*[HyperLink](https://#)*' +
'\n\n##### Most markdown engines also allow HTML:\n\n' +
'<a href="https://freecodecamp.com/TylerMoeller" target="blank">Developed by Tyler Moeller</a><br>' +
'\n<a href="https://twitter.com/Tyler_Moeller" target="_blank"><i class="fa fa-twitter footer"></i></a>' +
'\n<a href="https://www.linkedin.com/in/tylermoeller" target="_blank"><i class="fa fa-linkedin footer"></i></a>' +
'\n<a href="https://github.com/TylerMoeller" target="_blank"><i class="fa fa-github footer"></i></a>' +
'\n<a href="https://freecodecamp.com/tylermoeller" target="_blank"><i class="fa fa-fire footer"></i></a>' +
'\n<a href="https://codepen.io/TylerMoeller/pens/public" target="_blank"><i class="fa fa-codepen footer"></i></a>' +
'\n<a href="https://tylermoeller.net" target="_blank"><i class="fa fa-wordpress footer"></i></a>';

function App() {
  class MarkdownExample extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        input: 'Hello, **World**! This is _Markdown_.',
        output: defaultText
      }
    }
    getMarkdownText() {
      const output = this.state.output;
      var rawMarkup = marked(output, {sanitize: true});
      return { __html: rawMarkup };
    }
    handleChange(e) {
      this.setState({ output: e.target.value });
    }
    render() {
      return (
        <div className="App">
          <textarea id="editor" rows="50" cols="60" onChange={this.handleChange} defaultValue={this.state.input}></textarea>
          <div id="preview" dangerouslySetInnerHTML={this.getMarkdownText()} />
        </div>
      )
    }
  }

  // class MarkdownEditor extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.md = new marked('This is _Markdown_.');
  //     this.handleChange = this.handleChange.bind(this);
  //     this.state = { value: 'Hello, **world**!' };
  //   }
  
  //   handleChange(e) {
  //     this.setState({ value: e.target.value });
  //   }
  
  //   getRawMarkup() {
  //     return { __html: this.md.render(this.state.value) };
  //   }
  
  //   render() {
  //     return (
  //       <div className="MarkdownEditor">
  //         <h3>Input</h3>
  //         <label htmlFor="markdown-content">
  //           Enter some markdown
  //         </label>
  //         <textarea
  //           id="markdown-content"
  //           onChange={this.handleChange}
  //           defaultValue={this.state.value}
  //         />
  //         <h3>Output</h3>
  //         <div
  //           className="content"
  //           dangerouslySetInnerHTML={this.getRawMarkup()}
  //         />
  //       </div>
  //     );
  //   }

  return (
      <MarkdownExample/>  
  );
}
export default App;
