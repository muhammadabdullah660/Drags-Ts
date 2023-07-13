import { AnyAction } from "redux";

//this is defined as a type where the type is a string and the payload is any
export type ActionWithPayload<T, P> = AnyAction & {
  type: T;
  payload: P;
};

// this is defined as a type where the type is a string and the payload is void
export type ActionWithoutPayload<T> = AnyAction & {
  type: T;
};

export type Action<T, P> = ActionWithPayload<T, P> | ActionWithoutPayload<T>;

// this createAction overload is used when payload is provided
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

// this createAction overload is used when payload is not provided
export function createAction<T extends string>(
  type: T,
  payload?: void
): ActionWithoutPayload<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
