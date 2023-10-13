import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Prime
import { MenubarModule } from 'primeng/menubar';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MenubarModule,
    CarouselModule,
    ButtonModule,
    TabMenuModule,
    TableModule,
    InputTextModule,
    PasswordModule,
    DividerModule,
    CheckboxModule,
    RadioButtonModule,
    DialogModule,
    ConfirmPopupModule,
    ToastModule,
    
    
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MenubarModule,
    CarouselModule,
    ButtonModule,
    TabMenuModule,
    TableModule,
    InputTextModule,
    PasswordModule,
    DividerModule,
    CheckboxModule,
    RadioButtonModule,
    DialogModule,
    ConfirmPopupModule,
    ToastModule
    
  ],
})
export class SharedModule { }
