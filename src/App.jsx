import { useState } from 'react'
import './App.css'

function changeBackground() {
  const globalWindow = document.querySelector('.GlobalWindow');
  const InputAnime = document.querySelector('.InputAnime');
  const AnimeName = document.querySelector('.AnimeName');
  if (globalWindow.style.backgroundColor == 'white') {
    globalWindow.style.backgroundColor = '#373737';
    InputAnime.style.backgroundColor = '#373737';
    AnimeName.style.color = '#373737';
  } else {
    globalWindow.style.backgroundColor = 'white';
    InputAnime.style.backgroundColor = 'white';
    AnimeName.style.color = 'white';
  }

}

function App() {
  return (
    <>
      <div className="GlobalWindow" style={{
        width: '100vh',
        height: '94vh',
        backgroundColor: 'white',
        borderRadius: '5px'
      }}>
          <div className='ButtonAnime'>
            <button id='NewAnime'>Add Anime</button>
            <button id='ChangeTheme' onClick={changeBackground}>Change theme</button>
          </div>
          <div className='AnimeList' style={{
            width: '90%',
            height: '200px',
            backgroundColor: '#e9814f'
          }}>
            <div className='nameInput'>
              <h2 className='AnimeName'>Anime Name</h2>
              <input className='InputAnime' type="text" placeholder='Anime Name'/>
            </div>
          </div>
      </div>
    </>
  )
}
export default App
