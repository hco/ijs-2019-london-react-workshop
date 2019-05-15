import React from 'react';
import { Message } from './components/Message';

export function App() {
  return (
    <React.Fragment>
      <h1>Hello Park Plaza!</h1>
      <Message name="Andrey" opinion="asd" />
    </React.Fragment>
  );
}
