import { useState, useEffect } from 'react'
import reactDom from 'react-dom'
import { StyleSheet, View, TextInput, Button, Text } from 'react-native'

export const AddTodo = ({ onSubmit }) => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [isTitleFocus, setIsTitleFocus] = useState(false)
  const [titleFocusStyle, setTitleFocusStyle] = useState({})
  const [isTextFocus, setIsTextFocus] = useState(false)
  const [textFocusStyle, setTextFocusStyle] = useState({})
  const [mistakeMessage, setMistakeMessage] = useState('')

  const inputBlurStyles = {
    backgroundColor: '#fafafa',
    outlineWidth: 0
  }
  const inputFocusStyles = {
    backgroundColor: '#fff',
    outlineWidth: 1,
  }

  const warningText = 'symbols at least should be!'

  const onPressAdd = () => {
    if (text.length >= 5 && title.length >= 2) {
      onSubmit({
        id: new Date().toString(),
        title,
        text
      })
      setTitle('')
      setText('')
      setMistakeMessage('')
    } else {
      setMistakeMessage('Too short value!')
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
    <View>
      <View style={styles.block}>
        <View style={styles.inputsBlock}>
          <View style={{ position: 'relative' }}>
            <TextInput
              style={[
                styles.input,
                styles.titleInput,
                titleFocusStyle,
                { outlineColor: title.length < 2 ? 'red' : 'green' }
              ]}
              value={title}
              placeholder="Todo's title..."
              placeholderTextColor='#ccc'
              autoCorrect={false}
              cursorColor={title.length < 2 ? 'red' : 'green'}
              onChangeText={(value) => setTitle(value)}
              onFocus={() => setIsTitleFocus(true)}
              onBlur={() => setIsTitleFocus(false)}
            />

            <Text style={styles.warningText}>
              {
                (title.length > 0 && title.length < 2 && !mistakeMessage)
                  ? `2 ${warningText}`
                  : (mistakeMessage && title.length < 2)
                  && mistakeMessage
              }
            </Text>
          </View>

          <View style={{ position: 'relative' }}>
            <TextInput
              style={[
                styles.input,
                styles.textInput,
                textFocusStyle,
                { outlineColor: text.length < 5 ? 'red' : 'green' }
              ]}
              value={text}
              placeholder="Todo's desription..."
              placeholderTextColor='#ccc'
              autoCorrect={false}
              cursorColor={text.length < 5 ? 'red' : 'green'}
              onChangeText={(value) => setText(value)}
              onFocus={() => setIsTextFocus(true)}
              onBlur={() => setIsTextFocus(false)}
            />
            <Text style={styles.warningText}>
              {
                (text.length > 0 && text.length < 5 && !mistakeMessage)
                  ? `5 ${warningText}`
                  : (mistakeMessage && text.length < 5)
                  && mistakeMessage
              }
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
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 20
  },

  inputsBlock: {
    width: '70%',
    justifyContent: 'space-between',
    gap: 24,
  },

  input: {
    height: 33,
    paddingHorizontal: 5,
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    outlineWidth: 0
  },

  titleInput: {
    fontSize: 14,
    fontFamily: 'Medium',
  },

  textInput: {
    fontSize: 13,
    fontFamily: 'Regular',
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