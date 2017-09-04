import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { SelectComponent } from './select/select.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { TextareaComponent } from './textarea/textarea.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { IconComponent } from './icon/icon.component';
import { ButtonComponent } from './button/button.component';
import { ChipsComponent } from './chips/chips.component';
import { ProgresspinerComponent } from './progresspiner/progresspiner.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { TabsComponent } from './tabs/tabs.component';
import { DialogComponent } from './dialog/dialog.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CourseService } from './course.service';
import { MdComponentsModule } from './md-components.module';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    RadioComponent,
    SelectComponent,
    InputComponent,
    TextareaComponent,
    DatepickerComponent,
    IconComponent,
    ButtonComponent,
    ChipsComponent,
    ProgresspinerComponent,
    TooltipsComponent,
    TabsComponent,
    DialogComponent,
    EditCourseComponent
  ],
  entryComponents: [
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdComponentsModule
    // MdCheckboxModule,
    // MdRadioModule,
    // MdSelectModule,
    // MdInputModule,
    // MdDatepickerModule,
    // MdNativeDateModule,
    // MdIconModule,
    // MdButtonModule,
    // MdChipsModule,
    // MdProgressSpinnerModule,
    // MdTooltipModule,
    // MdTabsModule,
    // MdDialogModule
  ],
  providers: [
    CourseService,
    { provide: CourseService, useClass: CourseService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
