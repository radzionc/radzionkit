import { randomlyPick } from './randomlyPick'

type RandomlyPickOptionInput<T> = {
  used: T[]
  options: T[]
}

export const randomlyPickOption = <T>({
  used,
  options,
}: RandomlyPickOptionInput<T>): T => {
  const freeOptions = options.filter((option) => !used.includes(option))

  const target = freeOptions.length ? freeOptions : options

  return randomlyPick(target)
}
