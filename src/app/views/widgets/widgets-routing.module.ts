import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetsComponent } from './widgets/widgets.component';
import { CompanyComponent } from '../company/company.component';

const routes: Routes = [
  {
    path: '',
    component: WidgetsComponent,
    // component: CompanyComponent,
    
    data: {
      title: 'System'
    },
    children: [
      {
        path: '',
        component: WidgetsComponent,
        data: {
          title: 'Profile',
        },
      },
      {
        path: '',
        component: CompanyComponent,
        data: {
          title: 'Company',
        },
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetsRoutingModule {
}
