import { SchemaType, SchemaTypes, Types, SchemaTypeOptions } from "mongoose";

class Address extends SchemaType {
  constructor(key: string, options: SchemaTypeOptions<any>) {
    super(key, options, "Address");
  }

  cast(val: any) {
    if (!val || typeof val !== "object") {
      throw new Error(`'${val}' is not a valid Address.`);
    }

    const { street, city, country } = val;

    if (
      typeof street !== "string" ||
      typeof city !== "string" ||
      typeof country !== "string"
    ) {
      throw new Error(`'${val}' is not a valid Address.`);
    }

    return {
      street: street.trim(),
      city: city.trim(),
      country: country.trim(),
    };
  }
}

(SchemaTypes as any).Address = Address;

export { Address };
