import React from 'react';


class DownloadableCheckBox extends React.Component {
  constructor(props) {
    super(props);

    const initialValue = props.initialChecked? true: false;
    this.state = {
      checked: initialValue,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { handleCheckboxChange, table, label } = this.props;
    this.setState({
      checked: !this.state.checked,
    });
    //console.log('checkbox ', label, 'toggled');
    handleCheckboxChange(table, label);
  }

  render() {
    return (
      <div>
        <input type="checkbox" className="form-check-input" style ={checkBoxStyle} name={this.props.name} onChange={this.toggle} id={this.props.id} checked={this.state.checked} />
        <label className="form-check-label" htmlFor={this.props.id}>{this.props.text || ''}</label>
      </div>
    );
    
    
      }
  }
    
export default DownloadableCheckBox;


const checkBoxStyle = {
  //margin: 'auto'
  width: '1rem',
  height: '1rem'
}