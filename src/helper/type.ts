export type Role = "user"|"admin"
export type ImageProps = {
  src: string,
  alt: string,
  width?: number | number[],
  height?: number | number[]
}
export type Choice = {
  value:string, 
  label?:string, 
  image?: ImageProps
}
export type Choices = Choice[]

export type Option<T> = T | undefined

export const omap = <T, U>(o: Option<T>, f: (t: T) => U): Option<U> =>
  o === undefined ? undefined : f(o)

export const isToOption =
  <T>(f: (data: unknown) => data is T) =>
  (data: unknown): Option<T> =>
    f(data) ? data : undefined

export const isToNeed = 
  <T>(f: (data: unknown) => data is T) => 
  (data: unknown, error: string): T => {
    if (f(data)) return data 
    throw error
  }

export const isObject = (data: unknown): data is object =>
  typeof data == 'object' && data !== null

export const isString = (data: unknown): data is string =>
  typeof data == 'string'

export const isNumber = (data: unknown): data is number =>
  typeof data == 'number'

export const isArray = (data: unknown): data is unknown[] => 
  Array.isArray(data)

export const isBoolean = (data: unknown): data is boolean =>
  data == 0 || data == 1

export const isEmail = (data: unknown): data is string => {
  const email: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  return isString(data) && email.test(data)
}

export const toOptObject  = isToOption(isObject)
export const toOptString  = isToOption(isString)
export const toOptNumber  = isToOption(isNumber)
export const toOptArray   = isToOption(isArray)
export const toOptBoolean = isToOption(isBoolean)
export const toOptEmail   = isToOption(isEmail)

export const needObject  = isToNeed(isObject)
export const needString  = isToNeed(isString)
export const needNumber  = isToNeed(isNumber)
export const needArray   = isToNeed(isArray)
export const needBoolean = isToNeed(isBoolean)
export const needEmail   = isToNeed(isEmail)

