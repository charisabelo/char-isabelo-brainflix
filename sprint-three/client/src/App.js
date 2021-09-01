import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import Upload from "./pages/Upload/Upload";
import Redirect from "./pages/Redirect/Redirect";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Body}></Route>
        <Route path="/upload" component={Upload}></Route>
        <Route path="/video/:id" component={Body}></Route>
        <Route path="/redirect" component={Redirect}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
