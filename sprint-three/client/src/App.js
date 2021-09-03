import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Body from "./pages/Body/Body";
import Upload from "./pages/Upload/Upload";
import Redirect from "./pages/Redirect/Redirect";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Body}></Route>
        <Route path="/upload" component={Upload}></Route>
        <Route path="/videos/:id" component={Body}></Route>
        <Route path="/redirect" component={Redirect}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
