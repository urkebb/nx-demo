import { Component, Input } from '@angular/core';

@Component({
  selector: 'viber-bot-block-ui',
  styleUrls: ['./block-ui.component.scss'],
  template: `
    <div class="block-ui" *ngIf="loading">
      <section class="block-ui-message">
        <img src="assets/skateboarding.gif" alt="loading..." class="p-mb-3" />
        <h2 class="p-text-center">
          <ng-content></ng-content>
        </h2>
      </section>
    </div>
  `,
})
export class BlockUiComponent {
  /**
   * @description
   * This component is displayed in full screen to show the user that an action is being processed
   */

  /**
   * * Inputs
   */
  @Input() loading = false;
}
