import React, { Component } from 'react';
import CourseStaffItem from './CourseStaffItem';

class CourseStaffList extends Component {

  constructor(props) {
    super(props);
    this.state = { staffItems: [] };

    this.fetchData = this.fetchData.bind(this);

    const url = '/api/staff';
    console.log('request to:', url);
    this.fetchData(url);

  }

  fetchData(url) {
    const self = this;
    fetch(url)
      .then((response) => response.json())
      .then(function(data){
        console.log(data);
        self.setState({ staffItems: data });
      })
      .catch(function (error) {
        console.log(error);
        self.setState({ error: error.toString()});
      });
  }


  render() {
    const { staffItems, error } = this.state;
    //console.log(staffItems);

    if (error) {
      return (
        <div id="error">
          <h5>
            Please connect to Internet to view the content.
        </h5>
          <p>{error}</p>
        </div>

      );
    }

    return (
      <div className="container course-staff-list" >
        {staffItems.map(staff => {
          return (
            <div style={style} className="col-sm-6">
              <CourseStaffItem staff={staff} />
            </div>
          );

        })}
      </div>
    );

  }
}


const style = {
  float:'left'
};

export default CourseStaffList;
