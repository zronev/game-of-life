export type ButtonProps = {
  text: string
  onClick: () => void
  className?: string
}

type MakeButton = (props: ButtonProps) => HTMLButtonElement

const makeButton: MakeButton = ({ text, onClick, className = '' }) => {
  const button = document.createElement('button')
  button.textContent = text
  button.classList.add('button')
  if (className) button.classList.add(...className.split(' '))
  button.addEventListener('click', onClick)
  return button
}

export default makeButton
