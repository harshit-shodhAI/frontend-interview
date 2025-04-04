type Optional<T> = T | null;

export type TextFrame = {
  text: string;
  start_order: number;
  end_order?: Optional<number>;
}

export type EquationFrame = {
  equation: string;
  start_order: number;
  end_order?: Optional<number>;
}

export type GraphFrame = {
  equation: string[];
  point: Optional<number[]>;
  start_order: number;
  end_order?: Optional<number>;
}

export type Element = {
  id: number;
  // type: 'text' | 'equation' | 'graph';
  type: string;
  frames: (TextFrame | EquationFrame | GraphFrame)[];
}

export type Visualisation = {
  layout: (number | number[])[];
  elements: Element[];
}
