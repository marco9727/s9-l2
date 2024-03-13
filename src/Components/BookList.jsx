import { Component } from "react";
import SingleBook from "./SingleBook";

class BookList extends Component {
  render() {
    return (
      <div>
        {this.props.books.map((books) => (
          <SingleBook book={books} key={books.asin} />
        ))}
      </div>
    );
  }
}

export default BookList;
