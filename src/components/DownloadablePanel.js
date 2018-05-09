import React, { Component } from 'react';
import { Card, CardHeader, Collapse, CardBody, ListGroup, ListGroupItem } from 'reactstrap';
import Downloadable from './Downloadable';
import DownloadableCheckBox from './DownloadableCheckBox';

class DownloadablePanel extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: 0, cards: [1, 2, 3, 4, 5] };
  }

  toggle(e) {
    const event = e.target.dataset.event;
    this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
  }
  render() {
    const { cards, collapse } = this.state;
    return (
      <div >
        {cards.map(index => {
          return (
            <Card style={{ marginBottom: '1rem' }} key={index}>
              <CardHeader onClick={this.toggle} data-event={index}>Header data
              <DownloadableCheckBox id={index}/>
              </CardHeader>
              <Collapse isOpen={collapse === index}>
                <CardBody>
                  <ListGroup>
                    <Downloadable attributes={[1, 2, 3, 4]} />
                  </ListGroup>
                </CardBody>
              </Collapse>
            </Card>
          );
        })}

      </div>
    );
  }
}

export default DownloadablePanel;
