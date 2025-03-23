import React from 'react'
import Lanyard from '../../ui/Lanyard/Lanyard'

function home() {
  return (
    <div><Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
</div>
  )
}

export default home