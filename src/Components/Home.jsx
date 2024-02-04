import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import bitcoin from "../Assets/btc.png";
import {motion} from "framer-motion"

const Home = () => {

  return (
    <Box bgColor={"black"} w={"full"} h={"85vh"}>
      
     <motion.div style={{
      height:"80vh"
     }}
     animate= {{
            translateY:"20px"
     }}
        transition={{
          duration:1,
          repeat:Infinity,
          repeatType:"reverse",
        }}
     >
     <Image w={"full"}
      h={"full"} 
      objectFit={"contain"} 
      src={bitcoin} 
      filter={"grayscale(1)"}/>
     </motion.div>

      <Text fontSize={"6xl"}
       textAlign={"center"} 
       fontWeight={"thin"} 
       color={"whiteAlpha.700"}
      mt={"-20"}
       >Xcrypto</Text>
    </Box>
  )
}

export default Home