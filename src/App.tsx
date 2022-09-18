import React from 'react';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';

function App() {
  return (
    <div className="App">
     <Menu defaultIndex={'0'} onSelect={(index) => alert(index)} defaultOpenSubMenu={['2']}>
      <MenuItem >
        link1
      </MenuItem>
      <MenuItem  disabled>
        link2
      </MenuItem>

      <SubMenu title='dropdown'>
        <MenuItem>
          下拉1哈哈哈哈
        </MenuItem>
        <MenuItem disabled>
          下拉2
        </MenuItem>
        <MenuItem>
          下拉3
        </MenuItem>
      </SubMenu>

      <MenuItem >
        link3
      </MenuItem>
     </Menu>
     <br />
     <Menu mode='vertical'  defaultIndex={'0'} onSelect={(index) => alert(index)} defaultOpenSubMenu={['2']}>
      <MenuItem >
        link1
      </MenuItem>
      <MenuItem  disabled>
        link2
      </MenuItem>

      <SubMenu title='dropdown'>
        <MenuItem>
          下拉1
        </MenuItem>
        <MenuItem disabled>
          下拉2
        </MenuItem>
        <MenuItem>
          下拉3
        </MenuItem>
      </SubMenu>
      <MenuItem >
        link3
      </MenuItem>
     </Menu>
    </div>
  );
}

export default App;
