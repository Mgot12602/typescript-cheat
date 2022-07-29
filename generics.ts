function getObjectKeyValues<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

interface IKeyValue {
  [key: string]: string;
}

function objectKeyValue<T extends IKeyValue>(arg: T) {}

type IKeyValue2<T> = {
  [K in keyof T]: T[K];
};

function objectKeyValue2<T extends IKeyValue2<T>>(arg: T) {}

/* make desired props optional */

type TPropsResult =
  | {
      role: string;
      privatePolicy: string;
      history: string;
      policies: string;
    }
  | {
      role: string;
      privatePolicy?: undefined;
      history?: undefined;
      policies?: undefined;
    };

type TProps = {
  role: string;
  privatePolicy: string;
  history: string;
  policies: string;
};

type ConditionalProps<T, K extends keyof T> =
  | T
  | ({ [P in keyof T as P extends K ? never : P]: T[P] } & {
      [K in keyof T]?: undefined;
    });

type ConditionalProps2<T, K extends keyof T> =
  | T
  | (Omit<T, K> & { [K in keyof T]?: undefined });

const test: ConditionalProps<TProps, "privatePolicy" | "history"> = {
  role: "foo",
  privatePolicy: "foo",
  policies: "foo",
};

const test2: ConditionalProps2<TProps, "privatePolicy" | "history"> = {
  role: "foo",
  privatePolicy: "foo",
  policies: "foo",
};

const test3: ConditionalProps<TProps, "privatePolicy" | "history"> = {
  role: "foo",
  privatePolicy: "foo",
  policies: "foo",
  history: "foo",
};
