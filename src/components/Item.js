import React, { forwardRef } from 'react';

const Item = forwardRef(({ id, style, index, faded, ...props }, ref) => {
  const inlineStyles = {
    opacity: faded ? '0.2' : '1',
    transformOrigin: '0 0',
    gridRowStart: index === 0 ? 'span 2' : null, // if the item is on first index, we assume that the item is the Featured Product. So, it will be spanned to 2 row
    gridColumnStart: index === 0 ? 'span 2' : null, // as said above, it will be spanned to 2 column
    backgroundImage: `url("${props.item.image}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    ...style
  };

  return (
    <div
      ref={ref}
      style={inlineStyles}
      {...props}
      className={`${
        index === 0 ? 'sm:w-96 sm:h-96 w-72 h-72' : 'sm:w-44 sm:h-44 w-32 h-32'
      } border-2 transition-colors duration-500 rounded-2xl shadow relative hover:bg-gray-300 hover:bg-blend-darken`}
    />
  );
});

Item.displayName = 'Item';

export default Item;
