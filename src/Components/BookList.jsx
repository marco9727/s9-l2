import { Component } from "react";
import SingleBook from "./SingleBook";

class BookList extends Component {
  render() {
    return (
      <div>
        {/* Crea un componente BookList. Questo componente riceverà dalle prop un array di libri, e li visualizzerà 
        attraverso un .map() ritornando per ogni elemento il componente SingleBook. Successivamente monta BookList dentro
         il componente App, e forniscigli una lista di libri da uno dei file .json come prop. Dovresti ottenere a schermo
          un risultato simile al componente AllTheBooks: ora però la struttura è molto più modulare e riutilizzabile. 
          per questo esercizio una volta inserito il componente in app.js faccio la props={(un array di libri qualsiasi messo a 
          disposizione)} riprendo la props e la inserisco nella componente dove parto col fare map con this.props.books.map
          poi come paramtero inserisco b ovvero ogni libro che poi si andra a creare e insrisco poi nel map la componente singlebook
        poi devo mettere obbligatoriamente la prop del libro messa in precedenza come prop in app.js
        cosi che mi possa uscire effettivamente l'array dei libri e dove la b tra le graffe è appunto il parametro che comprende 
        la serie di libri*/}
        {this.props.books.map((b) => (
          <SingleBook book={b} key={b.asin} />
        ))}
      </div>
    );
  }
}

export default BookList;
