import React, { Component } from 'react';
import { Table } from 'reactstrap';
import DownloadableCheckBox from './DownloadableCheckBox';

class ContentTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tableItems: []
    };

    this.resourceUrl = props.resourceUrl
    this.selectedCheckboxes = new Set();  // records all selected checkboxes
    this.fetchData = this.fetchData.bind(this);

    console.log('request url:', this.resourceUrl);
    this.fetchData(this.resourceUrl);

  }

  fetchData(url) {
    const self = this;
    fetch(url)
      .then((response) => response.json())
      .then(function (data) {
        console.log(data);
        self.setState({ tableItems: data });
      })
      .catch(function (error) {
        console.log(error);
        self.setState({ error: error.toString() });
      });
  }

  checkedInLocalStorage = (table, id) => {
    /* loads checkboxes from local storage*/
    if (typeof (Storage) !== 'undefined') {
      const key = table + '_' + id.toString();

      if (localStorage.getItem(key) === 'checked') {
        this.selectedCheckboxes.add(id);
        //console.log('checkboxes:', this.selectedCheckboxes);
        return true;
      } else {
        return false;
      }
    } else {
      console.log('No web storage support.');
      return false;
    }

  }

  saveToLocalStorage = (table, id) => {
    if (typeof (Storage) !== 'undefined') {
      const key = table + '_' + id.toString();
      localStorage.setItem(key, 'checked');
    } 
  }

  removeFromLocalStorage = (table, id) => {
    if (typeof (Storage) !== 'undefined') {
      const key = table + '_' + id.toString();
      localStorage.removeItem(key);
    } 
  }

  toggleCheckbox = (table, label) => {
    /* when toggling checkbox, save the state to this ContentTable component and localstore*/
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
      //console.log('checkboxes:', this.selectedCheckboxes);
      this.removeFromLocalStorage(this.resourceUrl, label);
    } else {
      this.selectedCheckboxes.add(label);
      //console.log('checkboxes:', this.selectedCheckboxes);
      this.saveToLocalStorage(this.resourceUrl, label);
    }
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
              <th>Link</th>
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
                  <td><a href="/files/test.pdf">PDF</a></td>
                  <td>
                    <DownloadableCheckBox 
                    id={item.id + '_' + this.resourceUrl}
                    label={item.id}
                    table={this.resourceUrl}
                    initialChecked={this.checkedInLocalStorage(this.resourceUrl, item.id)}
                    handleCheckboxChange={this.toggleCheckbox}
                    />
                  </td>
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
