import React, { Component } from 'react';
import axios from 'axios';
import CourseStaffItem from './CourseStaffItem';

class CourseStaffList extends Component {

  constructor(props) {
    super(props);
    this.state = { staffItems: [] };

    this.fetchData = this.fetchData.bind(this);

    const url = '/course/' + 'teaching_staff' || '' + '?format=json';
    console.log('request to:', url);
    this.fetchData(url);

  }

  fetchData(url) {
    const self = this;
    axios({
      method: 'get',
      url: url
    })
      .then(function (response) {

        console.log(response);
        self.setState({ staffItems: response.data });

      })
      .catch(function (error) {
        console.log(error);
        self.setState({ error: error.response.data });

      });
  }


  render() {
    const { staffItems, error } = this.state;
    const infoHeaders = this.props.infoHeaders;
    console.log(staffItems);

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
