import React from 'react';
import Hello from './components/screens/Hello';
import styled from "styled-components";
import ToDo from './components/screens/ToDo';
import FunSample from './components/screens/FunSample';
import GetReq from './components/GetReq';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<h1>Welcome to the App</h1>} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/toDo" element={<ToDo />} />
          <Route path="/funSample" element={<FunSample />} />
          <Route path="/getReq" element={<GetReq />} />
          <Route path="*" element={<h1>404 - Not Found</h1>} />  // catch-all route for invalid paths
        </Routes>        
      </Router>
    );
  }
}
const heading = styled.h1`
  color : 'red';  
  font-size : '100px';
  `;

export default App;
