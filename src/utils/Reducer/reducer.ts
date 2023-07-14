import { AnyAction } from "redux";
// matchable is a type that is a function that returns an action, and the type of the action is the return type of the function
// & is used to combine types
type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>["type"];
  match(action: AnyAction): action is ReturnType<AC>;
};

export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

//below withMatcher is for when the action creator has a payload
export function withMatcher<
  AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

// below withMatcher is the implementation of the above withMatcher
export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type;
    },
  });
}

//this is defined as a type where the type is a string and the payload is any
export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

// this is defined as a type where the type is a string and the payload is void
export type ActionWithoutPayload<T> = {
  type: T;
};

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
