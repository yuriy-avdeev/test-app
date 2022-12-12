import { useCallback, useState } from 'react'
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { StyleSheet, View, SafeAreaView, FlatList, StatusBar, Pressable, Text } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import { Navbar } from './src/Navbar'
import { AddTodo } from './src/AddTodo'
import { TodoItem } from './src/TodoItem'
import { ImagePickerEx } from './src/ImagePickerEx.js'

// Keeping the splash screen visible while fetching resources
SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    'Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      setTimeout(async () => await SplashScreen.hideAsync(), 500)
    }
  }, [fontsLoaded])

  const [todos, setTodos] = useState([{
    id: Date.now().toString(),
    title: 'Some title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur perferendis ducimus odit ullam voluptates possimus aut, tempore pariatur corporis ad.',
    done: false
  },
  {
    id: (Date.now() + 1).toString(),
    title: 'Some title + 1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur perferendis.',
    done: false
  }])

  const addTodo = (todoItem) => {
    setTodos(prevTodos => [
      ...prevTodos,
      todoItem
    ])
  }

  const completeTodo = (id) => {
    setTodos(prevTodos => prevTodos.map(item => {
      id === item.id && (item.done = !item.done)
      return item
    }))
  }

  const removeTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(item => id !== item.id))
  }

  if (!fontsLoaded) return null
  return (
    <View onLayout={onLayoutRootView}>
      <Navbar title="todo app" />
      <View style={styles.container}>
        <AddTodo
          onSubmit={addTodo}
        />

        <SafeAreaView style={{
          flex: 1,
          marginTop: StatusBar.currentHeight || 0,
        }}>
          <FlatList
            data={todos}
            renderItem={({ item, index }) =>
              <TodoItem
                todoItem={item}
                idx={index + 1}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>

      <Pressable
        style={[styles.button, { backgroundColor: "#fff" }]}
        onPress={() => alert('You pressed a button.')}
      >
        <FontAwesome
          name="home"
          size={28}
          color="red"
          style={styles.buttonIcon}
        />
        <Text style={[styles.buttonLabel, { color: "#25292e" }]}>BUTTON</Text>
      </Pressable>

      <ImagePickerEx />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  button: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 22,
    marginBottom: 20,
    flexDirection: 'row',
  },

  buttonIcon: {
    paddingRight: 8,
  },

  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
})