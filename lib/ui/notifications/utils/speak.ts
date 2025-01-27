export const speak = (text: string) =>
  window.speechSynthesis.speak(new window.SpeechSynthesisUtterance(text))
