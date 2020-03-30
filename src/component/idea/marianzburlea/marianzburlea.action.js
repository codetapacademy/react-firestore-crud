import {
  INIT_TOPIC_LIST,
  REMOVE_TOPIC_LIST,
  ADD_TOPIC_LIST,
  UPDATE_TOPIC_LIST
} from "./marianzburlea.const";

export const initTopicListAction = data => ({
  type: INIT_TOPIC_LIST,
  data
})

export const addTopicToListAction = topic => ({
  type: ADD_TOPIC_LIST,
  topic
})

export const updateTopicInListAction = topic => ({
  type: UPDATE_TOPIC_LIST,
  topic
})

export const removeTopicFromListAction = id => ({
  type: REMOVE_TOPIC_LIST,
  id
})
