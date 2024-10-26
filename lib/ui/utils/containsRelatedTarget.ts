export const containsRelatedTarget = ({
  currentTarget,
  relatedTarget,
}: Pick<FocusEvent, 'currentTarget' | 'relatedTarget'>) => {
  if (
    currentTarget instanceof HTMLElement &&
    relatedTarget instanceof HTMLElement
  ) {
    return currentTarget.contains(relatedTarget)
  }

  return false
}
