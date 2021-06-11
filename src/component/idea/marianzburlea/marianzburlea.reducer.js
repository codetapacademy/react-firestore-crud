import {
  INIT_TOPIC_LIST,
  ADD_TOPIC_LIST,
  REMOVE_TOPIC_LIST,
  UPDATE_TOPIC_LIST
} from './marianzburlea.const'

export const initialTopicData = []

export const topicReducer = (state = initialTopicData, action) => {
  switch (action.type) {
    case INIT_TOPIC_LIST:
      return action.data

    case ADD_TOPIC_LIST:
      return [...state, action.topic]

    case UPDATE_TOPIC_LIST:
      return state.map(topic => topic.id === action.topic.id ? action.topic : topic)

    case REMOVE_TOPIC_LIST:
      return state.filter(topic => topic.id !== action.id)
    default:
      return state
  }
}

