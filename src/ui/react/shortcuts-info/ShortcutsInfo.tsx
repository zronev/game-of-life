import React, { FC } from 'react'
import { SHORTCUTS } from '../../common/shortcuts'
import type { WithClass } from '../common/types'

const ShortcutsInfo: FC<WithClass> = ({ className }) => {
  return (
    <section className={`shortcuts section ${className}`}>
      <ul className="shortcuts__list">
        {SHORTCUTS.map(({ keys, text }) => (
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

export default ShortcutsInfo
