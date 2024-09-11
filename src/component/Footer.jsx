import React from 'react'

const Footer = () => {

    const year=new Date()
    const currentYear=year.getFullYear()
  return (
    <div className='footer'>
        <p>©️copyright @ Tamilazhagan {currentYear}.All rights are reserved</p>
    </div>
  )
}

export default Footer