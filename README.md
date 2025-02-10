# Unhandled Promise Rejections in Express.js Async Middleware

This repository demonstrates a common error in Express.js applications: improper handling of errors originating from asynchronous operations within route handlers.  The example showcases a scenario where an unhandled promise rejection can lead to application instability or silent failures.

## Problem

The provided `bug.js` demonstrates an Express.js application with an asynchronous route handler that might throw an error. The current error handling middleware is insufficient to catch this error resulting in unhandled promise rejection and potentially application crashes.

## Solution

The `bugSolution.js` file provides a corrected version.  It properly handles async errors by using `async/await` and `try...catch` within route handlers or by using a suitable error handling middleware that can handle promises.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository directory.
3. Install dependencies: `npm install`
4. Run the buggy code: `node bug.js` (observe the console output and potential crashes)
5. Run the fixed code: `node bugSolution.js` (observe the improved error handling)

This example highlights the importance of robust error handling in asynchronous Express.js applications to prevent unexpected application behavior.