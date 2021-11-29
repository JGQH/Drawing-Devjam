import React, { ChangeEvent } from 'react'
import useDrawingContext from '@Hooks/useDrawingContext'
import style from './TitleHolder.module.scss'

export default function TitleHolder() {
  const { drawingTitle } = useDrawingContext()
  const className = ['drawing-component', 'titleholder-component', style.container].join(' ')

  function setTitle(e:ChangeEvent<HTMLInputElement>) {
    drawingTitle.current = e.target.value
  }

  return (
    <div {...{ className }}>
      <input type='text' onChange={setTitle} defaultValue={drawingTitle.current} />
    </div>
  )
}