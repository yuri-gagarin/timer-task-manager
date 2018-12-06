import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

class ToolBar extends Component {
  constructor(props) {
    super(props);

    this.displaySearch = this.displaySearch.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  handleSort(event, {name}) {
    this.props.displaySorted(name);
  }
  displaySearch(event) {
    console.log(event.target.value);
  }
  render() {
    const  activeItem  = this.props.activeItem;
    console.log(activeItem);

    return (
      <Menu secondary stackable>
        <Menu.Item name='All' 
          active={activeItem === 'All'} 
          onClick={this.handleSort} />
        <Menu.Item
          name='Timers'
          active={activeItem === 'Timers'} onClick={this.handleSort}
        />
        <Menu.Item
          name='Countdown Timers'
          active={activeItem === 'Countdown Timers'} onClick={this.handleSort}
        />
        <Menu.Item 
          name="Most Recent"
          active={activeItem === "Most Recent"} onClick={this.handleSort}
        />
        <Menu.Item
          name="Oldest"
          active={activeItem === "Oldest"} onClick={this.handleSort} 
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' onChange={this.displaySearch} onClick={()=> {console.log("Hello")}} />
          </Menu.Item>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}

export default ToolBar;