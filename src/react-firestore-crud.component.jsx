import React from 'react'
import { Router } from '@reach/router'
import { Footer } from './component/footer/footer.component'
import { Home } from './component/home/home.component'
import { MarianZburlea } from './component/idea/marianzburlea'
import { TopMenu } from './component/top-menu'
import './react-firestore-crud.css'

const ReactFirestoreCrud = () => {
  return (
    <>
      <TopMenu />
      <Router>
        <Home path="/" />
        <MarianZburlea path="/marianzburlea" />
      </Router>
      <Footer />
    </>
  )
}

export { ReactFirestoreCrud }
