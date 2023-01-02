import './App.css';
import { SearchForm } from "./search-form/search-form"

function App() {
  return (
    <div className="App">
        <div className="container mt-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10">
              <SearchForm></SearchForm>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
