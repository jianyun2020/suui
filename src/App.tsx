import React from 'react';
import Button from './components/Button/button';

function App() {
  return (
    <div className="App">
      <Button>Default</Button>
      <br />
      <Button className='custom' onClick={(e) => {e.preventDefault(); alert('hh')}}  btnType='primary'>Primary</Button>
      <br />
      <Button btnType='primary' disabled>Primary Disabled</Button>
      <br />
      <Button btnType='primary' size={'lg'}>Primary</Button>
      <br />
      <Button btnType='primary' size={'sm'}>Primary</Button>
      <br />
      <Button btnType={'danger'}>Danger</Button>
      <br />
      <Button btnType={'link'} href="https://www.baidu.com">Link</Button>
      <br />
      <Button btnType={'link'} href="https://www.baidu.com" disabled>Link Disabeld</Button>

    </div>
  );
}

export default App;
