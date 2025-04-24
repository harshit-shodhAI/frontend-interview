import { Element } from '@/types/visualisation';

export default function ElementHandler({ element, multi }: { element: Element, multi: boolean }) {
  return (
    <div className={`flex flex-row h-full w-full items-center ${multi ? element.id % 2 === 0 ? 'justify-start' : 'justify-end' : 'justify-center'}`}>
      {element.type}
    </div>
  );
}
