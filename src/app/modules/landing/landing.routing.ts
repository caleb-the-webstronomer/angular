import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingHome } from "./landing-home";

const routes: Routes = [
  {
    path: "",
    component: LandingHome,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRouting {}
