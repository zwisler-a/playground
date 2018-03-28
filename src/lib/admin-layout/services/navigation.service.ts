import {EventEmitter, Injectable} from "@angular/core";
import {NavigationModelItem} from "./navigation-model.interface";

/**
 * Configure the admin-layout navigation on the left side
 */
@Injectable()
export class NavigationService {

  private _model: NavigationModelItem[];

  public onNavigationModelChanged = new EventEmitter<NavigationModelItem[]>();

  constructor() {
  }

  /**
   * Set the navigation of the admin-layout
   * @param {NavigationModelItem[]} model
   */
  public setModel(model: NavigationModelItem[]) {
    this._model = model;
    this.onNavigationModelChanged.next(model);
  }

  public get model() {
    return this._model;
  }


}
