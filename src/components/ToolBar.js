import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

class ToolBar extends Component {
  constructor(props) {
    super(props);

    this.handleSort = this.handleSort.bind(this);
  }

  handleSort(event, {name}) {
    this.props.displaySorted(name);
  }
  render() {
    const  activeItem  = this.props.activeItem;
    console.log(activeItem);

    return (
      <Menu secondary>
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
            <Input icon='search' placeholder='Search...' />
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