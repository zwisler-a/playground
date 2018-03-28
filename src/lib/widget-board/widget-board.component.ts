import {
  AfterViewInit, Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output, QueryList, ViewChild,
  ViewChildren
} from '@angular/core';
import {MatGridList} from "@angular/material";
import {CustomWidgetComponent} from "../../app/custom-widget/custom-widget.component";

@Component({
  selector: 'pg-widget-board',
  templateUrl: './widget-board.component.html',
  styleUrls: ['./widget-board.component.scss']
})
export class WidgetBoardComponent implements OnInit, AfterViewInit {

  @ViewChild('gridList')
  gridList: MatGridList;

  @ViewChildren('widgetContainer')
  widgetContainer: QueryList<any>;

  @Input()
  cols = 4;
  @Input()
  rowHeight = '1:1';

  @Input()
  editing = false;

  @Input()
  widgets: { component: any, placeholder?: boolean }[] = [
    {component: CustomWidgetComponent},
    {component: CustomWidgetComponent},
    {component: CustomWidgetComponent}
  ];
  @Output()
  widgetsChange = new EventEmitter();

  private dragedWidget = undefined;
  private cellHeight: any;
  private cellWidth: number;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.calcCellSize();

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.widgets.forEach((widget, index) => {
        this.loadWidget(index, widget);
      });
    });
  }

  dragstart(index) {
    this.dragedWidget = index;
  }

  dragstop(ev) {
    this.dragedWidget = undefined;
  }

  mouseMove(ev: MouseEvent) {
    if (!Number.isInteger(this.dragedWidget)) {
      return;
    }
    const newId = this.determineCurrentField(ev.clientX, ev.clientY);
    if (newId !== this.dragedWidget) {
      this.widgets = this.arrayMove(this.widgets, this.dragedWidget, newId);
      this.dragedWidget = newId;
      this.widgetsChange.emit(this.widgets);
    }
  }

  private loadWidget(index, widget) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(widget.component);
    let viewContainerRef = this.widgetContainer.toArray()[index].viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
  }

  toggleEdit() {
    this.editing = !this.editing;
  }


  /**
   * Move widget in array
   * @param {any[]} arr widget array
   * @param {number} oldIndex
   * @param {number} newIndex
   * @returns {any[]}
   */
  private arrayMove(arr: any[], oldIndex: number, newIndex: number) {
    if (newIndex > arr.length - 1) {
      let fill = newIndex - (arr.length - 1);
      while (fill-- > 0) {
        arr.push({placeholder: true})
      }
    }
    const tmp = arr[newIndex];
    arr[newIndex] = arr[oldIndex];
    arr[oldIndex] = tmp;
    while (arr[arr.length - 1].placeholder) {
      arr.pop();
    }
    return arr;
  }
  ;

  /**
   * Determines the index at wich the widget should be positioned
   * @param {number} x clientX
   * @param {number} y clientY
   * @returns {number} index of array
   */
  private determineCurrentField(x: number, y: number) {
    const nativeEl = this.gridList['_element'].nativeElement;
    const glX = x - nativeEl.offsetLeft;
    const glY = y - nativeEl.offsetTop;
    const col = Math.floor(glX / this.cellWidth);
    const row = Math.floor(glY / this.cellHeight);
    return (this.cols * row + col);
  }

  /**
   * Clac the cell size of the gridlist for further calculations
   */


  private calcCellSize() {
    const nativeEl = this.gridList['_element'].nativeElement;
    this.cellWidth = nativeEl.offsetWidth / this.cols;
    const rowHeight = this.rowHeight;
    if (typeof rowHeight === "string") {
      const d = rowHeight.split(':');
      this.cellHeight = (Number.parseInt(d[1]) / Number.parseInt(d[0])) * this.cellWidth;
    } else {
      this.cellHeight = rowHeight;
    }
  }

}
