import getFormattedPeriod from "../formatTime";

const date = {
  startDate: "2019-09-04T21:00:00Z",
  endDate: "2019-09-05T05:00:00Z",
};

test("Get formatted period", () => {
  expect(getFormattedPeriod(date)).toStrictEqual("SEP 05, 2:30 AM - 10:30 AM");
});
