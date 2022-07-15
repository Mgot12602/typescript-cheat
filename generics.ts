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
