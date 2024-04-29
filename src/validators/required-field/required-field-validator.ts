import { RequiredFieldError } from '../errors';
import { FieldValidator } from '../protocols';

export class RequiredFieldValidator implements FieldValidator {
  constructor(readonly field: string) {}

  validate(value?: string): Error | null {
    return value ? null : new RequiredFieldError(this.field);
  }
}
