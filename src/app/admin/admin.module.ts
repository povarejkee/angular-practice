import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component'
import { AdminRoutingModule } from './admin-routing.module'
import { LoginPageComponent } from './login-page/login-page.component'
import { CreatePageComponent } from './create-page/create-page.component'
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module'
import { ContentGuard } from './shared/services/content.guard'
import { ErrorPageComponent } from './error-page/error-page.component'
import { LoginGuard } from './shared/services/login.guard'
import { FilterPostsPipe } from './shared/filter-posts.pipe'
import { EditPageComponent } from './edit-page/edit-page.component'
import { AlertComponent } from './shared/components/alert/alert.component'
import { AlertService } from './shared/services/alert.service'

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    CreatePageComponent,
    DashboardPageComponent,
    ErrorPageComponent,
    FilterPostsPipe,
    EditPageComponent,
    AlertComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
  ],
  providers: [ContentGuard, LoginGuard, AlertService],
})
export class AdminModule {}
