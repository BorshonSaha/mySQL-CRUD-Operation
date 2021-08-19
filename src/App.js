import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddStudent from './Components/AddStudent';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import StudentTable from './Components/StudentTable';
import UpdateStudent from './Components/UpdateStudent';

function App() {
  return (
    <div>
      <h3 className='App mt-5'>Student Information</h3>
      <Router>
        <Switch>
          <Route path="/addNewStudent">
            <AddStudent></AddStudent>
          </Route>
          <Route path="/updateStudent">
            <UpdateStudent></UpdateStudent>
          </Route>
          <Route exact path="/">
            <StudentTable></StudentTable>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
