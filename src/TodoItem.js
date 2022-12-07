import { StyleSheet, View, Text, Pressable } from 'react-native'

export const TodoItem = ({ todoItem, idx, completeTodo, removeTodo }) => {
  const complete = () => {
    completeTodo(todoItem.id)
  }

  const remove = () => {
    removeTodo(todoItem.id)
  }

  const completeButtonStyles = {
    borderColor: todoItem.done ? '#ccc' : 'green',
    backgroundColor: todoItem.done ? '#eee' : 'lightgreen',
  }

  const textStyles = {
    color: todoItem.done ? '#ccc' : 'black',
    textDecorationLine: todoItem.done && 'line-through',
  }

  return (

    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={[styles.title, textStyles]}>
          {`${idx}. ${todoItem.title}`}
        </Text>
        <Text style={[styles.text, textStyles]}>
          {todoItem.text}
        </Text>
      </View>

      <Pressable
        onPress={complete}
        style={[styles.button, styles.completeButton, completeButtonStyles]}
        disabled={todoItem.done}
      >
        <Text style={[styles.buttonText, { color: 'rgba(0, 0, 0, 0.4)' }]} >V</Text>
      </Pressable>

      <Pressable
        onPress={remove}
        style={[styles.button, styles.buttonRemove]}
      >
        <Text style={[styles.buttonText, { color: 'red' }]}>X</Text>
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 3,
    minHeight: 50,
    marginHorizontal: 'auto',
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  textBox: {
    flexShrink: 1,
    marginRight: 'auto'
  },

  title: {
    fontSize: 14,
    fontFamily: 'Bold',
    textTransform: 'uppercase',
    marginBottom: 5,
  },

  text: {
    fontSize: 14,
    fontFamily: 'Regular',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 40,
    borderRadius: 6,
    borderWidth: 1,
  },

  completeButton: {
    marginLeft: 15,
  },

  buttonRemove: {
    marginLeft: 20,
    borderColor: 'red',
    backgroundColor: 'orange',
  },

  buttonText: {
    fontFamily: 'Bold',
    fontSize: 18,
  }
})