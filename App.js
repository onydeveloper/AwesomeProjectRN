import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.titleText}>Here are some boxes of different colors</Text>
        <View style={[{backgroundColor: '#2aa198'},styles.textBox]}>
          <Text style={{color: 'white'}}>Cyan #2aa198</Text>
        </View>
        <View style={[{backgroundColor: '#268bd2'},styles.textBox]}>
          <Text style={{color: 'white'}}>Blue #268bd2</Text>
        </View>
        <View style={[{backgroundColor: '#d33682'},styles.textBox]}>
          <Text style={{color: 'white'}}>Magenta #d33682</Text>
        </View>
        <View style={[{backgroundColor: '#cb4b16'},styles.textBox]}>
          <Text style={{color: 'white'}}>Orange #cb4b16</Text>
        </View>
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
      marginBottom: 10,
      fontSize: 18
    },
    textBox: {
      alignItems: 'center',
      paddingVertical: 10,
      marginBottom: 10,
    }
  }
)

export default App