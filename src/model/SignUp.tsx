export type SignUpType = {
  name?: string;
  email?: string;
  password?: string;
  termList: Check[];
};

export type NextStep = {
  name: boolean;
  email: boolean;
  password: boolean;
  essential: boolean;
};

export type Check = {
  checked: boolean;
  essential: boolean;
};
