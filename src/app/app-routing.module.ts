import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import{ContentComponent} from './pages/content/content.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },

  {


  path: 'content/:id',
  component: ContentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
