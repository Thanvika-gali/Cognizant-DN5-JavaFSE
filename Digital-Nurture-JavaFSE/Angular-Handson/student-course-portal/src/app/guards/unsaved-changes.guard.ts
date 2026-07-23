import { CanDeactivateFn } from '@angular/router';
export interface HasUnsavedChanges { enrollForm: { dirty: boolean }; }
export const unsavedChangesGuard: CanDeactivateFn<HasUnsavedChanges> = component => !component.enrollForm.dirty || window.confirm('You have unsaved changes. Leave?');
