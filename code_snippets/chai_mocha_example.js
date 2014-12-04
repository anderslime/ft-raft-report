describe("Server", function() {
  it("responds with false if log is outdated", function() {
    var outDatedLog = new Log();
    var server = new Server(outDatedLog);
    assert(server.getResponse(), false);
  });
});
