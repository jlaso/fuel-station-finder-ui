import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DetailComponent }  from './Details/detail.component';

const routes: Routes = [
    { path: 'detail',       component: DetailComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}