import React from 'react';
import {
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';


function renderItem(navItem){
  if (!navItem.dropDrownItems) {
    return (
      <NavItem key={navItem.name} >
        <NavLink href={'/' + navItem.route}> {navItem.name} </NavLink>
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

const NavItems = (props) => {
  //console.log(navItems);
  return (
    props.navItems.map(renderItem)
  );

};

export default NavItems;
