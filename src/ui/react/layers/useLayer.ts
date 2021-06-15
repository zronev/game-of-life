import { RefObject, useEffect, useRef, useState } from 'react'
import type { Layer } from '../../common/layers'
import type { OptionsMap } from '../../../core/options'
import { setFillColor } from '../../common/drawers'

type UseLayer = (options: OptionsMap) => {
  ref: RefObject<HTMLCanvasElement>
  layer: Nullable<Layer>
}

const useLayer: UseLayer = options => {
  const ref = useRef<HTMLCanvasElement>(null)
  const [layer, setLayer] = useState<Nullable<Layer>>(null)

  useEffect(() => {
    const createLayer = (options: OptionsMap) => {
      if (!ref?.current) return

      const canvas = ref.current
      const context = canvas.getContext('2d')

      if (!context) {
        throw new Error('Error occurs while getting the 2d context')
      }

      const { cellSize, color } = options
      setFillColor(context, color)
      setLayer({ canvas, context, cellSize })
    }

    createLayer(options)

    const { eventEmitter } = options
    eventEmitter.addListener('FIELD_SIDES_CHANGED', mainOptions => {
      createLayer({ ...mainOptions, color: options.color })
    })
  }, [ref])

  return { ref, layer }
}

export default useLayer
