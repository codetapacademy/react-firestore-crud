import React, { useEffect } from 'react'
import { db } from './firestore'

const BiancaAndrei = () => {
  useEffect(() => {
    (async () => {
      db.collection('topic').add({
        title: 'Firestore CRUD',
        description: 'Fun function',
        createAt: +new Date()
      })
    })()
  }, [])
  return (
    <div>Bianca Andrei</div>
  )
}

export { BiancaAndrei }
