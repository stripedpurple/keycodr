import {useEffect, useState} from 'preact/hooks'
import Stat from './components/Stat.jsx'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf({position: {
  x: 'right',
  y: 'top',
},});

import GHLogo from './ghlogo.jsx'

export function App(props) {
  // toast.success('test')
  
  const [key, setKey] = useState({})
  
  
  const handleKey = (e) => {
    const {keyCode, code, location, which, key} = e
    
    e.preventDefault()
    
    setKey({
      keyCode,
      code,
      location,
      which,
      key
    })
  }
  
  const copy2clip = (text) => {
    try {
      navigator.clipboard.writeText(text)
      notyf.success('Copied!')
    } catch (e) {
      notyf.error('Copy failed!')
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
    }
  }, [])

  return (
    <>

      <div className="row fixed-top px-2 py-1">
        <div className="column flex-grow">
          <h3><strong>keycodr</strong></h3>
        </div>
        <div className="column flex-shrink text-right">
          <a href="https://github.com/stripedpurple/keycodr" target={'_blank'} className="button-outline button justify-center align-center flex">
            <GHLogo/><span className="mr-2"/> github
          </a>
        </div>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="column">
            <h1 className={`${!key.keyCode || 'xl'}`}>
              {key.keyCode ?? 'Press a key to begin'}
            </h1>
          </div>
        </div>
          

        {!!key.code && <div className="row">
          <div className="column">
            <Stat title='event.key' content={key.key ?? ''} onClick={() => copy2clip(key.key)}/>
          </div>
          <div className="column">
            <Stat title='event.code' content={key.code ?? ''} onClick={() => copy2clip(key.code)}/>
          </div>
          <div className="column">
            <Stat title='event.location' content={key.location ?? ''} onClick={() => copy2clip(key.location)}/>
          </div>
          <div className="column">
            <Stat title='event.which' content={key.which ?? ''} onClick={() => copy2clip(key.which)}/>
          </div>
        </div>}
      </div>
    </>
  )
}
