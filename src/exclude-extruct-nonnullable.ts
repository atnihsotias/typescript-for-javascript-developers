export {};

type DebugType = ()=> void;
type SomeTypes = string | number | DebugType;

type FunctionType = Exclude<SomeTypes, string | number>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;