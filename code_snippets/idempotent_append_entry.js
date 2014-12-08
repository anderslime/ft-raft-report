/**
 * Appends an entry to the log if it is not already appended.
 * @param {object} logEntry - An array of or single log entry
 */
Log.prototype.appendEntry = function(logEntry) {
  if (logEntry.index > this.lastIndex()) {
    this.logEntries.push(logEntry);
  }
};
