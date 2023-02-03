import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './commun/sidebar/sidebar.component';
import { ListComponent } from './pages/list/list.component';
import { NewResumeComponent } from './pages/new-resume/new-resume.component';
import { ShowComponent } from './pages/show/show.component';

const routes: Routes = [
  {path:'',component:SidebarComponent},
   {path:'list-resume',component:ListComponent},
   {path:'new-resume',component:NewResumeComponent},
   {path:'show',component:ShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
