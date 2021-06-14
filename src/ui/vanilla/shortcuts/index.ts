import { SHORTCUTS } from '../../common/shortcuts'
import { renderWrapper } from '../common/utility'

const renderListItemContent = (keys: string[]): string => {
  return keys
    .map((key, index) => {
      const isLast = index === keys.length - 1

      return `
        <span>
          <b class="shortcuts__key">${key}</b>${isLast ? ' ' : ', '}
        </span>`
    })
    .join('')
}

const renderListItem = ({
  keys,
  text,
}: {
  keys: string[]
  text: string
}): string => {
  return `
    <li class="shortcuts__item">
      ${renderListItemContent(keys)} &ndash; ${text}
    </li>`
}

export const renderShortcuts = (): HTMLElement => {
  const wrapper = renderWrapper('section', 'shortcuts main__shortcuts')
  wrapper.innerHTML = `
    <ul class="shortcuts__list">
      ${SHORTCUTS.map(renderListItem).join('')}
    </ul>
  `

  return wrapper
}
