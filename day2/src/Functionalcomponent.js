import React from 'react'

export default function Functionalcomponent() {
  const title="rjt saraswat"
  const subject=["Math","hindi","English","History"]
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {
          subject.map((value,id)=><li key={id}>{value}</li>)
        }
      </ul>
    </div>
  )
}
