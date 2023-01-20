import React from 'react'
//memo prevents the child component for rerendering if parent component renders
 function MemoChild({childCount}) {
    console.log('child component is rerendered')
  return (
    <div>
        <h3>
        Child Count is: {childCount}
        </h3>
        
        </div>
  )
}
export default React.memo(MemoChild);
