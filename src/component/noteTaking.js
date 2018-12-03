import React, { Component } from 'react';


class NoteTaking extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: []
        }

        this.addNote = this.addNote.bind(this);
    }

    addNote(event){
        console.log("working");
        if(this.theTitle.value !== "")
        {
            var newItem = {
                title: this.theTitle.value,
                note: this.theNote.value
            };
        }
        this.setState((prevState) => {
            return{
                items: prevState.items.concat(newItem)
            }
        });
        
        this.theTitle.value = "";
        this.theNote.value = "";
        console.log("this.state.items");


        event.preventDefault();

    }
    render() {
    return (
      <div>
        <header><h1>Noteable</h1></header>
        <div className="main-content">
         <ul>
             {this.state.items.map((val) => <li>{val.title} : {val.note}</li>)}
         </ul>
      </div>
      <footer>
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
      </footer>

      </div>
    );
  }
}

export default NoteTaking;
