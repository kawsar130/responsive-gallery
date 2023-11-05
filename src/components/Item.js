import Image from 'next/image';
import React, { forwardRef } from 'react';

const Item = forwardRef(
  ({ id, withOpacity, isDragging, style, index, ...props }, ref) => {
    const inlineStyles = {
      opacity: withOpacity ? '0.5' : '1',
      transformOrigin: '50% 50%',
      borderRadius: '20px',
      cursor: isDragging ? 'grabbing' : 'grab',
      backgroundColor: '#ffffff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: isDragging
        ? 'rgb(63 63 68 / 5%) 0px 2px 0px 2px, rgb(34 33 81 / 15%) 0px 2px 3px 2px'
        : 'rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(34 33 81 / 15%) 0px 1px 3px 0px',
      // transform: isDragging ? 'scale(1.05)' : 'scale(1)',
      ...style
    };

    return (
      <div
        ref={ref}
        style={inlineStyles}
        {...props}
        className={`shadow-lg rounded-xl overflow-hidden ${
          index === 0 && 'col-span-2 row-span-2'
        }`}
      >
        <Image
          src={props.item?.image}
          sizes="500px"
          alt="image"
          width={index === 0 ? 400 : 200}
          height={index === 0 ? 400 : 200}
          style={{ borderRadius: '20px' }}
        />
      </div>
    );
  }
);

Item.displayName = 'Item';

export default Item;