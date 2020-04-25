// MODULES
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Mat } from "./material";
import { FormsModule } from "@angular/forms";

// WIDGETS
import { Themer } from "./widgets/themer/themer";

const modules = [CommonModule, Mat, FormsModule];

const components = [Themer];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components],
})
export class Znippets {}
