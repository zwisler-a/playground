import { Injectable } from "@angular/core";
import { NavigationItem } from "./navigation.interface";

@Injectable()
export class NavigationService {
  private _model: NavigationItem[];

  constructor() {}

  public setModel(model: NavigationItem[]) {
    this._model = model;
  }

  get navigation() {
    return this._model;
  }
}
