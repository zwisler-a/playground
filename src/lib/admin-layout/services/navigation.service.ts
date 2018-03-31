import { EventEmitter, Injectable } from "@angular/core";
import { NavigationModelItem } from "./navigation-model.interface";

/**
 * Service to configure the admin-layout navigation on the left side
 *
 * ```typescript
 * constructor(private navigationService: NavigationService){
 *   this.navigationService.setModel({
 *     name:'Home', path:'home', icon:'menu'
 *   })
 * }
 * ```
 *
 */
@Injectable()
export class NavigationService {
  private _model: NavigationModelItem[];

  /**
   * Emitted when the navigation model changes
   */
  public onNavigationModelChanged = new EventEmitter<NavigationModelItem[]>();

  /**
   * Set the navigation of the admin-layout
   * @param {NavigationModelItem[]} model
   */
  public setModel(model: NavigationModelItem[]) {
    this._model = model;
    this.onNavigationModelChanged.next(model);
  }

  /**
   * Current navigation Model
   * @type {NavigationModelItem[]}
   */
  public get model() {
    return this._model;
  }
}
