import {Routes, Route} from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
  )
}

export default Router