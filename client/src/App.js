import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Nav from "./components/Nav/Nav";
import { Landing, Home, About, Detail, Form } from "./views";
import { Route } from "react-router-dom";

function App() {

  const location = useLocation()
  //console.log(location.pathname);
  return (
    <div className="App">
      {location.pathname !== "/" && <Nav />}
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/form" component={Form} />
      <Route path="/about" component={About} />
      <Route path="/detail/:id" component={Detail} />
    </div>
  );
}

export default App;
