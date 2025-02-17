import React, { useEffect,useState } from 'react'
import axios from 'axios';
import{server} from '../index';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import {
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
const Exchanges = () => {
const [exchanges,setExchanges] =useState([]);
const [loading,setLoading] =useState(true);
const[error,setError] =useState(false)

  useEffect(()=>{
    const fetchExchanges = async()=>
    {
      try
      {const {data}=await axios.get(`${server}/exchanges?per_page=200&page=1`);
      setExchanges(data);
      // console.log(data);
      setLoading(false);}catch(error)
      {
        setError(true);
        setLoading(false);

      }
    }
    fetchExchanges();

  },[])


  if(error)
  {
    return <ErrorComponent message="Error in fetching Information"/>
  }




  return (<Container maxWidth={"full"} >

   {loading?(<Loader/>):(<>
   
   <HStack wrap={"wrap"} justifyContent={"space-evenly"} backgroundColor={"white"}>
    {exchanges.map((i)=>(<ExchangeCard 
    key={i.id} 
    name={i.name} 
    img={i.image} 
    url={i.url} 
    rank={i.trust_score_rank}/>))}




   </HStack>
   
   
   
   
   </>)}

  </Container>
  );
};

const ExchangeCard=({name,img,rank,url})=>(
  <a href={url} target={"blank"}>
    <VStack w={"52"}
    shadow={"2xl"}
    p={"8"}
    borderRadius={"lg"}
    transition={"all 0.3s"}
    m={"4"}
    css={
      
      {"&:hover": {
      transform:"scale(1.1)",
      boxShadow: "-0.5px -1px 23px -4.5px #30589c",
      
    
      
    }}}
    textColor={"black"}
    
    >


      <Image 
      src={img} 
      w={"10"} 
      h={"10"} 
      objectFit={"conatin"} 
      alt="Exchange" 
      boxShadow={"-0.5px -1px 23px -4.5px #30589c"}
      borderRadius={"lg"}
      />
      <Heading 
      size={"md"}
      noOfLines={1}>
      {rank}
 </Heading>
 <Text 
 noOfLines={1}>{name}</Text>
    </VStack>




  </a>
)

export default Exchanges
