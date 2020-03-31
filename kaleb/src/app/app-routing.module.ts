import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ImageMapComponent } from "./image-map/image-map.component";

const routes: Routes = [
  {
    path: "image",
    component: ImageMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
