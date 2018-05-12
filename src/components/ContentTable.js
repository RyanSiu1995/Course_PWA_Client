import React, { Component } from 'react';
import { Table } from 'reactstrap';
import DownloadableCheckBox from './DownloadableCheckBox';

class ContentTable extends Component {

  constructor(props) {
    super(props);
    this.state = { tableItems: [] };

    this.fetchData = this.fetchData.bind(this);
    console.log('request url:', props.resourceUrl);
    this.fetchData(props.resourceUrl);

  }

  fetchData(url) {
    const self = this;
    fetch(url)
      .then((response) => response.json())
      .then(function(data){
        console.log(data);
        self.setState({ tableItems: data });
      })
      .catch(function (error) {
        console.log(error);
        self.setState({ error: error.toString()});
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
            {tableItems && tableItems.map(item => {
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
