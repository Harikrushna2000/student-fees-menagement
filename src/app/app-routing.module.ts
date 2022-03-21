import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDetailComponent } from './all-detail/all-detail.component';
import { CreatComponent } from './creat/creat.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'allData',component:AllDetailComponent},
  {path:'creat/:stu_id',component:CreatComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
