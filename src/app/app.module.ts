import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChangeColorDirective } from './change-color.directive';
import { ApendDemoDirective } from './directives/apend-demo.directive';
import { ApendDemoComponent } from './compenents/apend-demo.component';
import { Cp1Directive } from './compenents/cp1.directive';
import { Cp2Directive } from './compenents/cp2.directive';
import { AppendChildDirective } from './directives/append-child.directive';
import { InsertBeforeDirective } from './directives/insert-before.directive';
import { RemoveChildDirective } from './directives/remove-child.directive';
import { SelectRootElementDirective } from './directives/select-root-element.directive';
import { SetAndRemoveAttributeDirective } from './directives/set-and-remove-attribute.directive';
import { SetPropertyDirective } from './directives/set-property.directive';
import { AddAndRemoveClassDirective } from './directives/add-and-remove-class.directive';
import { AddAndRemoveStyleDirective } from './directives/add-and-remove-style.directive';
import { ParentNodeDirective } from './directives/parent-node.directive';
import { DataBindingComponent } from './data-binding/data-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    ChangeColorDirective,
    ApendDemoDirective,
    ApendDemoComponent,
    Cp1Directive,
    Cp2Directive,
    AppendChildDirective,
    InsertBeforeDirective,
    RemoveChildDirective,
    SelectRootElementDirective,
    SetAndRemoveAttributeDirective,
    SetPropertyDirective,
    AddAndRemoveClassDirective,
    AddAndRemoveStyleDirective,
    ParentNodeDirective,
    DataBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
