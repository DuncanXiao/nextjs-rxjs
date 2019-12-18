import React from 'react'
import { Editor, EditorState } from 'draft-js'
import styles from 'draft-js/dist/Draft.css'

class MyEditor extends React.Component {
  constructor (props) {
    super(props)
    this.state = { editorState: EditorState.createEmpty() }
    this.onChange = (editorState) => this.setState({ editorState })
    this.setEditor = (editor) => {
      this.editor = editor
    }
    this.focusEditor = () => {
      if (this.editor) {
        this.editor.focus()
      }
    }
  }

  componentDidMount () {
    this.focusEditor()
  }

  render () {
    return (
      <div onClick={this.focusEditor}>
        <Editor
          ref={this.setEditor}
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
        <style jsx global>
          {styles}
        </style>
      </div>
    )
  }
}

export default MyEditor
