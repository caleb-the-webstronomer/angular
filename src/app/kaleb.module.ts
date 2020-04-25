import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// NGXS STORE
import { NgxsModule } from "@ngxs/store";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsSelectSnapshotModule } from "@ngxs-labs/select-snapshot";
import { KalebState } from "./store/kaleb.state";
// MODULES
import { KalebRouting } from "./kaleb.routing";
import { Znippets } from "./znippets/znippets";
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
  ],
  providers: [],
  bootstrap: [Kaleb],
})
export class KalebModule {}
