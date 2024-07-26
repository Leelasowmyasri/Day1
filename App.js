import { createContext,useState } from 'react';
import Home from './Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import DataFetching from './fetchData';
import Profile from './profile';
export const cartContext=createContext();
function App(){
    const[globalCount,setGlobalCount]=useState(0);
    const[globalUserObject,setGlobalUserObject]=useState({});
    const[globalIsLogin,setGlobalIsLogin]=useState(false);
    return(
        <cartContext.Provider value={{globalCount,setGlobalCount,globalUserObject,setGlobalUserObject,globalIsLogin,setGlobalIsLogin}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/products" element={<DataFetching/>}></Route>
                <Route path="/profile" element={<Profile />}></Route>
            </Routes>
        </BrowserRouter>
        </cartContext.Provider>
    );
}
export default App;