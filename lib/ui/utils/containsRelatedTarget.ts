export const containsRelatedTarget = ({
  currentTarget,
  relatedTarget,
}: FocusEvent) => {
  if (
    currentTarget instanceof HTMLElement &&
    relatedTarget instanceof HTMLElement
  ) {
    return currentTarget.contains(relatedTarget)
  }

  return false
}
