export const renderWrapper = <K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className: string
): HTMLElementTagNameMap[K] => {
  const wrapper = document.createElement(tag)
  wrapper.classList.add(...className.split(' '))

  return wrapper
}
