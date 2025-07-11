// Angular
import { Routes } from '@angular/router';

// Guard
//import { authGuard } from './authentication/guard/auth.guard';

//pages
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

];
