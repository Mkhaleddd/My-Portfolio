import { lazy} from 'react'
import Nav from './Components/Nav'
const LazyAbout=lazy(()=>import('./Components/About'))
const LazySkills=lazy(()=>import('./Components/Skills'))
const LazyProjects=lazy(()=>import('./Components/Projects'))
const LazyContact=lazy(()=>import('./Components/Contact'))
const LazyFooter=lazy(()=>import('./Components/Footer'))

function App() {
  return (
    <>
    <header>     
            <div className="container">
                <div className="box">

                    <div className="title">
                        <span className="block"></span>
                        <h1>Mariam Khaled<span></span></h1>
                    </div>

                    <div className="role">
                        <div className="block"></div>
                        <h2>Frontend developer</h2>
                    </div>
              </div>
              </div>
              <div className="flex">
          <a className='button-background-move' download href='https://www.canva.com/design/DAGJZfvwspY/2tMv3plrqox48REdrmOZzw/view?utm_content=DAGJZfvwspY&utm_campaign=designshare&utm_medium=link&utm_source=editor' >
            Download CV
          </a>
          <a className='button-cover' role='button' href='#contacts' >
          <span className="text">Contact Me!</span><span>Thanks!</span>
          </a></div>
    </header>
    

  

    <main>
         <LazyAbout />
         <LazySkills />
         <LazyProjects />
         <LazyContact/>
    </main>
  <LazyFooter />
   <Nav />
    </>
  )
}

export default App
