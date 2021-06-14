import { View } from '../common/mvc/view'
import { renderPattern } from './pattern'
import type { PatternsState } from './types'

export class PatternsView extends View<PatternsState> {
  public override render({
    game,
    patterns,
    patternToSpawn,
  }: PatternsState): DocumentFragment {
    const patternsViews = patterns.map(pattern => renderPattern(pattern, game))
    patternsViews.forEach(patternView => {
      const name = patternView.dataset.name
      const activePatternName = patternToSpawn.get().name

      if (name === activePatternName) {
        patternView.classList.add('pattern--active')
      }
    })

    const fragment = document.createDocumentFragment()
    fragment.append(...patternsViews)

    return fragment
  }

  public onClick(callback: (name: string) => void): void {
    this._targetElement.addEventListener('click', e => {
      if (!(e.target instanceof HTMLElement)) return

      const { name } = e.target.dataset

      if (name) {
        callback(name)

        for (const child of this._targetElement.children) {
          child.classList.remove('pattern--active')
        }

        e.target.classList.add('pattern--active')
      }
    })
  }
}
