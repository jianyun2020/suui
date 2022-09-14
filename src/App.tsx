import React from 'react';
import Alert from './components/Alert/alert';

function App() {
  return (
    <div className="App">
      <Alert message='我是标题' description='我是描述' />
      <Alert message='我是标题' type='success' />
      <Alert message='我是标题' type='danger' />
      <Alert message='我是标题' type='warning' />
    </div>
  );
}

export default App;
