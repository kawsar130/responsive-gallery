import { useState, useCallback } from 'react';
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors
} from '@dnd-kit/core';

import {
  arrayMove,
  SortableContext,
  rectSortingStrategy
} from '@dnd-kit/sortable';

import SortableItem from './SortableItem';
import { image_data } from '@/data/image_data';
import Grid from './Grid';
import Item from './Item';

import photos from '../data/image_data.json';

const DndContainer = () => {
  const [items, setItems] = useState(photos); // Items to show in the container
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor)); // defining which sensors to use for Mouse and Touch devices

  // setting active ID when drag is being used
  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  // actions when drag ends
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  };

  const handleDragCancel = (event) => {
    setActiveId(null);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        {/* Items container */}
        <Grid>
          {items.map((item, index) => (
            <SortableItem key={item.id} item={item} index={index} />
          ))}
        </Grid>
      </SortableContext>

      {/* Drag overlay when dragging item */}
      <DragOverlay adjustScale={true}>
        {activeId ? (
          <Item
            id={activeId}
            item={items.find((item) => item.id === activeId)}
          />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default DndContainer;
