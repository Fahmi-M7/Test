import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

function App(){
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Router>
            <Routes>
              <Route path="/" element={<ProductList />}/>
              <Route path="/add" element={<AddProduct />}/>
              <Route path="/edit/:id" element={<EditProduct/>}/>
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}
export default App;

