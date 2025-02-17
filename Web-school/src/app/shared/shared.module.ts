import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatNativeDateModule } from '@angular/material/core';

import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { FilterPipe } from '../pipes/filterPipe.pipe';
import { HighlightSearchPipe } from '../pipes/highlight-search.pipe';
import { CourseBorderStyleDirective } from '../directives/course-border-style.directive';
import { DurationFormatterPipe } from '../pipes/duration-formatter.pipe';
import { OrderByPipe } from '../pipes/order-by.pipe';
import { ConfirmationModalComponent } from './modals/confirmation/confirmation.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { GenericConfirmationModalComponent } from './modals/generic-confirmation-modal/generic-confirmation-modal.component';
import { ErrorMessageComponent } from './modals/error-message/error-message.component';
import { NumberInputComponent } from './modals/number-input/number-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';

// loader module
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
const ANGULAR_MATTERIALS = [
MatFormFieldModule,
MatProgressSpinnerModule,
MatNativeDateModule,
MatAutocompleteModule,
MatChipsModule,
];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ScrollTopComponent,
    FilterPipe,
    HighlightSearchPipe,
    CourseBorderStyleDirective,
    DurationFormatterPipe,
    OrderByPipe,
    ConfirmationModalComponent,
    BreadcrumbComponent,
    GenericConfirmationModalComponent,
    ErrorMessageComponent,
    NumberInputComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ReactiveFormsModule,
    ...ANGULAR_MATTERIALS
    
  ],
  providers: [TranslateService, NgbActiveModal],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    TranslateModule,
    ScrollTopComponent,
    FilterPipe,
    HighlightSearchPipe,
    CourseBorderStyleDirective,
    DurationFormatterPipe,
    OrderByPipe,
    ConfirmationModalComponent,
    NgbModule,
    BreadcrumbComponent,
    GenericConfirmationModalComponent,
    ErrorMessageComponent,
    NumberInputComponent,
    ...ANGULAR_MATTERIALS
  ],
})
export class SharedModule {}
