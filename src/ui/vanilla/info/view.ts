import { View } from '../common/mvc/view'
import { renderParagraph } from '../common/utility'
import type { InfoState } from './types'

export class InfoView extends View<InfoState> {
  public override render({ population, generation }: InfoState): DocumentFragment {
    const fragment = document.createDocumentFragment()
    const populationCounter = renderParagraph(`population: ${population}`, 'counter')
    const generationCounter = renderParagraph(`generation: ${generation}`, 'counter')

    fragment.append(populationCounter, generationCounter)
    return fragment
  }
}
