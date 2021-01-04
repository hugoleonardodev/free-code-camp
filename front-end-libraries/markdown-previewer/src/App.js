import React from 'react';
import marked from 'marked';
import './App.css';

function App() {
  class MarkdownExample extends React.Component {
    getMarkdownText() {
      var rawMarkup = marked('This is _Markdown_.', {sanitize: true});
      return { __html: rawMarkup };
    }
    render() {
      return <div className="App" dangerouslySetInnerHTML={this.getMarkdownText()} />
    }
  }

  class MarkdownInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: "Hello, **world**!"
      }
    }
    render() {
      return (
        <div>
          <textarea rows="50" cols="60" onChange={this.state.value} defaultValue={this.state.input}></textarea>
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
    <div>
      <MarkdownExample/>
      <MarkdownInput/>
    </div>
    
  );
}
export default App;
