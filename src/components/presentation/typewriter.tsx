import { useEffect, useState } from 'react'

interface TypewriterProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseBetween?: number
}

export function Typewriter({
  texts,
  typingSpeed = 120, // Time in ms for each character typed
  deletingSpeed = 60, // Time in ms for each character removed
  pauseBetween = 500, // Pause in ms after finishing typing before deleting
}: TypewriterProps) {
  // Current text that is displayed on screen
  const [currentText, setCurrentText] = useState('')

  // Current position in the string (number of characters typed so far)
  const [charIndex, setCharIndex] = useState(0)

  // Flag to decide if we are deleting text or typing text
  const [isDeleting, setIsDeleting] = useState(false)

  // Index of the current string in the `texts` array
  const [textIndex, setTextIndex] = useState(0)

  /**
   * Effect #1: "big picture" logic
   * --------------------------------
   * 1) Updates `currentText` based on the current `charIndex`.
   * 2) If we've reached the end of the text, we pause briefly,
   *    then switch to deleting mode.
   * 3) If we've deleted all characters, we move on to the next text
   *    and switch back to typing mode.
   */
  useEffect(() => {
    const fullText = texts[textIndex]
    let timer: ReturnType<typeof setTimeout>

    // Slice the full text up to `charIndex`
    setCurrentText(fullText.slice(0, charIndex))

    // If we've typed all characters of the current text
    if (!isDeleting && charIndex === fullText.length) {
      // Wait `pauseBetween` ms, then set `isDeleting` to true
      timer = setTimeout(() => {
        setIsDeleting(true)
      }, pauseBetween)
    }

    // If we're deleting and we've reached zero characters (fully deleted)
    if (isDeleting && charIndex === 0) {
      // Move to the next text in the array (loop back with modulo)
      const nextIndex = (textIndex + 1) % texts.length
      setTextIndex(nextIndex)

      // Switch back to typing mode
      setIsDeleting(false)
    }

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, textIndex, texts, pauseBetween])

  /**
   * Effect #2: "ticker" for typing/deleting
   * ----------------------------------------
   * This effect controls how quickly we add or remove characters
   * by incrementing or decrementing `charIndex` over time.
   */
  useEffect(() => {
    let interval: ReturnType<typeof setTimeout>

    // If we are typing forward and haven't reached the end yet
    if (!isDeleting && charIndex < texts[textIndex].length) {
      interval = setTimeout(() => {
        // Increase `charIndex` by 1 to type the next character
        setCharIndex(prev => prev + 1)
      }, typingSpeed)
    }
    // If we are deleting and still have characters left
    else if (isDeleting && charIndex > 0) {
      interval = setTimeout(() => {
        // Decrease `charIndex` by 1 to delete the last character
        setCharIndex(prev => prev - 1)
      }, deletingSpeed)
    }

    // If we've reached the full length (when typing) or zero (when deleting),
    // the other effect (#1) handles what to do next (pause or switch text).

    return () => clearTimeout(interval)
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed])

  return (
    <span>
      {currentText}
      <span className="cursor">|</span>
    </span>
  )
}
