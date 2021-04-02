import React from "react";
import { Switch, Route } from "react-router-dom";
import BookList from "./components/BookList";
import BookView from "./components/BookView";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen ">
        <div>
          <Header />
        </div>
        <div className="flex  flex-grow overflow-y-auto justify-center">
          <Switch>
            <Route exact path="/books/:bookId">
              <BookView />
            </Route>
            <Route path="/">
              <BookList />
            </Route>
          </Switch>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
