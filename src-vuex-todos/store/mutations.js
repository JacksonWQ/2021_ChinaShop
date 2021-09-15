
import {ADD_TODO, DEL_TODO, DEL_ALL_FINISH_TODO,SELECT_ALL_TODOS} from './mutations-type'

export default {
  [ADD_TODO](state,{todo}){
    state.todos.unshift(todo)
  },
  [DEL_TODO](state,{index}){
    state.todos.splice(index,1)
  },
  [DEL_ALL_FINISH_TODO](state){
    state.todos = state.todos.filter(todo => !todo.complete)
  },
  [SELECT_ALL_TODOS](state,{value}){
    state.todos.forEach(todo => {
      todo.complete = value
    })
  }

}
