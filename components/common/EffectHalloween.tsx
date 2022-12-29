import React from 'react'
import Image from 'next/image'
import Telaraña from "../../img/main/special/telaraña.png"

const EffectHalloween = () => {
  return (
    <div className='d-none d-lg-inline-block'>
        <Image src={Telaraña} alt="" className='img-fluid telaraña telaraña-properties'/>
        <Image src={Telaraña} alt="" className='img-fluid telaraña-inverted telaraña-properties'/>
    </div>
  )
}

export default EffectHalloween