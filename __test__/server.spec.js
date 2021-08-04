const app = require("../src/server/app");

//test server
test("test listening server", () => {
    expect(app).toBeDefined();
})