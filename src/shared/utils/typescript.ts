export type addPrefixToObject<T, P extends string> = {
  [K in keyof T as K extends string ? `${P}${K}` : never]: T[K];
};

export type StyledComponentsProps = addPrefixToObject<React.CSSProperties, "$">;
