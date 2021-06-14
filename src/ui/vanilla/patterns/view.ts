import { View } from '../common/mvc/view'
import { renderPattern } from './pattern'
import type { PatternsState } from './types'

export class PatternsView extends View<PatternsState> {
  public override render({ patterns, game }: PatternsState): DocumentFragment {
    const fragment = document.createDocumentFragment()

    const patternsViews = patterns.map(pattern => renderPattern(pattern, game))
    fragment.append(...patternsViews)

    return fragment
  }

  public onClick(callback: (name: string) => void): void {
    this._targetElement.addEventListener('click', e => {
      if (!(e.target instanceof HTMLElement)) return

      const { name } = e.target.dataset
      if (name) callback(name)
    })
  }
}
