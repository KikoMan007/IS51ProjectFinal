import { Routes, RouterModule } from '@angular/router';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { InflationComponent } from './inflation/inflation.component';
import { BondGrowthComponent } from './bond-growth/bond-growth.component';
import { RuleSeventwoComponent } from './rule-seventwo/rule-seventwo.component';
import { InterestComponent } from './interest/interest.component';


const routes: Routes = [
    {
        path: '',
        component: InterestComponent
    },
    {
        path: 'inflation',
        component: InflationComponent
    },
    {
        path: 'bond-growth',
        component: BondGrowthComponent
    },
    {
        path: 'rule-seventwo',
        component: RuleSeventwoComponent
    }

];

export const AppRoutes = RouterModule.forRoot(routes);

