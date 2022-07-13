import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AiDevelopmentDialog } from '../ai-development-dialog/ai-development-dialog.component';
import { AndroidDevelopmentDialog } from '../android-development-dialog/android-development-dialog.component';
import { GameDevelopmentDialog } from '../game-development-pop-up/game-development-pop-up.component';
import { WebDevelopmentDialog } from '../web-development-dialog/web-development-dialog.component';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.scss'],
})
export class GeneralInformationComponent {
  constructor(public dialog: MatDialog) {}

  openGameDialog(): void {
    this.dialog.open(GameDevelopmentDialog, {});
  }

  openWebDevDialog(): void {
    this.dialog.open(WebDevelopmentDialog, {});
  }

  openAndroidDialog(): void {
    this.dialog.open(AndroidDevelopmentDialog, {});
  }

  openAIDialog(): void {
    this.dialog.open(AiDevelopmentDialog, {});
  }
}
