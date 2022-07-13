import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { DescriptionComponent } from './components/description/description.component';
import { GeneralInformationComponent } from './components/general-information/general-information.component';
import { MatIconModule } from '@angular/material/icon';
import { GameDevelopmentDialog } from './components/game-development-pop-up/game-development-pop-up.component';
import { MatDialogModule } from '@angular/material/dialog';
import { WebDevelopmentDialog } from './components/web-development-dialog/web-development-dialog.component';
import { AndroidDevelopmentDialog } from './components/android-development-dialog/android-development-dialog.component';
import { AiDevelopmentDialog } from './components/ai-development-dialog/ai-development-dialog.component';
@NgModule({
  declarations: [
    LandingPageComponent,
    DescriptionComponent,
    GeneralInformationComponent,
    GameDevelopmentDialog,
    WebDevelopmentDialog,
    AndroidDevelopmentDialog,
    AiDevelopmentDialog,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    MatIconModule,
    MatDialogModule,
  ],
  exports: [LandingPageComponent],
})
export class LandingPageModule {}
