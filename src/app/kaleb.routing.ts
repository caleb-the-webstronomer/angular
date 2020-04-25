import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./modules/landing/landing#Landing",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class KalebRouting {}
