import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const CourseStaffItem = (props) => {
    const staff = props.staff;

    console.log('staff:', staff);
    const name = staff && staff.name ? (
      <h3>{staff.name}</h3>
    ) : (<div></div>);

    const contactFields = ['email', 'phone', 'location', 'lecturer', 'extra'];
    const contactElements = staff ? contactFields.map(field => {
      return (
        staff[field] ? (
          <ListGroupItem id={staff.id.toString() + '-' + field} key={'staff' + staff.id.toString() + '-' + field}>
            {staff[field]}
          </ListGroupItem>) : (<div id={staff.id + '-' + field}></div>)
      );
    }): ([]);  // return empty list if staff doesn't exist

    return (
      <div key={'staff-' + staff ? staff.id.toString(): '' } className="course-staff-item">
        {name}
        <h5>Contact Information</h5>
        <ListGroup>
          {contactElements}
        </ListGroup>
      </div>
    );

  }


export default CourseStaffItem;
