import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
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

import {HttpClientModule} from '@angular/common/http';
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
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './card/card.component';
import { CarritoComponent } from './carrito/carrito.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    CardComponent,
    CarritoComponent,
    NavComponent,
    PerfilUsuarioComponent
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
    HttpClientModule,
    InputTextModule,
    PasswordModule,
    DividerModule,
    ImageModule,
    ChipsModule,
    CalendarModule,
    AutoCompleteModule,
    FormsModule,
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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
