import React from 'react'
import router from 'next/dist/client/router'

export const revalidate = 0

const CoverPage = () => {
  return (
    <div className='App'>
      <h3>The Wedding of</h3>
      <h1>Icam & Puput</h1>

      <p>Wedding invitation</p>
      <h2>Ilham & Partner</h2>
      <button className='transition transparent shadow hover:shadow-2xl' onClick={() => router.push('/MenuInvitation')}>
        Open Invitation
      </button>
    </div>
  )
}

export default CoverPage
