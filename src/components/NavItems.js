import React from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';


const navItems = [{
  name: 'L1'
},
{
  name: 'L2'
},
{
  name: 'L3',
  dropDrownItems: ['DropdownItem1', 'DropdownItem2', 'DropdownItem3']
}];

function renderItem(navItem){
  if (!navItem.dropDrownItems) {
    return (
      <NavItem key={navItem.name} >
        <NavLink href="#"> {navItem.name} </NavLink>
      </NavItem>
    );
  } else {
    return (
        <UncontrolledDropdown nav inNavbar key={navItem.name}>
          <DropdownToggle nav caret>
            {navItem.name}
          </DropdownToggle>
          <DropdownMenu right>
            {navItem.dropDrownItems.map(dropDownItem => {
              return (
                <DropdownItem key={dropDownItem}> { dropDownItem } </DropdownItem>
              );
            })}
          </DropdownMenu>
          
        </UncontrolledDropdown>
    );
  }
}

const NavItems = () => {
  //console.log(navItems);
  return (
    navItems.map(renderItem)
  );

};

export default NavItems;
