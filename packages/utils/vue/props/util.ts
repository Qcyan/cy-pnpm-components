export type Writable<T> = { readonly [P in keyof T]: T[P] }


export type WritableArray<T> = T extends readonly any[] ? Writable<T> : T

export type IfNever<T, Y = true, N = false> = [T] extends [never] ? Y : N
