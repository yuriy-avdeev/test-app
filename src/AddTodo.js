import { useState, useEffect } from 'react'
import { Keyboard, StyleSheet, View, TextInput, Button, Text, Alert } from 'react-native'

export const AddTodo = ({ onSubmit }) => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [isTitleFocus, setIsTitleFocus] = useState(false)
  const [titleFocusStyle, setTitleFocusStyle] = useState({})
  const [isTextFocus, setIsTextFocus] = useState(false)
  const [textFocusStyle, setTextFocusStyle] = useState({})
  const warningText = 'symbols at least should be!'

  const inputBlurStyles = {
    backgroundColor: '#fafafa',
    borderWidth: 0
  }

  const inputFocusStyles = {
    backgroundColor: '#fff',
    borderWidth: 1
  }

  const onPressAdd = () => {
    if (text.trim().length >= 5 && title.trim().length >= 2) {
      onSubmit({
        id: Date.now().toString(),
        title,
        text
      })
      setTitle('')
      setText('')
    } else {
      Alert.alert('Too short value!')
    }
  }

  useEffect(() => {
    isTitleFocus
      ? setTitleFocusStyle(inputFocusStyles)
      : setTitleFocusStyle(inputBlurStyles)
  }, [isTitleFocus])

  useEffect(() => {
    isTextFocus
      ? setTextFocusStyle(inputFocusStyles)
      : setTextFocusStyle(inputBlurStyles)
  }, [isTextFocus])


  return (
    <View style={styles.block}>
      <View style={styles.inputsBlock}>
        <View style={{ position: 'relative' }}>
          <TextInput
            style={[
              styles.input,
              styles.titleInput,
              titleFocusStyle,
              {
                borderColor: (title.trim().length > 0 && title.trim().length < 2) ?
                  'red' : 'green'
              },
            ]}
            value={title}
            placeholder="Todo's title..."
            placeholderTextColor='#ccc'
            autoCorrect={false}
            cursorColor='#ccc'
            onChangeText={(value) => setTitle(value)}
            onFocus={() => setIsTitleFocus(true)}
            onBlur={() => setIsTitleFocus(false)}
            onSubmitEditing={Keyboard.dismiss}
          />

          <Text style={styles.warningText}>
            {(title.trim().length > 0 && title.trim().length < 2) &&
              `2 ${warningText}`}
          </Text>
        </View>

        <View style={{ position: 'relative' }}>
          <TextInput
            style={[
              styles.input,
              styles.textInput,
              textFocusStyle,
              {
                borderColor: (text.trim().length > 0 && text.trim().length < 5) ?
                  'red' : 'green'
              }
            ]}
            value={text}
            placeholder="Todo's desription..."
            placeholderTextColor='#ccc'
            autoCorrect={false}
            cursorColor='#ccc'
            // down - short entry (it differs from first input)
            onChangeText={setText}
            onFocus={() => setIsTextFocus(true)}
            onBlur={() => setIsTextFocus(false)}
            // called when the text input's submit button is pressed - remove focus
            onSubmitEditing={Keyboard.dismiss}
          />

          <Text style={styles.warningText}>
            {(text.trim().length > 0 && text.trim().length < 5) &&
              `5 ${warningText}`}
          </Text>
        </View>
      </View>

      <Button
        onPress={onPressAdd}
        title="add todo"
        color="deepskyblue"
        accessibilityLabel="add todo"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 20,
    borderBottomColor: '#eee',
    borderBottomWidth: 2,
    marginBottom: 20,
  },

  inputsBlock: {
    width: '70%',
    justifyContent: 'space-between',
  },

  input: {
    height: 35,
    paddingHorizontal: 5,
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    outlineWidth: 0,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4
  },

  titleInput: {
    fontSize: 14,
    fontFamily: 'Medium',
  },

  textInput: {
    fontSize: 13,
    fontFamily: 'Regular',
    marginTop: 24,
  },

  warningText: {
    fontSize: 10,
    fontFamily: 'Regular',
    fontStyle: 'italic',
    color: 'red',
    position: 'absolute',
    left: 0,
    bottom: -15
  }
})