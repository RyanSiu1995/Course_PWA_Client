import React, { Component } from 'react';
import axios from 'axios';

class CourseInfo extends Component {

  constructor(props) {
    super(props);
    this.state = { infoItems: [] };

    this.fetchData = this.fetchData.bind(this);

    const url = '/course/' + props.resourceUrl || '' + '?format=json';
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
        self.setState({ infoItems:response.data });

      })
      .catch(function (error) {
        console.log(error);
        //self.setState({ error: error.response.data });

      });
  }

  renderInfo(infoHeaders, infoItem, error) {
    if (error) {
      return (
        <div id="error">
          <h5>
            There are some problems with Internet connection.
        </h5>
          <p>{error}</p>
        </div>

      );
    }
    console.log(infoItem);
    const courseName = infoItem && infoItem.courseName && infoItem.courseCode ? (
      <h2>{infoItem.courseName} {infoItem.courseCode}</h2>
    ):(<div></div>);

    const description = infoItem && infoItem.description ? (
      <div id="description"><p>{infoItem.description}</p></div>
    ):(<div id="description"></div>);

    const assessment = infoItem && infoItem.assessment ? (
      <div id="assessment"><p>{infoItem.assessment}</p></div>
    ):(<div id="assessment"></div>);

    return (

      <div className="container">
        {courseName}
        {description}
        {assessment}
      </div>
    );
  }

  render() {
    const { infoItems, error } = this.state;
    const infoItem = infoItems[0];
    const infoHeaders = this.props.infoHeaders;

    if (error) {
      return (
        <div id="error">
          <h5>
            There are some problems with Internet connection.
        </h5>
          <p>{error}</p>
        </div>

      );
    }
    console.log(infoItem);
    const courseName = infoItem && infoItem.courseName && infoItem.courseCode ? (
      <h2>{infoItem.courseName} {infoItem.courseCode}</h2>
    ):(<div></div>);

    const description = infoItem && infoItem.description ? (
      <div id="description">
      <h4>Description</h4>
      <p>{infoItem.description}</p></div>
    ):(<div id="description"></div>);

    const assessment = infoItem && infoItem.assessment ? (
      <div id="assessment"><h4>Assessment</h4><p>{infoItem.assessment}</p></div>
    ):(<div id="assessment"></div>);

    return (

      <div className="container">
        {courseName}
        {description}
        {assessment}
      </div>
    );

  }
}


export default CourseInfo;
