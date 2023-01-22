import React from 'react'

function MemoComp({name}) {
    console.log('rendering in memo component')
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp)
