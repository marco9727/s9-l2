import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/NavbarEpibooks";
import Welcome from "./Components/Welcome";
import Books from "./Components/Books";
import Footer from "./Components/MyFooter";
import SingleBook from "./Components/SingleBook";
import scifi from "./data/scifi.json";
import history from "./data/history.json";
import BookList from "./Components/BookList";

function App() {
  return (
    <div>
      <MyNav />
      <Welcome></Welcome>
      <SingleBook book={scifi[1]} />
      <BookList books={history} />
      <Books></Books>
      <Footer></Footer>
    </div>
  );
}

export default App;
