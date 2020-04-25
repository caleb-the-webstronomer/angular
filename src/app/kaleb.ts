import { Component } from "@angular/core";
import { Select } from "@ngxs/store";
import { KalebState } from "./store/kaleb.state";

@Component({
  selector: "kaleb",
  template: `
    <div [class]="theme$ | async">
      <div class="container">
        <themer></themer>
        <router-outlet> </router-outlet>
      </div>
    </div>
  `,
  styles: [""],
})
export class Kaleb {
  @Select(KalebState.getTheme) theme$;

  constructor() {}
}
