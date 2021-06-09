import { RefObject, useEffect, useRef, useState } from 'react'
import { OptionsMap } from '../../../../game'
import { Layer, setFillColor } from '../../../drawers'

type UseLayer = (options: OptionsMap) => {
  ref: RefObject<HTMLCanvasElement>
  layer: Layer | null
}

const useLayer: UseLayer = options => {
  const ref = useRef<HTMLCanvasElement>(null)
  const [layer, setLayer] = useState<Layer | null>(null)

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

    const { eventsEmitter } = options
    eventsEmitter.addListener('FIELD_SIDES_CHANGED', options => {
      createLayer(options)
    })
  }, [ref])

  return { ref, layer }
}

export default useLayer
