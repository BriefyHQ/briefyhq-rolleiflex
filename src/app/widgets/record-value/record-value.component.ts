import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnDestroy,
  OnInit,
  ReflectiveInjector,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import {
  BooleanValueComponent,
  CoordinatesValueComponent,
  CountryValueComponent,
  DateValueComponent,
  DateTimeValueComponent,
  DefaultValueComponent,
  DownloadValueComponent,
  HTMLValueComponent,
  IntegerValueComponent,
  JSONValueComponent,
  LinksValueComponent,
  LocalDateTimeValueComponent,
  LocalityValueComponent,
  PriceValueComponent,
  RelationValueComponent,
  RouteLinkValueComponent,
  SafeURLValueComponent,
  TextStyleValueComponent,
  TextValueComponent,
  URLValueComponent,
  ViewValueComponent
} from './types';


const componentViews = {
  'boolean': BooleanValueComponent,
  'coordinates': CoordinatesValueComponent,
  'country': CountryValueComponent,
  'date': DateValueComponent,
  'datetime': DateTimeValueComponent,
  'default': DefaultValueComponent,
  'download': DownloadValueComponent,
  'html': HTMLValueComponent,
  'json': JSONValueComponent,
  'links': LinksValueComponent,
  'local-datetime': LocalDateTimeValueComponent,
  'locality': LocalityValueComponent,
  'price': PriceValueComponent,
  'relation': RelationValueComponent,
  'routeLink': RouteLinkValueComponent,
  'safe_url': SafeURLValueComponent,
  'text': TextValueComponent,
  'text-style': TextStyleValueComponent,
  'url': URLValueComponent,
  'view': ViewValueComponent,
};


@Component({
  selector: 'brf-record-value',
  template: `<div #valueContainer></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecordValueComponent implements OnInit, OnDestroy {

  @ViewChild('valueContainer', { read: ViewContainerRef }) componentContainer: ViewContainerRef;

  @Input() record: any;
  @Input() field: any;

  private viewInstance: any;

  constructor(
    private container: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
  ) { }

  ngOnInit() {
    let viewClass = componentViews['default'];
    const recordType = this.field['type'];
    if (componentViews.hasOwnProperty(recordType)) {
      viewClass = componentViews[recordType];
    }
    this.viewInstance = this.createView(this.container, viewClass);
  }

  ngOnDestroy() {
    if (this.viewInstance) {
      this.viewInstance.destroy();
    }
  }

  createView(container: ViewContainerRef, viewClass: any): ComponentRef<any> {
    const componentFactory = this.resolver.resolveComponentFactory(viewClass);
    const viewComponent = container.createComponent(componentFactory);
    (<DefaultValueComponent>viewComponent.instance).field = this.field;
    (<DefaultValueComponent>viewComponent.instance).record = this.record;
    return viewComponent;
  }

}
