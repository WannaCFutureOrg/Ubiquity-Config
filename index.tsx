const core = require("@actions/core");
const github = require("@actions/github");

try {
  const payload = JSON.parse(
    JSON.stringify(github.context.payload, undefined, 2)
  );

  const result = `This is the result for ${payload.inputs.eventName} event.`;
  core.setOutput("result", result);
} catch (error) {
  core.setFailed(error.message);
}
