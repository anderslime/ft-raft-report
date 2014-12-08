describe("LeaderElection: the system", function() {
  it("elects a new leader on initialization", function(done) {
    var simulator = raft.buildCluster({
      clusterSize: 5,
      heartbeatDelay: 1,
      electionTimerInterval: [150, 300],
      protocol: new Direct(null, {})
    });
    setTimeout(function() {
      assertOneLeader(simulator.servers);
      done();
    }, 1000);
  });
});