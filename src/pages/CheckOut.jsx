import { Box,Text,Flex ,Button,Input,Img} from '@chakra-ui/react'
import React from 'react'
import theme from '../theme'
import { useTheme } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons';
import "./CheckOut.css"
export const CheckOut = () => {
    const theme = useTheme();
  return (
    <Box  initialColorMode='light' >
    <Text fontSize='3xl' paddingBottom={10} fontFamily='sans-serif'>Checkout</Text>
  
    <Flex>
      
      
      
        <Box w='55%'>
        <Box textAlign={"center"} paddingLeft="40%" paddingTop="5%" paddingBottom={10}>
        <Flex>
            <Text paddingTop='10px'>Already have an Account?</Text>
            <Text marginLeft="15%"   fontSize='12px' padding="12px 40px 12px 40px" className='mujhko' top='0'border="1.5px solid black" >SIGN IN</Text>
        </Flex>
    </Box>
            <Text fontWeight={500}>YOUR ORDERS</Text>
        </Box>
       
       
       
       
       
        <Box bg={theme.colors.primary.women} padding="2%" lineHeight='300%' w="30%">
            
        <Text fontWeight={500} textAlign="left">Apply Promo Code</Text>
           <Flex>
            <Img src='https://www.myglamm.com/images/discount.svg'/>
             <Input type="textarea" class="applyTextArea " placeholder="PROMO CODE" autocapitalize="true" spellcheck="false" autocomplete="false" value="GLAMM40"/>
            <Button id="applyButton" onclick="promocode()"> APPLY</Button></Flex>
            {/* https://www.myglamm.com/images/discount.svg */}



            <Flex id="discountApply">
                <h3>Discount</h3>
                <p id="discountAmount">-₹00.00</p>
            </Flex>
            <Text fontWeight={500} textAlign="left">Order Summary</Text>
        <Box lineHeight='200%' paddingBottom={7}>
        <Flex justifyContent="space-between">
            <Box>Actual Amount</Box>
            <Box textAlign="right">Amount</Box>
        </Flex>
        <Flex justifyContent="space-between">
        <Box>Shipping Charges</Box>
            <Box align="right">FREE</Box>
        </Flex>
        <Flex justifyContent="space-between">
        <Box>Discount coupon</Box>
            <Text  textAlign="center" > discount amount</Text>
        </Flex>
        </Box>
        <Flex justifyContent="space-between">
        <Box lineHeight='150%' paddingBottom={7}>
                <Box fontWeight={500} textAlign="left">Amount to Pay</Box>
                <Box color={theme.colors.primary.main}>Note: Inclusive of all taxes</Box>
        </Box>
            <Box float="right" fontWeight={500}>Final amount</Box>
        </Flex>
        <Box bg='black' padding='3px'w='100%'color='white' className='mujhko'>PROCEED TO PAYMENT <ArrowForwardIcon/></Box>
        </Box>
      
    </Flex>
    </Box>
  )
}