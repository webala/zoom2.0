import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const contactsMenuButtons = [
  {
    type: 'starred',
    name: 'starred'
  }, 
  {
    type: 'contact',
    name: 'Charity Cakes',
    photo: require('../assets/1650990.jpg')
  },
  {
    type: 'contact',
    name: 'Marvin Cars',
    photo: require('../assets/1650990.jpg')
  },
  {
    type: 'contact',
    name: 'Johnny Planes',
    photo: require('../assets/1650990.jpg')
  }
]

function ContactsMenu() {
  return (
    <View style={styles.container}>

      {contactsMenuButtons.map((item, index) =>
        <View style={styles.row} key={index}>
          {/* image */}

          { item.type == 'starred' ? (
            <View style={styles.starredIcon}>
            <AntDesign name='star' size={30} color='#efefef' />
          </View>
          ) : (
            <Image source={item.photo} style={styles.image} />
          )}
          
          {/* text */}
          <Text style={styles.text}>
            {item.name}
          </Text>
        </View>
         )}
    </View>
  )
}

export default ContactsMenu

const styles = StyleSheet.create({
  container: {

  },
  text: {
    paddingLeft: 10,
    color: 'white',
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  starredIcon: {
    backgroundColor: '#333333',
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center', 
    borderRadius: 15
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20
  }
})