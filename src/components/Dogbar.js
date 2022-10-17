import React from 'react'

function Dogbar({dogData, currentDogId}) {
    console.log(dogData)
const dogNames = dogData.map(pup => <span key={pup.id} onClick={() => currentDogId(pup.id)}>{pup.name}</span>)
  return (
    <>
    {dogNames}
    </>
  )
}

export default Dogbar