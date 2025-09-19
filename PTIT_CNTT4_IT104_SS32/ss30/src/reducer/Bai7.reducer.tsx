
export type Account = {
  email: string;
  password: string;
};

type Action =
  | { type: "REGISTER"; payload: Account };

const initial: Account | null = null;

export const accountReducer = (
  state: Account | null = initial,
  action: Action
): Account | null => {
  switch (action.type) {
    case "REGISTER":
      return action.payload;
    default:
      return state;
  }
};
