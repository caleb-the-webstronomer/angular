import { Component } from "@angular/core";
import { Store } from "@ngxs/store";
import { ChangeTheme } from "../../../store/kaleb.actions";

@Component({
  selector: "themer",
  templateUrl: "./themer.html",
  styleUrls: ["./themer.scss"],
})
export class Themer {
  themesel: string;

  constructor(private store: Store) {}

  changer() {
    this.store.dispatch(new ChangeTheme(this.themesel));
  }
}
