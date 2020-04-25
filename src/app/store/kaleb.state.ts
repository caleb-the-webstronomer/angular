import { State, Action, StateContext, Selector } from "@ngxs/store";
import { Injectable } from "@angular/core";

import * as actions from "./kaleb.actions";

export interface KalebFace {
  theme: string;
}

let defx = {
  theme: "light-theme",
};

@State<KalebFace>({
  name: "kalebstate",
  defaults: defx,
})
@Injectable()
export class KalebState {
  /* ********************
    S E L E C T O R S
  ********************* */

  @Selector()
  static getTheme(state: KalebFace) {
    return state.theme;
  }

  /* **************************
         A C T I O N S
  *************************** */

  @Action(actions.ChangeTheme)
  ChangeTheme(ctx: StateContext<KalebFace>, action: actions.ChangeTheme) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      theme: action.theme,
    });
  }
}
