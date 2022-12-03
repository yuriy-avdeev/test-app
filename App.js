import { useCallback, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import { Navbar } from './src/Navbar'
import { AddTodo } from './src/AddTodo'
import { TodoItem } from './src/TodoItem'

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

  const [todos, setTodos] = useState([])

  const addTodo = (todoItem) => {
    setTodos(prevTodos => [
      todoItem,
      ...prevTodos
    ])
  }

  if (!fontsLoaded) return null
  return (
    <View onLayout={onLayoutRootView}>
      <Navbar title="todo app" />
      <View style={styles.container}>
        <AddTodo
          onSubmit={addTodo}
        />
      </View>

      {todos.map(item =>
        <TodoItem
          todoItem={item}
          key={item.id}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
})