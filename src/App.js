

import {BrowserRouter, Routes, Route } from "react-router-dom"
import Links from "./components/Links/Links";
import Preview from "./components/Preview/Preview";
import Profile from "./components/Profile/Profile";
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/Home" element={<Links />}> </Route>
  <Route path="/Preview" element={<Preview />}> </Route>
  <Route path="/Profile" element={<Profile />}> </Route>

</Routes>
</BrowserRouter> );
}

export default App;