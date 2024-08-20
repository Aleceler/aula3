import { createBrowserRouter } from 'react-router-dom'
import EffectSample from "./hooks/effectSample";
import RefSample from "./hooks/refSample";
import LayoutEffectSample from "./hooks/layoutEffectSample";
import StateSample from "./hooks/stateSample";
import MemoSample from "./hooks/memoSample";
import CallbackSample from "./hooks/callbackSample";

const RouterConfig = createBrowserRouter([
    {
        path: '/stateSample',
        element: <StateSample />
    },
    {
        path: '/effectSample',
        element: <EffectSample />
    },
    {
        path: '/layoutEffectSample',
        element: <LayoutEffectSample />
    },
    {
        path: '/refSample',
        element: <RefSample />
    },
    {
        path: '/memoSample',
        element: <MemoSample />
    },
    {
        path: '/callbackSample',
        element: <CallbackSample />
    },
])

export default RouterConfig