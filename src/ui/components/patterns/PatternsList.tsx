import React, { FC } from 'react'
import PatternsListItem from './PatternsListItem'
import { patterns } from '../../../patterns'

const PatternsList: FC = () => (
  <section className="patterns-wrapper main__patterns">
    <div className="patterns">
      {patterns.map(pattern => (
        <PatternsListItem key={pattern.name} pattern={pattern} />
      ))}
    </div>
  </section>
)

export default PatternsList
