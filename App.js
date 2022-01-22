import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.titleBox}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Here are some boxes of different colors</Text>
        </View>
        <View style={styles.textBoxCyan}>
          <Text style={{color: 'white'}}>Cyan #2aa198</Text>
        </View>
        <View style={styles.textBoxBlue}>
          <Text style={{color: 'white'}}>Blue #268bd2</Text>
        </View>
        <View style={styles.textBoxMagenta}>
          <Text style={{color: 'white'}}>Magenta #d33682</Text>
        </View>
        <View style={styles.textBoxOrange}>
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
    titleBox: {
      color: 'black',
      fontWeight: 'bold',
      marginBottom: 10,
    },
    textBoxCyan: {
      backgroundColor: '#2aa198',
      alignItems: 'center',
      paddingVertical: 10,
      marginBottom: 10
    },
    textBoxBlue: {
      backgroundColor: '#268bd2',
      alignItems: 'center',
      paddingVertical: 10,
      marginBottom: 10
    },
    textBoxMagenta: {
      backgroundColor: '#d33682',
      alignItems: 'center',
      paddingVertical: 10,
      marginBottom: 10
    },
    textBoxOrange: {
      backgroundColor: '#cb4b16',
      alignItems: 'center',
      paddingVertical: 10,
      marginBottom: 10
    }
  }
)

export default App