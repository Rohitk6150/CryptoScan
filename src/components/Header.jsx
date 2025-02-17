import { Button,HStack } from '@chakra-ui/react'
import { color } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return <HStack zIndex={"overlay"} p={"4"} shadow={"base"} flex={"wrap"} bgColor={"rgba(32,32,32,.65)"} position={"sticky"} top={"0px"} marginTopnpm st={"0-px"} boxShadow={"0 25.5px 27px -28.5px #30589c"}>
    <Button variant={"unstyled"} color={"white"} marginRight={"1.5"} css={
      
      {"&:hover": {
      
      backgroundColor:"#30589c",
      color:"black"
    
      
    }}} 
    padding={"1.5"}>
      <Link to="/">Home</Link>
    </Button>

    <Button variant={"unstyled"} color={"white"} marginRight={"1.5"} css={
      
      {"&:hover": {
      
      backgroundColor:"#30589c",
      color:"black"
    
      
    }}} 
    padding={"1.5"}>
      <Link to="/Exchanges">Exchanges</Link>
    </Button>

    <Button variant={"unstyled"} color={"white"} marginRight={"1.5"} css={
      
      {"&:hover": {
      
      backgroundColor:"#30589c",
      color:"black"
    
      
    }}} 
    padding={"1.5"}>
      <Link to="/Coins">Coins</Link>
    </Button>
  </HStack>

}

export default Header
