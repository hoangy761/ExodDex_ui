import { DashboardLayout, EarnLayout } from '~/components/Layout';

import Home from '~/pages/Home';
import Trade from '~/pages/Trade';
import Analytics from '~/pages/Analytics';
import Staking from '~/pages/Staking';
import Error404 from '~/pages/Error404';

const publicRoutes = [
    { path: '/', component: Home, layout: DashboardLayout },
    { path: '/trade', component: Trade },
    { path: '/analytics', component: Analytics },
    { path: '/staking', component: Staking, layout: EarnLayout },
    { path: '/*', component: Error404 },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
