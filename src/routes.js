import Home from './pages/Home/Home'
import UsersList from './pages/Users/UsersList'
import NewUser from './pages/Users/NewUser';
import Products from './pages/Products/Products';
import Product from './pages/Product/product';
let routes=[
    {path:'/',element:<Home/>},
    {path:'/users',element:<UsersList/>},
    {path:'/newUser',element:<NewUser/>},
    {path:'/products',element:<Products/>},
    {path:'/product/:productId', element:<Product/>}
]

export default routes;