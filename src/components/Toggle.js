import React, { useState, useCallback } from 'react';
import { Button } from './Button';
export function Toggle({ value }) {
  const [isToggleOn, setToggle] = useState(false);
  const handleClick = useCallback(() => {
    setToggle(current => !current);
  }, [isToggleOn]);
  return <Button onClick={handleClick}>{isToggleOn ? 'ON' : 'OFF'}</Button>;
}
