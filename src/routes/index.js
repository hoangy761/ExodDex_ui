import { DashboardLayout, EarnLayout } from '~/components/Layout';

import Home from '~/pages/Home';
import Trade from '~/pages/Trade';
import Analytics from '~/pages/Analytics';
import Staking from '~/pages/Staking';

const publicRoutes = [
    { path: '/', component: Home, layout: DashboardLayout },
    { path: '/trade', component: Trade },
    { path: '/analytics', component: Analytics },
    { path: '/staking', component: Staking, layout: EarnLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
