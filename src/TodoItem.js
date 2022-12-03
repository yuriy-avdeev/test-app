import { StyleSheet, View, Text, Pressable } from 'react-native'

export const TodoItem = ({ todoItem }) => {

  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.title}>{todoItem.title}</Text>
        <Text style={styles.text}>{todoItem.text}</Text>
      </View>

      <Pressable style={styles.buttonRemove}>
        <Text style={styles.buttonText}>X</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    minHeight: 50,
    marginBottom: 10,
    borderWidth: 1,
    borderBottomColor: '#eee'
  },

  textBox: {

  },

  title: {

  },

  text: {

  },

  buttonRemove: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 6,
    borderColor: 'red',
    borderWidth: 1,
    backgroundColor: 'orange',
  },

  buttonText: {
    color: 'red',
    fontFamily: 'Bold',
  }
})