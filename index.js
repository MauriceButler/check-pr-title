const github = require('@actions/github');
const core = require('@actions/core');

async function run() {
    const regexString = core.getInput('regex');
    const regex = new RegExp(regexString);
    const title = github.context.payload?.pull_request?.title;

    if (!regex.test(title)) {
        core.setFailed(`Pull request title "${title}" does not match regex "${regexString}"`);
    }
}

run();
