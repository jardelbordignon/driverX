import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

import { windowHeight, windowWidth } from '../helpers/Dimensions'

const FormInput = ({value, placeholder, icon, width='95%', ...rest}) => {
  return (
    <View style={[styles.inputContainer, {width}]}>
      <View style={styles.iconWrapper}>
        <Feather name={icon} size={25} color='#666' />
      </View>
      <TextInput style={styles.input}
        value={value}
        numberOfLines={1}
        placeholder={placeholder}
        placeholderTextColor='#666'
        {...rest} />
    </View>
  )
}

export default FormInput

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    height: windowHeight / 15,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  iconWrapper: {
    padding: 7,
    height: '100%',
    justifyContent: 'center',
    textAlign: 'right',
    width: 45
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
  //  fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 1.5,
    fontSize: 16,
    borderRadius: 10,
    borderWidth: 1
  }
})