import Blog from "../pages/Blog/Blog";
import Flashcards from "../pages/Flashcards/Flashcards";
import Home from "../pages/Home/Home";
import Messenger from "../pages/Messenger/Messenger";
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
        path: '/messenger',
        page: Messenger,
        isShowHeader: true,
    },
    {
        path: '/tests',
        page: Tests,
        isShowHeader: true,
    },
    {
        path: '/flashcards',
        page: Flashcards,
        isShowHeader: true,
    },
    {
        path: '/blogs',
        page: Blog,
        isShowHeader: true,
    },
    {
        path: '*',
        page: NotFound
    }
]

export default routes
