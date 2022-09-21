
import React from "react";
import Menu from "./components/Menu/menu";
import SubMenu from "./components/Menu/subMenu";
import MenuItem from "./components/Menu/menuItem";

function App() {
  return (
    <div className="App">
      <Menu>
        <MenuItem>active</MenuItem>
        <MenuItem disabled>disabled</MenuItem>
        <MenuItem>xyz</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>drop1</MenuItem>
        </SubMenu>
        <SubMenu title="opened">
          <MenuItem>opened1</MenuItem>
        </SubMenu>
      </Menu>
      <Menu mode="vertical">
        <MenuItem>active</MenuItem>
        <MenuItem disabled>disabled</MenuItem>
        <MenuItem>xyz</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>drop1</MenuItem>
        </SubMenu>
        <SubMenu title="opened">
          <MenuItem>opened1</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default App;
