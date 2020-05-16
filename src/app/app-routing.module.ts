import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { ProductComponent } from './product/product.component';
import { CheckngComponent } from './checkng/checkng.component';
import { AngularMaterialTableComponent } from './angular-material-table/angular-material-table.component';
import { BootstrapTableComponent } from './bootstrap-table/bootstrap-table.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent},// , canActivate: [AuthGuard]
    { path: 'product', component: ProductComponent }, //checkng
    { path: 'checkng', component: CheckngComponent },
    { path: 'AngularMaterialTable', component: AngularMaterialTableComponent },
    { path: 'BootstrapTableComponent', component: BootstrapTableComponent },
    { path: '', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
