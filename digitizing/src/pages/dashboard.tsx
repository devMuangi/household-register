
import React from "react";
import AddChu from "../components/CHU/AddChu";
import {
    Box,
    Flex,
    Container,
    Text,
  } from '@chakra-ui/react';
  import axios from 'axios';
  import { GetServerSideProps } from 'next'

//   export const getServerSideProps: GetServerSideProps = async () => {
//     const res = await fetch(`${process.env.NEXTAUTH_URL}/api/chus`);
//     if (res.status !== 200) {
//       // throw new Error("Failed to fetch")
//       const chus = [];
//     }
  
//     const chus = await res.json();
//     console.log(chus)


//     return {
//       props: { chus},
//     }
//   }

const dashboard = () => {
    console.log(`${process.env.NEXTAUTH_URL}/api/chus`)


  return (
  <div>
      <Container >
      <AddChu/>

     </Container>
     <Container >
         <Text></Text>
    fmmfm

     </Container>

    
  </div>
  );
};

export default dashboard;
