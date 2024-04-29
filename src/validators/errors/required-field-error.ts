export class RequiredFieldError extends Error {
  constructor(field: string) {
    super('Field Required');
    this.name = `RequiredFieldError - ${field}`;
  }
}
