// Generated by Finicky Kickstart

module.exports = {
    defaultBrowser: "Safari",
    handlers: [
      {
        match: /^https?:\/\/github\.com\/.*$/,
        browser: "Safari"
      },
      {
        // Open any link clicked in Slack in Safari
        match: ({ opener }) =>
          opener.bundleId === "com.tinyspeck.slackmacgap",
        browser: "Google Chrome"
      },
      {
        match: /^https?:\/\/meet\.google\.com\/.*$/,
        browser: "Google Chrome"
      },
      {
        // Open links in Safari when the option key is pressed
        // Valid keys are: shift, option, command, control, capsLock, and function.
        // Please note that control usually opens a tooltip menu instead of visiting a link
        match: () => finicky.getKeys().option,
        browser: "Safari"
      }
    ]
  }
