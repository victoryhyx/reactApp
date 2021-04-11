import React from "react";

export default class MakerDownEdit extends React.Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.handChange = this.handChange.bind(this); //  如果传递一个函数名给一个变量，之后通过函数名()的方式进行调用，在方法内部如果使用this则this的指向会丢失
    this.state = { value: "heollll" };
  }
  handChange(e) {
    this.setState({ value: e.target.value });
  }
  getMarkerup() {
    return {
      _html: this.md.render(this.state.value),
    };
  }
  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <label htmlFor="markdown-content">Enter some markdown</label>
        <textarea
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}
