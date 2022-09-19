import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

function MeetingRoom() {

  const [name, setName] = useState()

  return (
    <View style={styles.container}>
        <View style={styles.startMeetingContainer}>
          <View style={styles.info}>
            <TextInput 
              style={styles.textInput}
              value={name}
              placeholder='Enter Name'
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View style={styles.info}>

          </View>
        </View>

    </View>
  )
}

export default MeetingRoom

const styles = StyleSheet.create({
  container: {

  }
})