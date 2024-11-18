'use client'
import { Navbar } from "./components/Navbar";
import styled from 'styled-components'

export default function Home() {
  return (
    <HomeContainer className="bg-gradient-to-b from-rcc-deep-blue from-10% via-rcc-deep-blue via-80% to-rcc-light-blue to-100% h-screen">
      <Navbar />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(0deg, var(--rcc-light-blue) 0%, var(--rcc-deep-blue) 100%);
`