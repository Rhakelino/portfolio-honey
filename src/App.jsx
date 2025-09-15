import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ProjectDetail from './Pages/ProjectDetail'
import NotFound from './Pages/NotFound'
import ClickSpark from './components/ClickSpark'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ClickSpark>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ClickSpark>
    </Router>
  )
}

export default App
