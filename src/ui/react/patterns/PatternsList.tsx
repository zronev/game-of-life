import React, { FC } from 'react'
import type { WithClass } from '../common/types'
import PatternsListItem from './PatternsListItem'
import { patterns } from '../../../patterns'

const PatternsList: FC<WithClass> = ({ className }) => (
  <section className={`patterns-wrapper section ${className}`}>
    <div className="patterns">
      {patterns.map(pattern => (
        <PatternsListItem key={pattern.name} pattern={pattern} />
      ))}
    </div>
  </section>
)

export default PatternsList
