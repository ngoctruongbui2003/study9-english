import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Tests from "../pages/Tests/Tests";
import UserDetails from "../pages/UserDetails/UserDetails";

const routes = [
    {
        path: '/',
        page: Home,
        isShowHeader: true,
    },
    {
        path: '/login',
        page: SignIn,
        isShowHeader: true,
    },
    {
        path: '/register',
        page: SignUp,
        isShowHeader: true,
    },
    {
        path: '/user-details',
        page: UserDetails,
        isShowHeader: true,
    },
    {
        path: '/tests',
        page: Tests,
        isShowHeader: true,
    },
    {
        path: '*',
        page: NotFound
    }
]

export default routes
