import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/views/login/login.component';
import { SignupComponent } from '../components/views/signup/signup.component';
import { VotesComponent } from '../components/views/votes/votes.component';
import { HomeComponent } from '../components/views/home/home.component';
import { PageNotFoundComponent } from '../components/views/page-not-found/page-not-found.component';
import { AuthGuard } from '../guards/auth-guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent,canActivate: [AuthGuard] },
    { path: 'votes', component: VotesComponent,canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
  	{ path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);