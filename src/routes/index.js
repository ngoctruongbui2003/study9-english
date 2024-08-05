import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import UserDetails from "../pages/UserDetails/UserDetails";

const routes = [
    {
        path: '/',
        page: Home,
        isShowHeader: true,
    },
    {
        path: '/user-details',
        page: UserDetails,
        isShowHeader: true,
    },
    {
        path: '*',
        page: NotFound
    }
]

export default routes
