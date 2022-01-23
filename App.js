import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import ColorBox from './components/ColorBox'

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.titleText}>Here are some boxes of different colors</Text>
        <ColorBox colorName="Cyan" colorCode="#2aa198"/>
        <ColorBox colorName="Blue" colorCode="#268bd2"/>
        <ColorBox colorName="Magenta" colorCode="#d33682"/>
        <ColorBox colorName="Orange" colorCode="#cb4b16"/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 10,
      marginVertical: 20
    },
    titleText: {
      fontWeight: 'bold',
      color: 'black',
      marginBottom: 10,
      fontSize: 18
    }
  }
)

export default App