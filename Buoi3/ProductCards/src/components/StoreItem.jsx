import React from 'react'
import { Box, Heading,Tag, Flex, Spacer } from '@chakra-ui/react'

const StoreItem = ({title, price}) => {
  return (
    <Box p={4} borderRadius='lg' borderWidth='1px' >
            <Heading noOfLines={2} size='sm' fontWeight='nomarl'>{title}</Heading>
            <Spacer/>
          
        <Tag mt={4}>${price}</Tag>
    </Box>
  )
}

export default StoreItem