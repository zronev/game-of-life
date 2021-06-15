import { RefObject, useEffect, useRef, useState } from 'react'
import type { Layer } from '../../common/layers'
import type { OptionsMap } from '../../../core/options'
import { createLayer } from '../../common/layers/createLayer'

type UseLayer = (options: OptionsMap) => {
  ref: RefObject<HTMLCanvasElement>
  layer: Nullable<Layer>
}

const useLayer: UseLayer = options => {
  const ref = useRef<HTMLCanvasElement>(null)
  const [layer, setLayer] = useState<Nullable<Layer>>(null)

  useEffect(() => {
    const canvas = ref.current

    if (!canvas) return

    setLayer(createLayer(canvas, options))

    const { eventEmitter } = options
    eventEmitter.addListener('FIELD_SIDES_CHANGED', mainOptions => {
      const mergedOptions = { ...mainOptions, color: options.color }
      setLayer(createLayer(canvas, mergedOptions))
    })
  }, [ref])

  return { ref, layer }
}

export default useLayer
