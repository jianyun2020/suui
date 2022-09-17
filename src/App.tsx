import React from 'react';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';

function App() {
  return (
    <div className="App">
     <Menu defaultIndex={0} onSelect={(index) => alert(index)}>
      <MenuItem index={0}>
        link1
      </MenuItem>
      <MenuItem index={1} disabled>
        link2
      </MenuItem>
      <MenuItem index={2}>
        link3
      </MenuItem>
     </Menu>
     <br />
     <Menu mode='vertical'  defaultIndex={0} onSelect={(index) => alert(index)}>
      <MenuItem index={0}>
        link1
      </MenuItem>
      <MenuItem index={1} disabled>
        link2
      </MenuItem>
      <MenuItem index={2}>
        link3
      </MenuItem>
     </Menu>
    </div>
  );
}

export default App;
