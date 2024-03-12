import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/NavbarEpibooks";
import Welcome from "./Components/Welcome";
import Books from "./Components/Books";
import Footer from "./Components/MyFooter";

function App() {
  return (
    <div>
      <MyNav />
      <Welcome></Welcome>
      <Books></Books>
      <Footer></Footer>
    </div>
  );
}

export default App;
