import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {StyleClassModule} from 'primeng/styleclass';
import {CheckboxModule} from 'primeng/checkbox';
import {CarouselModule} from 'primeng/carousel';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {DividerModule} from 'primeng/divider';
import {ImageModule} from 'primeng/image';
import {ChipsModule} from 'primeng/chips';
import {CalendarModule} from 'primeng/calendar';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {AvatarModule} from 'primeng/avatar';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {RatingModule} from 'primeng/rating';
import {SidebarModule} from 'primeng/sidebar';
import {ToastModule} from 'primeng/toast';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {MenuModule} from 'primeng/menu';
import {BadgeModule} from 'primeng/badge';
import {DialogModule} from 'primeng/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { CarritoComponent } from './carrito/carrito.component';
=======
import { NavComponent } from './nav/nav.component';
>>>>>>> 2b2c49248d4bc3fd7e11c93bb3b065fef1b979ec

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
<<<<<<< HEAD
    CardComponent,
    CarritoComponent
=======
    NavComponent
>>>>>>> 2b2c49248d4bc3fd7e11c93bb3b065fef1b979ec
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BadgeModule,
    ButtonModule,
    CardModule,
    StyleClassModule,
    CheckboxModule,
    CarouselModule,
<<<<<<< HEAD
    HttpClientModule
=======
    InputTextModule,
    PasswordModule,
    DividerModule,
    ImageModule,
    ChipsModule,
    CalendarModule,
    AutoCompleteModule,
    FormsModule,
    HttpClientModule,
    MessagesModule,
    MessageModule,
    MenuModule,
    AvatarModule,
    DataViewModule,
    DropdownModule,
    RatingModule,
    ToastModule,
    SidebarModule,
    DynamicDialogModule,
    DialogModule
>>>>>>> 2b2c49248d4bc3fd7e11c93bb3b065fef1b979ec
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
