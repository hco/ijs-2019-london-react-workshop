import React, { useState } from 'react';
import { Message } from './components/Message';
import { Message as MessageInterface } from './domain/Message';
import { MessageCompose } from './components/MessageCompose';
import { Toggle } from './components/Toggle';
import { MessageList } from './components/MessageList';

export function App() {
  const message: MessageInterface = {
    id: '143BABB9-7759-4026-A559-DC2F5E9AC09D',
    author: 'foo',
    message: 'foobar baz ',
    date: new Date().getTime()
  };

  // const messages: MessageInterface[] = [
  //   {
  //     id: '143BABB9-7759-4026-A559-DC2F5E9AC09D',
  //     author: 'foo',
  //     message: 'foobar baz ',
  //     date: new Date().getTime()
  //   },
  //   {
  //     id: '48296F88-2AC4-45AD-8D47-80B4A43E160D',
  //     author: 'bar',
  //     message: 'some message ',
  //     date: new Date().getTime()
  //   },
  //   {
  //     id: '046BA44D-B943-455B-9132-EF41362B894E',
  //     author: 'Andrey',
  //     message: 'longer message',
  //     date: new Date().getTime()
  //   }
  // ];

  const [messages, setMessages] = useState<MessageInterface[]>([]);

  const handleAddMessage = (message: MessageInterface) => {
    setMessages(function(previousMessages) {
      return [...previousMessages, message];
    });
    console.log('handleAddMessage', message);
  };

  return (
    <React.Fragment>
      <h1>Hello Park Plaza!</h1>
      <MessageCompose onAddMessage={handleAddMessage} />
      <hr />
      <MessageList messages={messages} />
      <hr />
      <Message message={message} />
    </React.Fragment>
  );
}
