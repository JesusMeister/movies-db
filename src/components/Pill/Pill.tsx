import { IPill } from './types'
import React from 'react'

const Pill: React.FC<IPill> = ({
    title,
    color,
}) => {
  return (
    <div className=''>
      {title}
    </div>
  )
}

export default Pill
