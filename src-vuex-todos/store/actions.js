
import {ADD_TODO, DEL_TODO, DEL_ALL_FINISH_TODO,SELECT_ALL_TODOS} from './mutations-type'

export default {
  addTodo({commit},todo){
    commit(ADD_TODO, {todo})
  },
  delTodo({commit},index){
  commit(DEL_TODO, {index})
  },
  delAllCompletedTodo({commit}){
    confirm('Are you sure?') && commit(DEL_ALL_FINISH_TODO)
  },
  selectAllTodos({commit},value){
    commit(SELECT_ALL_TODOS, {value})
  }
}
