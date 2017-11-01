export class Model {

  constructor (data: any = {}) {
    this._update(data);
  }

  private _update(data: any) {
    if ((data !== undefined) && (data !== null) && (data !== {})) {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          this[key] = data[key];
        }
      }
    }
  }

  update(data: any) {
    this._update(data);
  }

  get (field: string): any {
    if (field) {
      const isDotted = field.indexOf('.') > 0;
      if (!isDotted) {
        return this[field];
      } else {
        const fields: string[] = field.split('.');
        let value = this;
        for (let i = 0, len = fields.length; i < len; ++i) {
          if (value[fields[i]]) {
            value = value[fields[i]];
          } else {
            return '';
          }
        }
        return value;
      }
    }
  }
}
