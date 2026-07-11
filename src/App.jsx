import { Navbar, Welcome, Dock } from '#components'
import { Safari, Terminal, Resume, Finder, Text, Image, Contact } from '#windows';
import gsap from 'gsap';

import { Draggable } from "gsap/Draggable";

// eslint-disable-next-line no-undef
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome/>
      <Dock />

      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder />
      <Text />
      <Image />
      <Contact />
    </main>
  )
}

export default App