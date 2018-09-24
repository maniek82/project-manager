import React, { Component } from 'react';

class CreateProject extends Component {
    state = {  
        title: '',
        content: ''
    }
   
handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
}
handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
}
    render() { 
        return ( 
            <div className="container">
                <form onSubmit={this.handleSubmit}className="clear ">
                    <h3 className="white-text text-darken-3">Create Project</h3>
                    <div className="input-field">
                        <label className="white-text "htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label className="white-text" htmlFor="content">Project Content</label>
                        <textarea  onChange={this.handleChange} id="content" className="materialize-textarea"></textarea>
                    </div>
                    <div className="input-field">
                       <button className="btn green darken-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default CreateProject;