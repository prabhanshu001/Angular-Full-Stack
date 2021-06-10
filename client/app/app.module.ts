import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { MatInputModule } from "@angular/material/input";
import { MatFormField } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";
import { MemberdetailComponent } from "./pages/memberdetail/memberdetail.component";
// import { MapComponent } from "./pages/map/map.component";

@NgModule({
  imports: [
    MatTableModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    // MatFormField,

    ToastrModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    MemberdetailComponent,
    // MapComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
