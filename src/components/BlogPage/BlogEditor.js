import {useState} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const BlogEditor = () => {
  const [editorHtml, setEditorHtml] = useState('')

  const handleChange = html => {
    setEditorHtml(html)
  }

  return (
    <div>
      <ReactQuill
        value={editorHtml}
        onChange={handleChange}
        theme="snow" // You can choose different themes
      />
    </div>
  )
}

export default BlogEditor
