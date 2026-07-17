export type InferTuple<T> = T extends ReadonlyArray<infer U> ? U : never;
