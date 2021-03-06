import React,  { Component }  from 'react';
import Modal from 'react-bootstrap/Modal';
import $ from 'jquery';
import { TiDocumentAdd, TiDocumentDelete, TiEdit } from "react-icons/ti";
import Card from 'react-bootstrap/Card';

class NoteTaking extends Component {
    constructor(props){
        super(props);

        var savedState = localStorage.getItem("state");
        var savedRequests = localStorage.getItem("requests");
        this.state = {
            items: (!savedState) ? [] : JSON.parse(savedState),
            requests:  (!savedRequests) ? {} : JSON.parse(savedRequests),
            show: false,
        }

        this.Url = "https://p1mmduuq11.execute-api.us-east-1.amazonaws.com/dev/notes"
        this.currentNote = "";
        this.currentTitle = "";
        this.currentID = "";

        this.addEditNote = this.addEditNote.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        var self = this
        window.addEventListener('online', function(event){  //down to up
          self.syncWithApi()
        })
        if(navigator.onLine){   //browser property
          self.syncWithApi()
        }
    }

    syncWithApi() {
      var self = this;
      for(var id in this.state.requests){
        if(this.state.requests.hasOwnProperty(id)){
          $.ajax({url: self.Url, type: self.state.requests[id].type, contentType: 'application/json',
          data: self.state.requests[id].type == "DELETE" ? id : JSON.stringify(self.state.requests[id].data)})
        }
      }
      $.ajax({url: this.Url, type: "GET", success: function(response){
        self.setState({ items: response.notes });
      }})
      localStorage.removeItem("requests")
    }

    handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }    

    deleteNote(idx){
      var self = this
      var currentNotes = this.state.items;
      var currentRequests = this.state.requests;
      if(navigator.onLine){
        $.ajax({url: this.Url, type: "DELETE", contentType: "application/json", data: this.state.items[idx].id, success: function(response){
          self.syncWithApi()
        }})
      }else{
        isNaN(this.state.items[idx].id) ? 
            currentRequests[this.state.items[idx].id] = {"type": "DELETE", "data": this.state.items[idx].id}
            : delete currentRequests[this.state.items[idx].id]
      }
      currentNotes.splice(idx, 1);
      this.setState( {items: currentNotes, requests: currentRequests});
      console.log(this.state);

      localStorage.setItem("state", JSON.stringify(currentNotes));
      
      localStorage.setItem("requests", JSON.stringify(currentRequests));
    }
    
    addEditNote(event){
      var self = this
      console.log(this.theNote.value);
        if(this.theTitle.value !== "")
        {
            var newItem = {
                id : this.theId.value,
                title: this.theTitle.value,
                note: this.theNote.value
            };
        }
        var currentNotes = this.state.items;
        var type = "";
        // Current Title is available only on edit
        if(this.currentTitle.length > 0) {
          currentNotes.splice(this.theIndex, 1, newItem)
          type = "PUT"
         } else{
          newItem.id = Object.keys(this.state.requests).length + 1
           currentNotes = currentNotes.concat(newItem)
           type = "POST"
         }
         var currentRequests = this.state.requests;
        if(navigator.onLine){
          $.ajax({url: this.Url, type: type, data: JSON.stringify(newItem), contentType: "application/json", success: function(result, status){
            if(status==200 && type == "POST"){
              currentNotes.pop();
              newItem.id = result;
              currentNotes = currentNotes.concat(newItem)
              self.syncWithApi()
            }
          }})
        } else {
          type = isNaN(newItem.id) ? "PUT" : "POST"
            currentRequests[newItem.id] = {"type": type, "data": newItem}
        }
        this.setState({ items : currentNotes, requests: currentRequests });
        
        this.theTitle.value = "";
        this.theId.value = "";
        this.theNote.value = "";
        this.currentTitle = "";
        this.currentNote = "";
        this.theIndex = undefined;
        console.log(this.state.items);
        this.handleClose();

        event.preventDefault();
        localStorage.setItem("state", JSON.stringify(currentNotes));
        localStorage.setItem("requests", JSON.stringify(currentRequests))

    }
    
    initializeEdit(idx){
      this.theIndex = idx;
      this.currentNote = this.state.items[idx].note;
      this.currentTitle = this.state.items[idx].title;
      this.currentID = this.state.items[idx].id;
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
              <input type="hidden"
              ref={(id) => this.theId=id}
              defaultValue = {this.currentID}
              />
              <input 
              type="text" 
              placeholder="Title"
              ref={(title) => this.theTitle = title}
              defaultValue = {this.currentTitle}
              required/>
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
                  {val.note.split("\n").map((i) => {
            return <div>{i}</div>;
        })}
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
