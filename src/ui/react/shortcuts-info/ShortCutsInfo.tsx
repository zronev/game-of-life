import React, { FC } from 'react'
import type { WithClass } from '../common/types'

const ShortCutsInfo: FC<WithClass> = ({ className }) => {
  const shortcuts = [
    { keys: ['s'], text: 'spawn random cells' },
    { keys: ['c'], text: 'clear field' },
    { keys: ['space'], text: 'pause/play' },
    { keys: ['[', ']'], text: 'faster/slower' },
    { keys: ['1', '2', '3', '4'], text: 'make field smaller/bigger' },
  ]

  return (
    <section className={`shortcuts ${className}`}>
      <ul className="shortcuts__list">
        {shortcuts.map(({ keys, text }) => (
          <li key={text} className="shortcuts__item">
            {keys.map((key, index) => {
              const isLast = index === keys.length - 1

              return (
                <span key={key}>
                  <b className="shortcuts__key">{key}</b>
                  {isLast ? ' ' : ', '}
                </span>
              )
            })}
            &ndash; {text}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ShortCutsInfo
