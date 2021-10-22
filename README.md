# Check PR Title

Github action to check a pull request title matches a given regex

## Usage

```
name: PR-Validation

on:
    pull_request:
        branches: [main]
        types:
            - opened
            - reopened
            - edited
            - synchronize

jobs:
    pr-title-validation:
        runs-on: ubuntu-latest
        steps:
            - uses: mauricebutler/check-pr-title@v1
              with:
                  # check the PR starts with T-<number>:
                  pattern: '^T\\-\\d+?: '
```
