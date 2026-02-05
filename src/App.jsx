import Dashboard from "./modules/Dashboard"
import { Sidebar } from "./pages"

function App() {
  return (
   <div className="flex relative">
    <Sidebar/>
    <Dashboard/>
   </div>
  )
}

export default App