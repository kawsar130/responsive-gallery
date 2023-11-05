import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Image from 'next/image';

const SortableItem = ({ item }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: item.id,
      transition: {
        duration: 500,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)'
      }
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="w-60 h-60 relative border-2 shadow bg-gray-200 rounded-xl"
    >
      <Image src={item?.image} alt="image" fill />
    </div>
  );
};
export default SortableItem;
