import React from 'react'
import * as CodeMirror from 'codemirror'

class HTMLEditor extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			html_code: "",
			html_content: "",
		}
	}
	componentDidMount() {

		window.editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
	    	mode : "htmlmixed",
    		htmlMode: true,
	    	lineNumbers: true,
		    lineWrapping: true,
		    smartIndent: true,
	  	});
		console.log(window.editor);
		
	}
	handleChange(event){
		this.setState({markdown: event.target.value});	
	}
	render(){
		return(
			<div className="page-content">
				<div className="container">
					<h3 className="text-center title">HTML Editor</h3>
					<div className="row main-container">
						<div className="col-xs-12 menubar">
							<button type="button" className="btn btn-success">Run</button>
						</div>
						<div className="col-sm-6 ">
							<div className="editor-col">
								<textarea id="editor" value="hello yo"></textarea>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="html-col">
								<div dangerouslySetInnerHTML={{__html: this.state.html_content}} />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export {HTMLEditor as default}
