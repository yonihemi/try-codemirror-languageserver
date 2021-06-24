import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup"
import { cpp } from "@codemirror/lang-cpp"
import { languageServer } from 'codemirror-languageserver'

const filename = "test.cpp"
const serverUri = "http://localhost:5000"
var lsp = languageServer({
	serverUri: serverUri,
	rootUri: 'file:///',
	documentUri: `file:///${filename}`,
	languageId: 'cpp' // As defined at https://microsoft.github.io/language-server-protocol/specification#textDocumentItem.
});

let editor = new EditorView({
  state: EditorState.create({
    extensions: [
        basicSetup,
        cpp(),
        lsp,   
    ]
  }),
  parent: document.body
})