import React, {Component} from 'react';
import {Editor, EditorState, RichUtils, ContentState} from 'draft-js';

import logo from './logo.svg';
import './App.css';

class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createWithContent(ContentState.createFromText(`var message = "Hello World"
    + "with four spaces indentation"
console.log(message);`))
        };
        this.onChange = (editorState) => this.setState({editorState});
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
    }
    handleKeyCommand(command) {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }
    render() {
        return (<Editor editorState={this.state.editorState} handleKeyCommand={this.handleKeyCommand} onChange={this.onChange}/>);
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <MyEditor/>
            </div>
        );
    }
}

export default App;
