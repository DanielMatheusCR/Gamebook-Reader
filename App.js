import React, { Component } from "react"
import { NativeBaseProvider, Box } from "native-base"
import AppBar from './src/components/AppBar'
import Home from './src/screens/Home'

export default class App extends Component {
  constructor(props) {
    super(props)
    console.log("O componente está sendo montado!")
  }

  componentDidMount() {
    console.log("O component foi montado")
  }

  componentDidUpdate() {
    console.log("O componente foi atualizado!")
  }

  componentWillUnmount() {
    console.log("O componente está sendo destruído!")
  }
  render() {
    console.log("O componente está sendo renderizado!")
    return (
      <NativeBaseProvider>
      <Box bg="black">
        <AppBar />
        <Home />
      </Box>
    </NativeBaseProvider>
    )
  }
}
