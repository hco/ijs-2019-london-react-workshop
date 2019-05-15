import React from 'react';
import { Message } from '../domain/Message';

interface Props {
  messages: Message[];
}

export const MessageList = (props: Props) => {
  return (
    <ul>
      {props.messages.map(message => {
        return <li key={message.id}>{message.message}</li>;
      })}
    </ul>
  );
};
