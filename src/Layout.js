import React from 'react'
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Page from './components/Page/Page'
import PageDetail from './components/PageDetail/PageDetail'
export default function Layout() {
  return (
   
   <Router>
     <div>   
<Navbar/>
<Routes>
  <Route path="/category/:id" element={<Page/>}/>
  <Route path="/category/:id/:id" element={<PageDetail/>}/>
</Routes>
</div>
 </Router> 
   
  )
}
