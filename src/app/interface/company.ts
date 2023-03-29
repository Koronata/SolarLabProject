export interface ICompany{
      id: number,
      name: string,
      email: string,
      vat: number,
      phone: string,
      country: string,
      addresses: [
        {
          id: number,
          street: string,
          streetName: string,
          buildingNumber: number,
          city: string,
          zipcode: number,
          country: string,
          county_code: string,
          latitude: number,
          longitude:number
        },
      ],
      website: string,
      image: string,
      contact: {
        id: number,
        firstname: string,
        lastname: string,
        email: string,
        phone: string,
        birthday: string,
        gender: string,
        address:
          {
            id: number,
            street: string,
            streetName: string,
            buildingNumber: number,
            city: string,
            zipcode: number,
            country: string,
            county_code: string,
            latitude: number,
            longitude:number
          },
        website: string,
        image: string
      }
}
