import Loop from './loop'

export const changeFps = (loop: Loop, by: number) => {
  loop.fps = loop.fps + by
}
