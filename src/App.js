import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainNavBar from './components/MainNavBar';
import ContentTable from './components/ContentTable';

const navItems = [{
  name: 'Course info',
  route: 'course_info'
},
{
  name: 'Lectures',
  route: 'lectures'
},
{
  name: 'Assignments',
  route: 'assignments'
},
{
  name: 'Tutorials',
  route: 'tutorials'
},
{
  name: 'Staff',
  route: 'staff'
}];


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <MainNavBar navItems={navItems} brandName="CSCI 4140" />
            <Route path="/"/>  {/* make course info page default option*/}
            <Route exact path="/lectures" component={ContentTable} />
            <Route exact path="/assignments" component={ContentTable} />
            <Route exact path="/tutorials" component={ContentTable} />
            <Route exact path="/staff"/>
            {/*
            <Route
              path='/dashboard'
              render={(props) => <Dashboard {...props} isAuthed={true} />}
            />
            */}
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
