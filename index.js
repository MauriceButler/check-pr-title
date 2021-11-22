const github = require('@actions/github');
const core = require('@actions/core');

async function run() {
    const providedErrorMessage = core.getInput('errorMessage');
    const regexString = core.getInput('regex');
    const regex = new RegExp(regexString);
    let title = '';

    if (github.context && github.context.payload && github.context.payload.pull_request) {
        title = github.context.payload.pull_request.title;
    }

    if (!regex.test(title)) {
        core.setFailed(providedErrorMessage || `Pull request title "${title}" does not match regex "${regexString}"`);
    }
}

run();
