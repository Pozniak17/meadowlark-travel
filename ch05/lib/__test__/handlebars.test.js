const handlebars = require("../handlers");

test("home page renders", () => {
  const req = {};
  const res = { render: jest.fn() };
  handlebars.home(req, res);
  expect(res.render.mock.calls[0][0]).toBe("home");
});
