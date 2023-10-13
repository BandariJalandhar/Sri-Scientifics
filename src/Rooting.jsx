
import {Route,Routes} from "react-router-dom"
import Mainpage from './Pages/Mainpage'

import Technicalsupport from './Pages/Technicalsupport'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Requestaquote from './Pages/Requestaquote'

import Apiintermediates from "./Pages/Apiintermediates"
import Resignsandmetalscavangers from "./Pages/Resignsandmetalscavangers"
import HPLCColumns from './Pages/HPLCColumns'
import MicrobiologyAgarMedia from './Pages/MicrobiologyAgarmedia'
import Labaratoriesandchemicalsolvents from "./Pages/Labaratoriesandchemicalsolvents"
import Labaratoriesandchemicalsolvents2 from "./Pages/Labaratoriesandchemicalsolvents2"
import Resignsandmetalscavangers2 from "./Pages/Resignsandmetalscavangers2"
import Apis from "./Pages/Apis"
import SubCategory from "./Pages/Categories"
const Rooting = () => {
  return (
    <div>
         <Routes> 
             <Route path='/' Component={Mainpage}></Route>
             {/* <Route path="/Products" Component={Products}></Route> */}
            <Route path='HPCLColumns' Component={HPLCColumns}></Route>
            <Route path='MicrobiologyAgarmedia' Component={MicrobiologyAgarMedia}></Route>
            <Route path='/Apiintermediates' Component={Apiintermediates}></Route>
            <Route  path='/Resignsandmetalscavangers' Component={Resignsandmetalscavangers}></Route>
            <Route  path='/Resignsandmetalscavangers2' Component={Resignsandmetalscavangers2}></Route>
            <Route path='/Technicalsupport' Component={Technicalsupport}></Route>
            <Route path='/About' Component={About}></Route>
            <Route path='/Contact' Component={Contact}> </Route>
            <Route path='/Requestaquote' Component={Requestaquote}></Route>
            <Route path='/Labaratoriesandchemicalsolvents' Component={Labaratoriesandchemicalsolvents}></Route>
            <Route path='/Labaratoriesandchemicalsolvents2' Component={Labaratoriesandchemicalsolvents2}></Route>
            <Route path="/apis" Component={Apis} />
            <Route path="/categories" Component={SubCategory} />
         </Routes>
    </div>
  )
}
export default Rooting;
