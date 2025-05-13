/**
 * Truncates the text to the maximum number of letters.
 * @param content @string - The content to create an excerpt from.
 * @param maxNumberOfLetters @number - The maximum number of letters to include in the excerpt.
 * @param trailingIndicator @string - The indicator to add to the excerpt if the content is truncated - Optional. Default is '...'.
 * @returns The excerpt of the content.
 */
export const truncateText = (content: string, maxNumberOfLetters: number, trailingIndicator = '...') => {
  const truncatedContent = content.slice(0, maxNumberOfLetters)
  const result = content.length > maxNumberOfLetters ? truncatedContent + trailingIndicator : content

  return result
}
