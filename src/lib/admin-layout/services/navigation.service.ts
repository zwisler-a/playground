import {EventEmitter, Injectable} from "@angular/core";
import {NavigationModelItem} from "./navigation-model.interface";


@Injectable()
export class NavigationService {

  private _model: NavigationModelItem[];

  public onNavigationModelChanged = new EventEmitter<NavigationModelItem[]>();

  constructor() {
  }


  public setModel(model: NavigationModelItem[]) {
    this._model = model;
    this.onNavigationModelChanged.next(model);
  }

  public get model() {
    return this._model;
  }


}
