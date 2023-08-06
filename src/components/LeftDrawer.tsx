import { Button } from '@mui/material'
import React, {ReactNode} from 'react'
type LeftDrawerPropType = {
    show: boolean;
    height: number;
    width:  number;
    children: ReactNode[]
}
function LeftDrawer(props: LeftDrawerPropType) {
    const {show, height, width, children} = props
  return (
    <div style={{display:show?'flex':'none', flexDirection:'column', borderRight:'1px solid black'}}>
        {children}
    </div>
  )
}

// function LeftDrawer({show, height, width}: LeftDrawerPropType) {
//     console.log(show)
//   return (
//     <div style={{display:'flex', flexDirection:'column', borderRight:'1px solid black'}}>
//         <Button>Create</Button>
//         <Button>All contacts</Button>
//         <Button>Frequent</Button>
//     </div>
//   )
// }

export default LeftDrawer