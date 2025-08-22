const core = require('@actions/core');
const github = require('@actions/github');
try {
  // Do stuff
  core.notice('Something happened that you might want to know about.')
}
catch (error) {
  core.setFailed(`Action failed with error: ${error}`)
}
