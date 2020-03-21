import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatCardModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UploaderComponent } from './uploader/uploader.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {ApiService} from './services/api.service'
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
const appRoutes: Routes = [
  { path: '', component: UploaderComponent },
  { path: 'upload', component: UploaderComponent },
  { path: 'list', component: ListComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent,
    ListComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
