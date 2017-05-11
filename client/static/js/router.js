import App from './containers/App'
import Login from './containers/Login'

export default store => {
    const routes = [{
        path: '/',
        component: App,
        onChange () {
            // store.dispatch(setToolbarRightElement(null))
            // reset()
        },
        childRoutes: [
            // require('./modules/User'),
            // require('./modules/Message'),
            // require('./modules/History'),
            // require('./modules/Agency'),
            // //require('./modules/Help'),
            // require('./modules/Lottery'),
            // require('./modules/Fund')
        ],
        onEnter (nextState, replace, cb) {
            // const checkAuth = () => {
            //     const {auth: { user }} = store.getState()
            //
            //     if (!user) {
            //         replace('/login')
            //     }
            //
            //     cb()
            // }
            //
            // if (!isAuthLoaded(store.getState())) {
            //     store.dispatch(loadAuth()).then(checkAuth)
            // } else {
            //     checkAuth()
            //     store.dispatch(loadAuth()).then(checkAuth)
            // }
            // cb()
        }
    }, {
        path: '/login',
        component: Login
    }];

    return routes
}