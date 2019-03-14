import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import { TiDocumentAdd, TiDocumentDelete, TiEdit } from "react-icons/ti";
import Card from 'react-bootstrap/Card';

class NoteTaking extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: [],
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

    deleteNote(idx){
      var currentNotes = this.state.items;
      currentNotes.splice(idx, 1);
      this.setState((prevState) => {
          return{
              items: currentNotes
          }
      });
      console.log(this.state);
    }
    
    addNote(event){
        console.log(this.theIndex);
        if(this.theTitle.value !== "")
        {
            var newItem = {
                title: this.theTitle.value,
                note: this.theNote.value
            };
        }
        this.setState((prevState) => {
            return{
                items: (this.theIndex) ? prevState.items.splice(this.theIndex, 1, newItem) : prevState.items.concat(newItem)
            }
        });
        
        this.theTitle.value = "";
        this.theNote.value = "";
        this.theIndex = undefined;
        console.log("this.state.items");
        this.handleClose();

        event.preventDefault();

    }
    
    initializeEdit(idx){
      this.theIndex = idx;
      this.theNote = this.state.items[idx].note;
      this.theTitle = this.state.items[idx].title;
      this.handleShow();
    }

    render() {
    return (
      <div>
        <header><h1>Noteable
        <TiDocumentAdd onClick={this.handleShow} /></h1>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={this.addNote}>
              <input 
              type="text" 
              placeholder="Title"
              ref={(title) => this.theTitle = title}  
              />
              <textarea 
              placeholder="Enter text"
              ref={(note) => this.theNote=note}
              />
              <button type="submit">Add Note</button>
          </form>
          </Modal.Body>
        </Modal>
            
        </header>
        <div className="main-content">
             {this.state.items.map((val, idx) =>
             <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{val.title}</Card.Title>
                <Card.Text>
                  {val.note}
                </Card.Text>
                <Card.Link href="#" ><TiEdit onClick={() => this.initializeEdit(idx)} /></Card.Link>
                <Card.Link href="#"><TiDocumentDelete onClick = {() => this.deleteNote(idx)} /></Card.Link>
              </Card.Body>
            </Card>)
             }
      </div>

      </div>
    );
  }
}

export default NoteTaking;
