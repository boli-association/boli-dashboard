export interface Input {
  label: string;
  id: string;
  minLength?: number;
  register?: Function;
  errors?: Object;
  type?: string;
  pattern?: Object;
  inputPattern?: string;
  maxLength?: number;
}
