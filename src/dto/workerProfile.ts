export interface Address {
  formattedAddress: string;
  zoneId: string;
}
export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  maxJobDistance: number;
  WorkerId: string;
  address: Address;
}
