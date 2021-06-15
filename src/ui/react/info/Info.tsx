import React, { FC, useContext, useEffect, useState } from 'react'
import { GameContext } from '../contexts/game-context'
import { getUsedCells, Grid } from '../../../core/grid'

const Info: FC = () => {
  const { game } = useContext(GameContext)
  const [population, setPopulation] = useState(0)
  const [generation, setGeneration] = useState(0)

  useEffect(() => {
    const field = game.getEmitter('field')
    const generation = game.getEmitter('generation')

    const handlePopulation = (grid: Grid) => setPopulation(getUsedCells(grid))
    const handleGeneration = () => setGeneration(g => g + 1)

    field.addListener('GRID_CHANGED', handlePopulation)
    generation.addListener('GENERATION_CHANGED', handleGeneration)

    return () => {
      field.removeListener('GRID_CHANGED', handlePopulation)
      generation.removeListener('GENERATION_CHANGED', handleGeneration)
    }
  }, [])

  return (
    <section className="info section main__info">
      <p className="counter">population: {population}</p>
      <p className="counter">generation: {generation}</p>
    </section>
  )
}

export default Info
