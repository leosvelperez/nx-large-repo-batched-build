import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Lib0Module } from '@nx-large-repo/app0/lib0';
import { Lib1Module } from '@nx-large-repo/app0/lib1';
import { Lib2Module } from '@nx-large-repo/app0/lib2';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Lib0Module, Lib1Module, Lib2Module],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
