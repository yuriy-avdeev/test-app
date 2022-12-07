import { useCallback, useState } from 'react'
import { StyleSheet, View } from 'react-native'
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
  },
  {
    id: (Date.now() + 2).toString(),
    title: 'Some title + 2',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur perferendis ducimus odit ullam voluptates possimus aut, tempore.',
    done: false
  },
  {
    id: (Date.now() + 3).toString(),
    title: 'Some title + 3',
    text: 'Lorem ipsum dolor sit.',
    done: false
  },
  {
    id: (Date.now() + 4).toString(),
    title: 'Some title + 4',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    done: false
  },
  {
    id: (Date.now() + 5).toString(),
    title: 'Some title + 5',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    done: false
  },
  {
    id: (Date.now() + 6).toString(),
    title: 'Some title + 6',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur perferendis ducimus odit ullam.',
    done: false
  },
  {
    id: (Date.now() + 7).toString(),
    title: 'Some title + 7',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur perferendis ducimus odit ullam voluptates possimus aut.',
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

        {todos.map((item, idx) =>
          <TodoItem
            todoItem={item}
            idx={idx + 1}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            key={item.id}
          />
        )}
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
})