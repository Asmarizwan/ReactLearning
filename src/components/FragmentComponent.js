import React from 'react'

export default function FragmentComponent() {
  return (
    //To remove the extra div in console or elements in console we use resct.fragment instead of a div
    //< <React.Fragment> </React.Fragment>can also be written as <></>
    <React.Fragment>
        <h3>Heading</h3>
          <h4>Subheading</h4>
            </React.Fragment>
  )
}
