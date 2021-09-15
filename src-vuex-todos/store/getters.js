export default {
  completedTodos(state) {
    let i = 0
    state.todos.forEach(todo => {
      if (todo.complete) {
        i++
      }
    })
    return i
  },
}
