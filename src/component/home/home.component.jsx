import React from 'react'

const Home = () => {
  return (
    <div>
      <p>Let's talk about React Firestore Crud. It's pretty similar to react firebase crud so let me take you, step by step, on a journey of discovery where the amazing JavaScript ES6, React and Redux will come together so we can Create, Read, Update and Delete data from Firestore.</p>
      <h2>Steps to start</h2>
      <ol>
        <li>Visit <a href="https://github.com/codetapacademy/react-firestore-crud">https://github.com/codetapacademy/react-firestore-crud</a></li>
        <li>Click the <b>Fork</b> button</li>
        <li>On your profile, click the <b>Clone</b> button and clone it to your local PC</li>
        <li>On your PC create a new branch and give it as name, the same username you have on GitHub, all in lowercase, example: <code>git checkout -b marianzburlea</code>, where <code>marianzburlea</code> is my GitHub username.</li>
        <li>Inside the <code>/src/component/idea</code> folder you want to create one folder of your own, and name it the same username you have on GitHub, all in lowercase.</li>
        <li>Inside this folder of yours you want to create your own idea. Feel free to get inspired from the other solutions.</li>
        <li>To make the router work, you want to import your custom component and add it to the render method inside <code>/src/react-firestore-crud.component.jsx</code></li>
        <li>To add it to the top menu, you want to add your <b>Link</b> inside the file <code>/src/component/top-menu/top-menu.component.jsx</code></li>
        <li>After you made at least one change and one commit, feel free to create a <b>PR</b> a.k.a. <i><b>P</b>ull <b>R</b>equest</i></li>
        <li>Check for rewiews and do your best to get it accepted.</li>
        <li>Have lots of fun!</li>
      </ol>
    </div>
  )
}

export { Home }
