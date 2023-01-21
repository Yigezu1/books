import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Router } from "react-router-dom";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <div>
      <BrowserRouter> 
      <Router>    
          <div>
            <Nav />
            <switch>
              <Route exact path="/" component={Books} />
              <Route exact path="/books/:id" component={Detail} />
              <Route exact path="/books" component={Books} />
              <Route component={NoMatch} />
            </switch>
          </div>
          </Router> 
        
      </BrowserRouter>
    </div>
  );
}

export default App;
