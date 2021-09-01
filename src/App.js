import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navigation from "./components/navbar";
import MovieList from "./components/movielist";
import Login from "./components/login";
import Register from "./components/register";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Container fluid>
        <Navigation />
        <div style={{ marginTop: "120px", marginBottom: "120px" }}>
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Register} />
          </Switch>
        </div>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
