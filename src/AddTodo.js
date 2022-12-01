import reactDom from 'react-dom'
import { StyleSheet, View, TextInput, Pressable, Button, Text } from 'react-native'

export const AddTodo = ({ onSubmit }) => {
  const onPressAdd = () => {
    onSubmit('check')
  }

  return (
    <View>
      <View style={styles.block}>
        <TextInput style={styles.input} />

        <Button
          onPress={onPressAdd}
          title="add todo"
          color="deepskyblue"
          accessibilityLabel="add todo"
        />
      </View>

      <Pressable style={styles.buttonRemove}>
        <Text style={styles.buttonText}>X</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },

  input: {
    width: '70%',
    height: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    paddingHorizontal: 5,
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