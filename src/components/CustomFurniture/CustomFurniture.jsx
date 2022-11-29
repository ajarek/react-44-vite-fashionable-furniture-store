import React from 'react'
import './CustomFurniture.css'
import { CardCustom } from '../CardCustom/CardCustom'
export const CustomFurniture = () => {
  return (
    <div className='root-custom'>
      <div className='header-custom'>
        <div className='h1'>
          <h1>Custom Furniture</h1>
          <h1>Built Only For You</h1>
        </div>
        <div className='text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum
          debitis consectetur reprehenderit non aliquam voluptates dolore aut
          vero consequuntur.
        </div>
      </div>
      <div className='body-custom'>
        <CardCustom
          icon={'🧭'}
          title={'Mission'}
          info={
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'
          }
        />
        <CardCustom
          icon={'🔮'}
          title={'Vision'}
          info={
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'
          }
        />
        <CardCustom
          icon={'📖'}
          title={'History'}
          info={
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'
          }
        />
      </div>
    </div>
  )
}

export default CustomFurniture
