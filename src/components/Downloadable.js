import React from 'react';
import { ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';
import DownloadableCheckBox from './DownloadableCheckBox';


// test data
const offlineItems = [{
  name: 'Web applications',
  date: '11.11.1111',
  downloaded: true
  },
  {
    name: 'ggg',
    date: '11.11.1111',
    downloaded: false 
  },
  {
    name: 'something',
    date: '11.11.1111',
    downloaded: true },
]

function renderItem(item){
  if (item.downloaded===true) {
    return (
      <ListGroupItem key={item.name}>
      { item.name || '--' }
      { item.date || '--' }
      <div>Downloaded</div>
      <DownloadableCheckBox id={item.name}/>
      </ListGroupItem>
    );
  } else {
    return (
      <ListGroupItem key={item.name}>
      { item.name || '--' }
      { item.date || '--' }
      <div className="float-left">Not Downloaded</div>
      <DownloadableCheckBox id={item.name} />
      </ListGroupItem>
    );
  }
}



const Downloadable = () => {
  return (
    offlineItems.map(renderItem)
  );
     
    
};


/*
Downloadable.propTypes = {
        attributes = PropTypes.array.isRequired
      };
      */

export default Downloadable;
