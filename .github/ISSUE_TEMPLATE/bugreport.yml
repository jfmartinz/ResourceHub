name: "🐞 Bug Report"
description: Encountered a bug? Report it here
title: "🐞 [BUG] - <title>"
labels: ["bug"]
body:
  - type: checkboxes
    id: terms
    attributes:
      label: Issue Verification
      description: Before you open an issue, please verify that it's indeed a bug and hasn't been reported before.
      options:
        - label: I have verified that this is a new bug report.
          required: true
        - label: I'm interested in working on this issue
          required: true
        - label: I'm part of GSSOC organization
          required: true
  - type: textarea
    id: describe-the-bug
    attributes:
      label: Describe the bug
      description: Please provide a clear and detailed description of the bug you've encountered.
      placeholder: Describe the issue you're facing, including any error messages, unexpected behavior, and steps to reproduce.
    validations:
      required: false
  - type: textarea
    id: expected-behavior
    attributes:
      label: Expected behavior
      description: What did you expect to happen instead of the bug you've described?
      placeholder: Explain the expected outcome or behavior.
    validations:
      required: false
  - type: textarea
    id: steps-to-reproduce
    attributes:
      label: Steps to reproduce
      description: Please provide clear, step-by-step instructions on how to reproduce the bug.
      placeholder: List the exact steps you followed to encounter the bug.
    validations:
      required: false
  - type: textarea
    attributes:
      label: Additional Context
      description: Additional information about the bug (Optional).
    validations:
      required: false
