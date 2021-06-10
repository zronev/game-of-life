import React, { FC, useContext, useEffect, useState } from 'react'
import { getUsedCells, Grid } from '../../../core/grid'
import { GameContext } from '../contexts/game-context'

const Info: FC = () => {
  const { game } = useContext(GameContext)

  const [info, setInfo] = useState({
    population: 0,
    generation: 0,
  })

  useEffect(() => {
    const field = game.getEmitter('field')
    const generation = game.getEmitter('generation')

    const handlePopulation = (grid: Grid) =>
      setInfo(i => ({
        ...i,
        population: getUsedCells(grid),
      }))

    const handleGeneration = () =>
      setInfo(i => ({
        ...i,
        generation: i.generation + 1,
      }))

    field.addListener('GRID_CHANGED', handlePopulation)
    generation.addListener('GENERATION_CHANGED', handleGeneration)

    return () => {
      field.removeListener('GRID_CHANGED', handlePopulation)
      generation.removeListener('GENERATION_CHANGED', handleGeneration)
    }
  }, [])

  return (
    <section className="info main__info">
      <p className="counter">population: {info.population}</p>
      <p className="counter">generation: {info.generation}</p>
    </section>
  )
}

export default Info
