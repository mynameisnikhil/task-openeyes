import { Stack } from '@mui/material'
import React from 'react'

const MyStack = ({children, direction, spacing, stackStyle, ...props}) => {
  return (
    <Stack  direction={direction} spacing={spacing} className={stackStyle} {...props}>
        {children}
    </Stack>
  )
}

export default MyStack