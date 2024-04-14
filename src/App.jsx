import styles from './App.module.css';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { GradientBackground } from './components/GradientBackground/GradientBackground';
import { ThreeCardBlock } from './components/InfoCard/ThreeCardBlock';

function App() {
  return (
    <div className={styles.App}>
      <GradientBackground />
      <Navbar />
      <Hero />

      <ThreeCardBlock /> 


      <h1>App</h1>
      <h1>App</h1>
      <h1>App</h1>
      <h1>App</h1>
      <h1>App</h1>
      <h1>App</h1>
      <h1>App</h1>
      <h1>App</h1>
      <h1>App</h1>
    </div>
  )
}

export default App
