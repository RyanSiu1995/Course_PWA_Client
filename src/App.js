import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainNavBar from './components/MainNavBar';
import ContentTable from './components/ContentTable';

const navItems = [{
  name: 'Course info',
  route: 'info'
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

const lectureTableHeaders = ['name', 'date', 'upload'];
const assignmentTableHeaders = ['name', 'submissionDate', 'upload'];
const tutorialTableHeaders = ['name', 'date', 'upload'];


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <MainNavBar navItems={navItems} brandName="CSCI 4140" />
            <Route path="/"/>  {/* make course info page default option*/}
            {/*
              <Route exact path="/lectures" component={LectureTable} />
            */}
            
            <Route
              exact path="/lectures"
              render={(props) => <ContentTable {...props} resourceUrl="lt_note" tableHeaders={lectureTableHeaders} />}
            />
            <Route
              exact path="/assignments"
              render={(props) => <ContentTable {...props} resourceUrl="assignment" tableHeaders={assignmentTableHeaders} />}
            />
            <Route
              exact path="/tutorials"
              render={(props) => <ContentTable {...props} resourceUrl="tutorial_note" tableHeaders={tutorialTableHeaders} />}
            />
            {/*
              <Route exact path="/assignments" component={ContentTable} />
            <Route exact path="/tutorials" component={ContentTable} />
            */}
            
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
