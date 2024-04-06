import styles from './App.module.css';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { GradientBackground } from './components/GradientBackground/GradientBackground';

function App() {
  return (
    <div className={styles.App}>
      <GradientBackground />
      <Navbar />
      <Hero />

      HELLO
    </div>
  )
}

export default App
