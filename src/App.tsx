import React from 'react';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';

function App() {
  return (
    <div className="App">
     <Menu defaultIndex={0} onSelect={(index) => alert(index)}>
      <MenuItem >
        link1
      </MenuItem>
      <MenuItem  disabled>
        link2
      </MenuItem>
      <MenuItem >
        link3
      </MenuItem>
     </Menu>
     <br />
     <Menu mode='vertical'  defaultIndex={0} onSelect={(index) => alert(index)}>
      <MenuItem >
        link1
      </MenuItem>
      <MenuItem  disabled>
        link2
      </MenuItem>
      <MenuItem >
        link3
      </MenuItem>
     </Menu>
    </div>
  );
}

export default App;
