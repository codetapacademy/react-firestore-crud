import React, { useState, useRef } from 'react'
const AddTopic = ({ topic, updateData }) => {
  // const titleRef = useRef()

  const onChange = e => {
    const { name, value } = e.target

    updateData({
      name,
      value,
      save: false
    })
  }

  const onSubmit = e => {
    e.preventDefault();
    updateData({
      save: true
    })
  }

  return (
    <div>
      <h2>Add a new topic</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          // ref={titleRef}
          name="title"
          type="text"
          id="title"
          value={topic.title}
          onChange={onChange}
        />

        <label htmlFor="description">Description: </label>
        <textarea
          id="description"
          name="description"
          cols="30"
          rows="10"
          onChange={onChange}
          value={topic.description}
        />

        <button type="submit">Save topic</button>
      </form>
    </div>
  )
}

export { AddTopic }
