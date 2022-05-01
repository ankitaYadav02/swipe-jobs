import { convertCentsToDollars } from "../utils";

test("Get converted dollars from cents", () => {
  expect(convertCentsToDollars(400)).toStrictEqual(4);
});
