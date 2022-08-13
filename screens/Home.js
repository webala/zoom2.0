import React from 'react'
import {View, SafeAreaView} from 'react-native'
import ContactsMenu from '../components/ContactsMenu'
import Header from '../components/Header'
import MenuButtons from '../components/MenuButtons'
import SearchBar from '../components/SearchBar'

function Home() {
  return (
    <View>
        <SafeAreaView>
            {/*Header  */}
            <Header />

            {/* Search bar */}
            <SearchBar />
            {/* Menu btns */}
            <MenuButtons />
            {/* Contacts menu */}
            <ContactsMenu />
        </SafeAreaView>
    </View>
  )
}

export default Home