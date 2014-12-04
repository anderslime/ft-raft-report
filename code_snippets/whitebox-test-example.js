describe("Receiver AppendEntries Implementation", function() {
    // Rule 1
    it("replies false if term < currentTerm", function() {
      var server1 = new Server(2, 'leader');
      var server2 = new Server(3, 'candidate');
      server2.currentTerm = 2;
      updatePeers([server1, server2]);
      var result = server1.invokeAppendEntries(server2.id);
      assert.equal(result.success, false);
    });
});