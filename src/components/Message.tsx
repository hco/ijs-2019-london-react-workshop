import React from 'react';

interface Props {
  name: string;
  opinion: string;
}

export const Message = ({ name, opinion }: Props): JSX.Element => (
  <>
    <article>{opinion}</article>
    <footer>{name.toUpperCase()}</footer>
  </>
);
