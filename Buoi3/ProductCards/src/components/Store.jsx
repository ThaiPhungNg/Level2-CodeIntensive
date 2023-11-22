import { Box, Stack, Input, Button, SimpleGrid, Heading } from '@chakra-ui/react'
import React from 'react'
import StoreItem from './StoreItem'
import { useRef } from 'react'


const Store = ({items, onItemAdd}) => {
    const itemNameRef = useRef();
    const itemPriceRef = useRef()
  return (
    <Box p={4}>
       
      <SimpleGrid columns={4} space={4}>
        {items.map((item) => {
            return <StoreItem title={item.title} price={item.price}/>;
        })}
     </SimpleGrid>

      <Input ref={itemNameRef} mt={10} placeholder='Item name'/>
      <Input ref={itemPriceRef} mt={10} placeholder='Price number' type="number"/>
      <Button mt={2} onClick={() => {
        onItemAdd(
            {
                title: itemNameRef.current.value,
                price: itemPriceRef.current.value,
            }
        )
      }}> Add Item</Button>
    </Box>
    
  )
}

export default Store