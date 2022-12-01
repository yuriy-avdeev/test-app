import { StyleSheet, View, Text } from 'react-native'

export const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: 75,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#ee82ee',
    paddingBottom: 3,
  },

  text: {
    color: '#fcfcfc',
    fontSize: 20,
    fontFamily: 'Bold',
    textTransform: 'uppercase',
  }
})