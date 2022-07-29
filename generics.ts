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
      policies: string;
    };

type TProps = {
  role: string;
  privatePolicy: string;
  history: string;
  policies: string;
};

type PropExistsOthersRequired2<T, K extends keyof T> =
  | T
  | ({ [P in keyof T as P extends K ? never : P]: T[P] } & {
      [P in keyof T as P extends K ? P : never]?: undefined;
    });

type PropExistsOthersRequired<T, K extends keyof T> =
  | T
  | (Omit<T, K> & { [P in K]?: undefined });

const test4: PropExistsOthersRequired<TProps, "privatePolicy" | "history"> = {
  role: "foo",
  policies: "foo",
}; /* =>works */

const test: PropExistsOthersRequired<TProps, "privatePolicy" | "history"> = {
  role: "foo",
  history: "foo",
  policies: "foo",
}; /*  =>fails */

const test: PropExistsOthersRequired<TProps, "privatePolicy" | "history"> = {
  role: "foo",
  history: "foo",
  privatePolicy: "foo",
}; /*  => fails */

const test2: PropExistsOthersRequired<TProps, "privatePolicy" | "history"> = {
  role: "foo",
  privatePolicy: "foo",
  policies: "foo",
  history: "foo",
}; /* =>works */

const test3: PropExistsOthersRequired<TProps, "privatePolicy" | "history"> = {
  role: "foo",
  privatePolicy: "foo",
  policies: "foo",
  history: "foo",
}; /* => works */

const test5: PropExistsOthersRequired<TProps, "privatePolicy" | "history"> = {
  role: "foo",
  privatePolicy: "foo",
  policies: "foo",
  history: undefined,
}; /* => fails */

const test6: PropExistsOthersRequired<TProps, "privatePolicy" | "history"> = {
  role: "foo",
  privatePolicy: undefined,
  policies: "foo",
  history: "foo",
}; /* => fails */

const test7: PropExistsOthersRequired<TProps, "privatePolicy" | "history"> = {
  role: "foo",
  privatePolicy: undefined,
  policies: "foo",
  history: undefined,
}; /* => works */
