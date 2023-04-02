## Contributing

Prerequisites:
- Most recent LTS of Node.js (v18), with the corresponding version of yarn.
- A basic understanding of Git (branches, merge requests).

If you wish to contribute, please do the following:

1. Clone down the repository to your local machine.
2. Run `yarn`
3. Run `yarn dev`

This will compile  and start a hot-reloading live server with Vite. Visit `http://localhost:5173` to view the app.

## Contributing Guidelines and Style

In order to maintain consistent code, please adhere to the following guidelines:

- The `master` branch is protected, therefore you should always be working in a branch. Please name the branch `feat/feature_name` where `feature_name` is a brief description of the feature or `bug/bug_name` where `bug_name` is a brief description of the bug (`feat/contact_form` or `bug/missing_image`). 
- When you have completed your updates, push them to your branch, and then open a merge request to `master` in GitHub.
- Please follow the style guide for how to format your code.
- We recommend you use an IDE with at least the ESLint plugin installed and configured to auto-fix on save. ESLint can take care of a lot of little mistakes automatically. To run ESLint manually, run `yarn lint` in the root directory of the project.
