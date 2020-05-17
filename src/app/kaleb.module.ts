// MODULES
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { KalebRouting } from "./kaleb.routing";
import { Znippets } from "./znippets/znippets";
import { ScullyLibModule } from "@scullyio/ng-lib";
// NGXS STORE
import { NgxsModule } from "@ngxs/store";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsSelectSnapshotModule } from "@ngxs-labs/select-snapshot";
import { KalebState } from "./store/kaleb.state";
// COMPONENTS
import { Kaleb } from "./kaleb";

@NgModule({
  declarations: [Kaleb],
  imports: [
    BrowserModule,
    KalebRouting,
    Znippets,
    NgxsModule.forRoot([KalebState]),
    NgxsStoragePluginModule.forRoot({
      key: ["kalebstate"],
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsSelectSnapshotModule.forRoot(),
    ScullyLibModule,
  ],
  providers: [],
  bootstrap: [Kaleb],
})
export class KalebModule {}
