import React, { useState } from 'react'
import { Switch } from 'react-native'
import Simple from './src/examples/Simple'
import styled from 'styled-components/native'

const Container = styled.View`
  min-height: 100%;
  justify-content: center;
  align-items: center;
`

const Row = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: -100;
`

const InstructionText = styled.Text`
  margin-right: 10px;
`

export default function App () {
 

  return (
    <Container>
       <Simple />
    </Container>
  )
}
