import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListCatsComponent } from './pages/list-cats/list-cats.component';
import { CreateComponent } from './pages/create/create.component';
import { CatDetailsComponent } from './pages/cat-details/cat-details.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'list-cats', component: ListCatsComponent},
    {path: 'list-cats/:catName', component: CatDetailsComponent},
    {path: 'create', component: CreateComponent}
];
