import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';
import DownloadableCheckBox from './DownloadableCheckBox';

class ContentTable extends Component {

  constructor(props) {
    super(props);
    this.state = { tableItems: [] };

    this.fetchData = this.fetchData.bind(this);
    this.fetchData('localhost:8000'); // just some example url for now

  }

  fetchData(url) {
    const self = this;
    axios.get(url)
      .then(function (response) {
        const fakeResponse = [
          {
            name: 'L1',
            date: '11-11-11',
            downloaded: true
          },
          {
            name: 'L2',
            date: '11-11-11',
            downloaded: true
          },
          {
            name: 'L3',
            date: '11-11-11',
            downloaded: false
          }
        ];

        self.setState({ tableItems: fakeResponse });

      })
      .catch(function (error) {
        console.log(error);
        const fakeResponse = [
          {
            name: 'L1',
            date: '11-11-11',
            downloaded: true
          },
          {
            name: 'L2',
            date: '11-11-11',
            downloaded: true
          },
          {
            name: 'L3',
            date: '11-11-11',
            downloaded: false
          }
        ];

        self.setState({ tableItems: fakeResponse });
        self.setState({ error });
      });
  }

  render() {
    const { tableItems } = this.state;

    return (
      <div className="container">
        <br />
        <Table style={tableStyle} >
          <thead>
            <tr>
              <th>Lecture</th>
              <th>Date</th>
              <th>Link</th>
              <th>Offline</th>
            </tr>
          </thead>

          {tableItems.map(item => {
            return (
              <tbody >
                <tr>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{item.link || '--'}</td>
                  <td><DownloadableCheckBox id={item.name + '_' + item.date} /></td>
                </tr>
              </tbody>
            );
          })}

        </Table>

      </div>
    );
  }
}


const tableStyle = {
  textAlign: 'center',
};

export default ContentTable;
