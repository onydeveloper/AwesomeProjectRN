import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

const ColorBox = ({colorName, colorCode}) => {
    const boxColor = {
        backgroundColor: colorCode
    }
    return (
        <SafeAreaView>
            <View style={[boxColor,styles.textBox]}>
                <Text style={{color: 'white'}}>{colorName} {colorCode}</Text>
            </View> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textBox: {
        alignItems: 'center',
        paddingVertical: 10,
        marginBottom: 10
    }
})

export default ColorBox