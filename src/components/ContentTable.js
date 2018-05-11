import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';
import DownloadableCheckBox from './DownloadableCheckBox';

class ContentTable extends Component {

  constructor(props) {
    super(props);
    this.state = { tableItems: [] };

    this.fetchData = this.fetchData.bind(this);

    const url = '/course/' + props.resourceUrl || '' + '?format=json';
    console.log(url);
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
        self.setState({ tableItems: response.data });

      })
      .catch(function (error) {
        console.log(error);
        self.setState({ error: error.response.data });

      });
  }

  renderTable(tableHeaders, tableItems, error) {
    if (error) {
      return (
        <div>
          <h5>
            There are some problems with Internet connection.
        </h5>
          <p>{error}</p>
        </div>

      );
    }

    return (

      <div className="container">

        <Table striped style={tableStyle} >
          <thead>
            <tr>
              {tableHeaders.map(tableHeader => {
                return (
                  <th>{tableHeader}</th>
                );
              })}
              <th>Offline</th>
            </tr>
          </thead>
          <tbody>
          {  tableItems && tableItems.map(item => {
            return (
                <tr>
                  {tableHeaders.map(tableHeader => {
                    return (
                      <td>{item[tableHeader] || '--'}</td>
                    );
                  })}
                  <td><DownloadableCheckBox id={item.id + '_' + this.props.resourceUrl} /></td>
                </tr>
            );
          })}

          </tbody>

        </Table>

      </div>
    );
  }

  render() {
    const { tableItems, error } = this.state;
    const tableHeaders = this.props.tableHeaders;
    return this.renderTable(tableHeaders, tableItems, error);
  }
}


const tableStyle = {
  textAlign: 'center',
};


export default ContentTable;
