import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from './routes'
import Header from './components/Header/Header'
import Default from './components/Default/Default'

function App() {
  
  return (
    <Router>
      <Routes>
        { routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <>
                  {route.isShowHeader ? <Header /> : <Default />}
                  <route.page/>
                </>
              }
            />
          )
        }) }
      </Routes>
    </Router>
  )
}

export default App
