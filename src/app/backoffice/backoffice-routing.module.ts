import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { FormationAdminComponent } from './formation-admin/formation-admin.component';
import { EventsAdminComponent } from './events-admin/events-admin.component';
import { EventsAddComponent } from './events-add/events-add.component';

const routes: Routes = [{ path: '', component: BackofficeComponent },{path:'back',component:FormationAdminComponent},

{path:'adminevent',component:EventsAdminComponent},
{path:'addevent',component:EventsAddComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
