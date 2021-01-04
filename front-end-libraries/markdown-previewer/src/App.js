import React from 'react';
import marked from 'marked';
import './App.css';

function App() {
  class MarkdownExample extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        input: 'Hello, **World**! This is _Markdown_.',
        output: 'Hello, **World**! This is _Markdown_.'
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
          <textarea rows="50" cols="60" onChange={this.handleChange} defaultValue={this.state.input}></textarea>
          <div dangerouslySetInnerHTML={this.getMarkdownText()} />
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
