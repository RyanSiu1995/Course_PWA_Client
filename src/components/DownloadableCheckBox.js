import React from 'react';


class DownloadableCheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  /*
  return (
      <div className="custom-control custom-checkbox">
      <input type="checkbox" name={this.props.name} onChange={this.toggle} checked={this.state.checked} className="custom-control-input" id={this.props.id} />
      <label className="custom-control-label" style={style} htmlFor={this.props.id}>{ this.props.text || '' }</label>    
      </div>
    );
  */ 

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