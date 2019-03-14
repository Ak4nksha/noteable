import React,  { Component }  from 'react';
import Modal from 'react-bootstrap/Modal';
import { TiDocumentAdd, TiDocumentDelete, TiEdit } from "react-icons/ti";
import Card from 'react-bootstrap/Card';

class NoteTaking extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: [],
            show: false,
        }

        this.currentNote = "";
        this.currentTitle = "";

        this.addEditNote = this.addEditNote.bind(this);
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
      this.setState(() => {
          return{
              items: currentNotes
          }
      });
      console.log(this.state);
    }
    
    addEditNote(event){
        console.log(this.currentTitle.length)
        if(this.theTitle.value !== "")
        {
            var newItem = {
                title: this.theTitle.value,
                note: this.theNote.value
            };
        }
        var currentNotes = this.state.items;
        if(this.currentTitle.length > 0) {
          currentNotes.splice(this.theIndex, 1, newItem)
         }  

        this.setState(() => {
            return{
                items: (this.currentTitle.length > 0) ? currentNotes : currentNotes.concat(newItem) }
        });
        
        this.theTitle.value = "";
        this.theNote.value = "";
        this.theIndex = undefined;
        console.log(this.state.items);
        this.handleClose();

        event.preventDefault();

    }
    
    initializeEdit(idx){
      this.theIndex = idx;
      this.currentNote = this.state.items[idx].note;
      this.currentTitle = this.state.items[idx].title;
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
          <form onSubmit={this.addEditNote}>
              <input 
              type="text" 
              placeholder="Title"
              ref={(title) => this.theTitle = title}
              defaultValue = {this.currentTitle}
              />
              <textarea 
              placeholder="Enter text"
              ref={(note) => this.theNote=note}
              defaultValue = {this.currentNote}
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
