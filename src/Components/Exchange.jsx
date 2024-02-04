import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {server} from "../index"
import { Container, HStack, VStack, Image , Heading, Text} from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
const Exchange = () => {

  const [exchanges, setExchanges]=useState([]);
  const [loading, setLoading]=useState(true);
  const [error, setError]=useState(false);
useEffect(() => {
  const fetchExchnage=async()=>  {

    try{
    const {data} =await axios.get(`${server}/exchanges`)

    setExchanges(data); 
    setLoading(false);
    console.log(data);
  } catch(error){
    setError(true);
    setLoading(false);
  }
  };
  fetchExchnage();
}, []);



if(error) return <ErrorComponent message={"Error while fetching Exchanges"}/>

  return (
<Container maxW={"container.xl"}>
  
  {loading? <Loader/> :( 
  <>
  


  <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
  
    {exchanges.map((i)=>(
      <ExchangeCard 
      key={i.id}
      name={i.name} 
      img={i.image} 
       rank={i.trust_score_rank}
        url={i.url} 
        />
      // <div>{i.name}</div>
    ))}
    
  </HStack>

  </>
  )}</Container>
  );
};


const ExchangeCard  = ({name, img, rank, url})=>(
  <a href={url} target={"_blank"}>

  <VStack w={"52"}  shadow={"lg"}  p={"8"} borderRadius={"lg"} transition={"all 0.3s"}
  m={"4"}

  css={{
    "&:hover":{
      transform:"scale(1.1)",
    }
  }}
  >
    <Image src={img} 
     w={"10"}
       h={"10"} 
       objectfit={"contain"}
       alt={"Exchange"}
       />

       <Heading size={"md"} noOfLines={1}>
         {rank}
       </Heading>

       <Text noOfLines={1}>{name}</Text>
  </VStack>

  </a>
)

  
  

export default Exchange;