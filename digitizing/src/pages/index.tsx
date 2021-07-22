import Head from 'next/head'
import Image from 'next/image'
import prisma from '../../lib/prisma';
import { GetServerSideProps } from 'next'
import styles from '../../styles/Home.module.css'
import { signIn, signOut, useSession } from "next-auth/client";
import SignIn from '../components/SignIn';



export default function Home() {
   const [session] = useSession();
   
  if (!session) {
    return <SignIn csrfToken/>;
  }

  return (

      <div className="page">
        <h1>authenticated</h1>

      </div>
 
  );
};

