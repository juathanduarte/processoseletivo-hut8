import React from 'react'
import './styles.css'

function Index(props) {
  return (
    <div className='block-tela3'>
      <div className='found'>
        <i class={props.icon}></i>
      </div>
      <h1 className='propsNumber1'>{props.number}</h1>
      <h2 className='propsInfo1'>{props.info}</h2>

      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'
        integrity='sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=='
        crossorigin='anonymous'
      />
    </div>
  )
}

export default Index
