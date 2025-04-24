import { Element } from '@/types/visualisation';
import ElementHandler from '@/components/ElementHandler';

export default function RowHandler({ rows, elements }: { rows: number[] | number, elements: Element[] | Element }) {
  return (
    <div className="flex flex-row h-full w-full gap-2">
      {Array.isArray(rows) && Array.isArray(elements)
        ? rows.map((row, i) => <ElementHandler key={i} element={elements[i]} multi={true} />)
        : !Array.isArray(elements) && <ElementHandler element={elements} multi={false} />}
    </div>
  );
}
