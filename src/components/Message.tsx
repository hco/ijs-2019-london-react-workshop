import React from 'react';
import { Message as MessageInterface } from '../domain/Message';

interface Props {
  message: MessageInterface;
}
export const Message = ({ message }: Props): JSX.Element => {
  return (
    <article>
      {message.message}
      <footer>{message.author.toUpperCase()}</footer>
    </article>
  );
};
