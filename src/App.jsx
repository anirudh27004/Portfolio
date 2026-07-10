import { Navbar, Welcome, Dock } from '#components'
import { Terminal } from '#windows';
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
    </main>
  )
}

export default App