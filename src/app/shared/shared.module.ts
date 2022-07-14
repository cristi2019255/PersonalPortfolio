import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { TranslocoModule } from '@ngneat/transloco';
import { GreetingAnimationComponent } from './components/greeting-animation/greeting-animation.component';

@NgModule({
  declarations: [FooterComponent, GreetingAnimationComponent],
  imports: [CommonModule, TranslocoModule],
  exports: [FooterComponent, GreetingAnimationComponent],
})
export class SharedModule {}
