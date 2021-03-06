import { NgModule, ErrorHandler } from '@angular/core';
import { EditorRoutingModule } from './editor-routing.module';

import { EditorCanvasComponent } from './components/canvas';
import { EditorHeaderComponent } from './components/header';
import { EditorToolbarComponent } from './components/toolbar';
import { EditorOutlineComponent } from './components/outline';
import { EditorOutlineModalComponent } from './components/outline';
import { EditorMenuComponent } from './components/menu';
import { ShareModule } from '../share';
import { CoreModule } from '../core';
import { EditorComponent } from './editor.component';
import { LinkModalComponent } from './components/link-modal/link-modal.component';
import { SelectionMenuComponent } from './components/selection-menu/selection-menu.component';
import { LinkMenuComponent } from './components/link-menu/link-menu.component';
import { EditorErrorHandler } from './editor.errorhandler';
import { EditorParticipantsComponent } from './components/participants';
import { EditorParticipantsModalComponent } from './components/participants';
import { ShareModalComponent } from './components/share-modal';
import { CommentsComponent, CommentsModalComponent } from './components/comments';

@NgModule({
  declarations: [
    EditorComponent,
    EditorHeaderComponent,
    EditorCanvasComponent,
    EditorToolbarComponent,
    LinkModalComponent,
    SelectionMenuComponent,
    LinkMenuComponent,
    EditorOutlineComponent,
    EditorOutlineModalComponent,
    EditorMenuComponent,
    EditorParticipantsComponent,
    EditorParticipantsModalComponent,
    ShareModalComponent,
    CommentsComponent,
    CommentsModalComponent
    ],
  imports: [
    EditorRoutingModule,
    ShareModule,
    CoreModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: EditorErrorHandler }
  ]
})

export class EditorModule { }
