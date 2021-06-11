import React, { useEffect, useReducer, useState } from 'react'
import { db } from './firestore'
import { topicReducer, initialTopicData } from './marianzburlea.reducer'
import { TopicList } from './topic-list'
import { initTopicListAction, removeTopicFromListAction, addTopicToListAction, updateTopicInListAction } from './marianzburlea.action'
import { AddTopic } from './add-topic'

const emptyTopic = {
  title: '',
  description: '',
  id: null
}

const MarianZburlea = () => {
  const [topicToEdit, setTopicToEdit] = useState(emptyTopic)
  const [topicData, updateTopicData] = useReducer(topicReducer, initialTopicData)

  const topicCollection = db.collection('topic')
  useEffect(() => {
    let unsubscriber
    (async () => {
      // connect to the firestore
      try {
        const topicList = await topicCollection.get()
        const data = topicList.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        updateTopicData(initTopicListAction(data))

        unsubscriber = topicCollection.onSnapshot(changeList => {
          changeList.docChanges().forEach(change => {
            const topic = {
              id: change.doc.id,
              ...change.doc.data()
            }
            // added
            if (change.type === 'added' && change.doc.metadata.hasPendingWrites) {
              updateTopicData(addTopicToListAction(topic))
            } else if (change.type === 'modified') {
              updateTopicData(updateTopicInListAction(topic))
            } else if (change.type === 'removed') {
              updateTopicData(removeTopicFromListAction(change.doc.id))
            }
          })
        })
      } catch (error) {
        console.log(`Getting a list from firestore failed, because the hamesers were not fed.`, error)
      }
    })()
    return unsubscriber
  }, [])

  const updateData = ({ name, value, save }) => {
    if (save) {
      // save to the database
      if (topicToEdit.id) {
        // edit
        topicCollection.doc(topicToEdit.id).set(topicToEdit)
      } else {
        // add
        topicCollection.add({
          ...topicToEdit,
          createAt: +new Date()
        })
      }
    } else {
      // update the state
      setTopicToEdit({
        ...topicToEdit,
        [name]: value
      })
    }
  }

  const deleteTopic = id => {
    // remove the topic from the database
    topicCollection.doc(id).delete()
  }

  const editTopic = id => {
    // set topic to be edited
    setTopicToEdit(topicData.filter(t => t.id === id)[0])
  }

  return (
    <div>
      <h1>Topics to discover</h1>
      <div>
        <AddTopic updateData={updateData} topic={topicToEdit} />
        <TopicList topicData={topicData} onDelete={deleteTopic} onEdit={editTopic} />
      </div>
    </div>
  )
}

export { MarianZburlea }
