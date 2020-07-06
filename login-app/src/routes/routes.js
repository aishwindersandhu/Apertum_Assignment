import Login from '../components/login/index';
import User from '../components/userDetails/index';
export const routes = [
    {
        path: '/',
        exact: true,
        name: 'Login',
        component: Login
    },
    {
        path: '/login',
        exact: true,
        name: 'Login',
        component: Login
    },
    {
        path: '/user',
        exact: true,
        name: 'User',
        component: User
    },
]