import React from 'react';
import './App.css';
import Coding from './React/ReactJS.js';
import Styling from './Other/styling';
import Javascript from './Other/Javascript';
import Reactq from './W3Schools/w3schools';
import RTopics from './React/React Topics';
import Html from './W3Schools/tags';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ReactQuiz from './React/ReactQuiz';
import Responsive from './Other/Responsive';
import ReactRouter from './ReactRouter/ReactRouter';
import ReactRouterQuestions from './ReactRouter/ReactRouterQuestions';
import Css from './W3Schools/css';
import MediaQueries from './Other/mediaQueries';
import Sass from './W3Schools/sass';
import Othernotes from './Other/OtherNotes';
import ReactRouterQuiz from './ReactRouter/ReactRouterQuiz';

export default function Header() {

  const topBtn = () => {
    window.scrollTo({ top: 0 , left: 0, behavior: "smooth"})
  }

  return(
    <div> 
      <div onClick={topBtn} className='scroll-on'>
            <span className='scrollTo-top'>↑</span>
          </div>
      <BrowserRouter>
      <div className='link-header'>
      <Link className='link-btns' to='/tags'>HTML</Link>
      <Link className='link-btns' to='/css'>CSS</Link>
      <Link className='link-btns' to='/javascript'>Javascript</Link>
      <Link className='link-btns' to='/media-queries'>MediaQueries</Link>     
      <Link className='link-btns' to='/react-topics'>React</Link>
      <Link className='link-btns' to='/other-notes'>OtherNotes</Link>
      <Link className='link-btns' to='/sass'>SASS</Link>
      <Link className='link-btns' to='/responsive'>Responsive</Link>
      <Link className='link-btns' to='/w3schools'>ReactQuestions</Link>
      </div>
      <div className='link-header1'>   
      <Link className='link-btns' to='/react-router-questions'>React-Router Questions</Link>
      <Link className='link-btns' to='/react'>ReactNotes</Link>
      <Link className='link-btns' to='/react-router-quiz'>ReactRouterQuiz</Link>
      <Link className='link-btns' to='/react-quiz'>ReactQuiz</Link>
      <Link className='link-btns' to='/styling'>CSS in React</Link>
      <Link className='link-btns' to='/react-router'>React-Router Notes</Link>
      </div>
        <Routes>
          <Route path='/react-router-quiz' element={<ReactRouterQuiz />} />
          <Route path='/javascript' element={<Javascript />} />
          <Route path='/styling' element={<Styling />} />
          <Route path='/react' element={<Coding />} />
          <Route path='/react-topics' element={<RTopics />} />
          <Route path='/w3schools' element={<Reactq />} />
          <Route path='/tags' element={<Html />} />
          <Route path='/css' element={<Css />} />
          <Route path='/react-quiz' element={<ReactQuiz />} />
          <Route path='/responsive' element={<Responsive />} />
          <Route path='//media-queries' element={<MediaQueries />} />
          <Route path='/react-router' element={<ReactRouter />} />
          <Route path='/sass' element={<Sass />} />
          <Route path='/react-router-questions' element={<ReactRouterQuestions />} />
          <Route path='/other-notes' element={<Othernotes />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}