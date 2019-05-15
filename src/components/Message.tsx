import React from 'react';

interface Props {
  name?: string;
  opinion: string;
}

export const Message = ({ name, opinion }: Props): JSX.Element => {
  return (
    <article>
      {opinion}
      {name && <footer>{name.toUpperCase()}</footer>}
    </article>
  );
};
