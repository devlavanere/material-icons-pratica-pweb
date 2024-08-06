import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoListComponent } from './components/produto-list/produto-list.component';
import { ProdutoFormComponent } from './components/produto-form/produto-form.component';
import { ProdutoService } from './services/produto.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoListComponent,
    ProdutoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCard,
    MatCardContent,
    MatFormField,
    MatCardActions,
    MatLabel,
    MatIcon
  ],
  providers: [ProdutoService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
