import * as core from "@actions/core"
import * as github from "@actions/github"

try {
  const payload = JSON.parse(
    JSON.stringify(github.context.payload, undefined, 2)
  );

  const result = `This is the result for received ${payload.inputs.eventName} event.`;
  core.setOutput("result", result);
} catch (error) {
  core.setFailed(error.message);
}
