import { LoginComponent } from './login/login.component';

import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    {path: '', component: LoginComponent},
];
export const routing = RouterModule.forRoot(APP_ROUTES);
