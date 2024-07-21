import { lazy,Suspense} from 'react'
import Nav from './Components/Nav'
import {CircleLoader} from 'react-spinners'
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
          <a className='button-background-move' download href='https://drive.google.com/file/d/1HKcFHfi2SS7CoVblHgbgJoakth_Vg5by/view?usp=sharing' >
            Download CV
          </a>
          <a className='button-cover' role='button' href='#contacts' >
          <span className="text">Contact Me!</span><span>Thanks!</span>
          </a></div>
    </header>
    

  

    <main>
      <Suspense fallback={<CircleLoader color="#8d1c25" />}>
        <LazyAbout />
      </Suspense >
      <Suspense fallback={<CircleLoader color="#8d1c25" />}>
        <LazySkills />
        </Suspense >
        <Suspense fallback={<CircleLoader color="#8d1c25" />}>
           <LazyProjects />
        </Suspense >
        <Suspense fallback={<CircleLoader color="#8d1c25" />}>
           <LazyContact/>
        </Suspense >
         
         
         
        
    </main>
  <LazyFooter />
   <Nav />
    </>
  )
}

export default App
