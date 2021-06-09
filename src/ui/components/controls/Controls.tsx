import React, { FC } from 'react'
import FieldControls from './FieldControls'
import LoopControls from './LoopControls'
import SidesControls from './SidesControls'

const Controls: FC = () => {
  return (
    <section className="controls main__controls">
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
}

export default Controls
