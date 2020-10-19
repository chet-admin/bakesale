import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CauseListComponent } from './components/cause-list/cause-list.component';
import { CauseDetailsComponent } from './components/cause-details/cause-details.component';


const routes: Routes = [
  { path: '', component: CauseListComponent },
  { path: 'cause-details/:id', component: CauseDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
