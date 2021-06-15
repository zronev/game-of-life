import React, { FC } from 'react'
import type { WithClass } from '../common/types'
import FieldControls from './FieldControls'
import LoopControls from './LoopControls'
import SidesControls from './SidesControls'

const Controls: FC<WithClass> = ({ className }) => (
  <section className={`controls section ${className}`}>
    <div className="row">
      <FieldControls />
    </div>
    <div className="row">
      <LoopControls />
    </div>
    <div className="row">
      <SidesControls />
    </div>
  </section>
)

export default Controls
