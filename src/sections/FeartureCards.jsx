import React from 'react'
import { abilities } from '../constants'
import { div } from 'three/tsl'

const FeartureCards = () => {
  return (
    <div className="w-ful paddingx-g-lg">
        <div className="mx-auto grid-3-col">
            {
                abilities.map(({imgpath, title, desc}) =>(
                    <div key={title} className="card-border rounded-xl p-8 flex flex-col gap-4">
                        <div className="size-14 flex items-center justify-center">

                        </div>
                        <h3>{title}</h3>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FeartureCards