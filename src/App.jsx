import { useState } from 'react'
import './App.css'

function changeBackground() {
  const globalWindow = document.querySelector('.GlobalWindow');
  const InputAnime = document.querySelector('.InputAnime');
  const InputAnimeText = document.querySelector('.InputAnimeText');
  const ApplyChanges = document.querySelector('.ApplyChanges');
  const AnimeName = document.querySelector('.AnimeName');
  const AnimeP = document.querySelector('.AnimeP');
  if (globalWindow.style.backgroundColor == 'white') {
    globalWindow.style.backgroundColor = '#373737';
    InputAnime.style.backgroundColor = '#373737';
    InputAnimeText.style.backgroundColor = '#373737';
    AnimeName.style.color = '#373737';
    AnimeP.style.color = '#373737';
    ApplyChanges.style.backgroundColor = '#373737'
    ApplyChanges.style.color = 'white'
  } else {
    globalWindow.style.backgroundColor = 'white';
    InputAnime.style.backgroundColor = 'white';
    InputAnimeText.style.backgroundColor = 'white';
    AnimeName.style.color = 'white';
    AnimeP.style.color = 'white';
    ApplyChanges.style.backgroundColor = 'white'
    ApplyChanges.style.color = '#373737'
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
            <p className='AnimeP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius vel pharetra vel turpis nunc eget. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus.</p>
            <input className='InputAnimeText' type="text" placeholder='Anime Text'/>
            <button className='ApplyChanges'>apply changes</button>
          </div>
      </div>
    </>
  )
}
export default App
