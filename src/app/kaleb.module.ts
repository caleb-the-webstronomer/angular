import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { KalebRouting } from "./kaleb.routing";

import { Kaleb } from "./kaleb";

@NgModule({
  declarations: [Kaleb],
  imports: [BrowserModule, KalebRouting],
  providers: [],
  bootstrap: [Kaleb],
})
export class KalebModule {}
