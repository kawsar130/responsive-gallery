import { useState, useCallback } from 'react';
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent
} from '@dnd-kit/core';

import {
  arrayMove,
  SortableContext,
  rectSortingStrategy
} from '@dnd-kit/sortable';

import SortableItem from './SortableItem';
import { image_data } from '@/data/image_data';
import Grid from './Grid';
import Item from './Items';

const DndContainer = () => {
  const [items, setItems] = useState([...image_data]);
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragStart = useCallback((event) => {
    setActiveId(event.active.id);
  }, []);

  const handleDragEnd = useCallback((event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }, []);

  const handleDragCancel = useCallback(() => {
    setActiveId(null);
  }, []);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <Grid columns={5}>
          {items.map((item) => (
            <SortableItem key={item.id} item={item} />
          ))}
        </Grid>
      </SortableContext>

      <DragOverlay adjustScale style={{ transformOrigin: '0 0' }}>
        {activeId ? <Item id={activeId} isDragging /> : null}
      </DragOverlay>
    </DndContext>
  );
};

export default DndContainer;
