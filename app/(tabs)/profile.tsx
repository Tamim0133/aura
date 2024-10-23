import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const profile = () => {
  return (
    <View style = {styles.container}>
      <Text> This is profile</Text>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : '#fff',
        alignItems : 'center',
        justifyContent : 'center',
      },
})