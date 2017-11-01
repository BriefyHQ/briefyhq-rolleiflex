import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Directive(
  { selector: '[appValidRoles]' }
)
export class ValidRolesDirective {

  constructor(
    private authService: AuthService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set appValidRoles(roles: string[]) {
    const viewContainer = this.viewContainer;
    if (this.authService.checkRequiredRoles(roles)) {
      viewContainer.createEmbeddedView(this.templateRef);
    } else {
      viewContainer.clear();
    }
  }

}
