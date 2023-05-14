import './App.css';
import NavbarComponent from './components/NavbarComponent';
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComponent from './components/HeaderComponent';
import ProjectsComponent from './components/ProjectsComponent';
import AnimatedCircles from './components/AnimatedCircles';
import SkillsComponent from './components/SkillsComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="App">
      <AnimatedCircles />
      <NavbarComponent />
      <HeaderComponent />
      <ProjectsComponent />
      <SkillsComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
