import React, { CanvasHTMLAttributes } from 'react'
import { Size } from '../../../../game'
import { WithClass } from '../../../common/types'

type Props = {
  size: Size
} & CanvasHTMLAttributes<HTMLCanvasElement> &
  WithClass

const Layer = React.forwardRef<HTMLCanvasElement, Props>(
  ({ size, className = '', ...props }, ref) => {
    const { width, height } = size

    return (
      <canvas
        ref={ref}
        width={width}
        height={height}
        className={`canvas ${className}`}
        {...props}
      />
    )
  }
)

export default Layer
