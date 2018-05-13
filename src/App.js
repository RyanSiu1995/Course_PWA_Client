import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainNavBar from './components/MainNavBar';
import ContentTable from './components/ContentTable';
import CourseInfo from './components/static/CourseInfo';
import CourseStaffList from './components/static/CourseStaffList';

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


const courseInfoHeaders = ['courseName', 'courseCode', 'description', 'assesment'];

const lectureTableHeaders = ['name', 'date'];
const assignmentTableHeaders = ['name', 'submissionDate'];
const tutorialTableHeaders = ['name', 'date'];


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <MainNavBar navItems={navItems} brandName="CSCI 4140" />
            <p></p>
            <Route path="/"/>  {/* make course info page default option*/}
            <Route
              exact path="/"
              render={(props) => <CourseInfo{...props} resourceUrl="/api/info" infoHeaders={courseInfoHeaders} />}
            />

            <Route
              exact path="/info"
              render={(props) => <CourseInfo{...props} resourceUrl="/api/info" infoHeaders={courseInfoHeaders} />}
            />

            <Route
              exact path="/lectures"
              render={(props) => <ContentTable {...props} resourceUrl="/api/lectures" tableHeaders={lectureTableHeaders} />}
            />
            <Route
              exact path="/assignments"
              render={(props) => <ContentTable {...props} resourceUrl="/api/assignments" tableHeaders={assignmentTableHeaders} />}
            />
            <Route
              exact path="/tutorials"
              render={(props) => <ContentTable {...props} resourceUrl="/api/tutorials" tableHeaders={tutorialTableHeaders} />}
            />
            <Route exact path="/staff" component={CourseStaffList}/>

          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
