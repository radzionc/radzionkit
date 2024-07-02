interface Event {
  preventDefault: () => void
}

export const preventDefault =
  <E extends Event>(handler?: (event: E) => void) =>
  (event: E) => {
    event.preventDefault()

    handler?.(event)
  }
