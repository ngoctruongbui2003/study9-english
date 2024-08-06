import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from './routes'
import Header from './components/Header/Header'
import Default from './components/Default/Default'
import Footer from './components/Footer/Footer'

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

                  <main style={{ paddingTop: '60px' }}>
                    <route.page/>
                  </main>

                  <Footer />
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
