import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

class AddEditNote extends Component {
    constructor(props){
        super(props);

        this.state = {
            show: false
        }

        this.addNote = this.addNote.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }    
    
    render() {
    return (

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={this.props.addNote}>
              <input 
              type="text" 
              placeholder="Title"
              ref={(title) => this.theTitle = title} 
              value = {this.props.title} 
              />
              <textarea 
              placeholder="Enter text"
              ref={(note) => this.theNote=note}
              value = {this.props.note}
              />
              <button type="submit">Add/Edit Note</button>
          </form>
          </Modal.Body>
        </Modal>
        
    );
  }
}

export default AddEditNote;
