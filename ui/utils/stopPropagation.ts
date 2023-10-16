interface Event {
  stopPropagation: () => void
}

export const stopPropagation =
  <E extends Event>(handler?: (event?: E) => void) =>
  (event: E) => {
    event.stopPropagation()

    handler?.(event)
  }
