import React from 'react'
import { StyledTopicItem, StyledTopicDelete, StyledTopicEdit } from './topic-list.style'

const TopicList = ({ topicData, onEdit, onDelete }) => {
  return (
    <div>
      <h2>List of topics</h2>
      <div>
        {topicData
          .map(({ id, title, description }) => {
            return (
              <StyledTopicItem key={id}>
                <h3>{title}</h3>
                <div>{description}</div>
                <StyledTopicEdit onClick={() => onEdit(id)}>&#9998;</StyledTopicEdit>
                <StyledTopicDelete onClick={() => onDelete(id)}>&times;</StyledTopicDelete>
              </StyledTopicItem>
            )
          })}
      </div>
    </div>
  )
}

export { TopicList }
