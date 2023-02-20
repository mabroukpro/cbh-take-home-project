
# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
1- `TRIVIAL_PARTITION_KEY` is not necessary we can assign `"0"` directly to the `candidate` as a default value that will be returned if all the assersion above it failed.
2- There's only one condition where candidate can be non-string, so we can remove the if statment and assure this condition is going to be a string (line 10).

From 1 and 2, we could remove the last if-else block completely.

In conclusion the refactored code has less confusing if statements/blocks, reduced lines, and of course I've completed the unit test to cover all possible cases.