import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

enum Themes {
  DARK = 'dark',
  LIGHT = 'light',
}

const themeColors = {
  bgColor: '#343a40',
  color: '#ffffff',
};

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'PersonalPortfolio';
  theme: string;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, private router: Router) {
    this.theme = localStorage.getItem('theme') || Themes.DARK;
    if (this.theme === Themes.DARK) {
      this.setThemeDark();
    }
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res: any) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }

  changeTheme(event: any) {
    if (event.target.checked) {
      this.setThemeDark();
    } else {
      this.setThemeLight();
    }
  }

  setThemeDark() {
    console.log('change to dark');
    localStorage.setItem('theme', Themes.DARK);
    document.documentElement.style.setProperty('--bg-color', themeColors.color);
    document.documentElement.style.setProperty('--color', themeColors.bgColor);
  }
  setThemeLight() {
    console.log('change to light');
    localStorage.setItem('theme', Themes.LIGHT);

    document.documentElement.style.setProperty(
      '--bg-color',
      themeColors.bgColor
    );
    document.documentElement.style.setProperty('--color', themeColors.color);
  }
}
