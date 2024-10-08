import { Routes } from '@angular/router';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { DashboardCompComponent } from './components/dashboard-comp/dashboard-comp.component';
import { FeedCompComponent } from './components/feed-comp/feed-comp.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "signup",
        pathMatch: "full"
    },
    {
        path: "signup",
        component: SignupPageComponent
    },
    {
        path: "dashboard",
        component: DashboardCompComponent
    },
    {
        path: "feed",
        component: FeedCompComponent
    },
    {
        path: "profile",
        component: ProfilePageComponent
    }
];
