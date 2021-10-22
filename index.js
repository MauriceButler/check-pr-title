import { context } from '@actions/github';
import { getInput, setFailed } from '@actions/core';

async function run() {
    const regexString = getInput('regex');
    const regex = new RegExp(regexString);
    const title = context.payload?.pull_request?.title;

    if (!regex.test(title)) {
        setFailed(`Pull request title "${title}" does not match regex "${regexString}"`);
    }
}

run();
