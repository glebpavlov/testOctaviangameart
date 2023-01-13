import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'oct-game-list-item',
  templateUrl: './game-list-item.component.html',
  styleUrls: [ './game-list-item.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    // атрибут tabindex нужен для работы события focus
    '[attr.tabindex]': '-1'
  }
})
export class GameListItemComponent {

  constructor(private sanitizer: DomSanitizer, private changeDetector: ChangeDetectorRef) {
  }

  private _backgroundStyle: SafeStyle;

  get bg(): SafeStyle {
    return this._backgroundStyle;
  }

  @Input()
  set bg(val) {
    this._backgroundStyle = this.sanitizer.bypassSecurityTrustStyle(`url("${val}") center center`);
  }

  /**
   * является ли компонент активным
   */
  public isActive = false;

  @HostListener('focusin')
  @HostListener('mouseenter')
  private onFocus(): void {
    if (!this.isActive) {
      this.isActive = true;
    }
  }

  @HostListener('focusout')
  @HostListener('mouseleave')
  private onFocusout(): void {
    if (this.isActive) {
      this.isActive = false;
    }
  }

  public onClickButton(name: string) {
    alert(`${name}`)
  }
}
