import Image from 'next/image';
import React, { forwardRef } from 'react';

const Item = forwardRef(({ id, style, index, faded, ...props }, ref) => {
  const inlineStyles = {
    opacity: faded ? '0.2' : '1',
    transformOrigin: '0 0',
    gridRowStart: index === 0 ? 'span 2' : null,
    gridColumnStart: index === 0 ? 'span 2' : null,
    backgroundImage: `url("${props.item.image}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'grey',
    ...style
  };

  return (
    <div
      ref={ref}
      style={inlineStyles}
      {...props}
      className={`${
        index === 0 ? 'w-96 h-96' : 'w-44 h-44'
      } border-2 rounded-2xl shadow`}
    />
  );
});

Item.displayName = 'Item';

export default Item;
