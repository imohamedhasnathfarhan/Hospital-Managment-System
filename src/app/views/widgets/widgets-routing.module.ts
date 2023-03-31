import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetsComponent } from './widgets/widgets.component';

const routes: Routes = [
  {
    path: '',
    component: WidgetsComponent,
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
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetsRoutingModule {
}
