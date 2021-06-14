export const renderParagraph = (
  text: string,
  className: string
): HTMLParagraphElement => {
  const name = document.createElement('p')
  name.classList.add(...className.split(' '))
  name.textContent = text

  return name
}
