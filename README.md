# nbb-action-example

This is an example of how to use [nbb](https://github.com/borkdude/nbb), an
ad-hoc CLJS scripting tool for Node.js, to implement a Github action.

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

It was created using
[this](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)
tutorial but instead of JavaScript it uses a small JS wrapper `index.mjs` + the
actual CLJS script `action.cljs`.

## Dependencies

Actions expect their dependencies to be checked into source control. JavaScript
actions usually do this through a bundler like `ncc` which performs analysis and
tree-shaking. This approach doesn't work well with nbb: since it's an
interpreter, you cannot see statically which libraries are used. Instead, to
bundle the node dependencies, they are archived into a `.zip` file and stored in
the `dist` folder. Upon action execution, they are unzipped just in time. Run
`bb build` to update `dist/node_modules.zip`.

## Inputs

## `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

## `time`

The time we greeted you.

## Example usage

``` yaml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - name: Hello world action step
        id: hello
        uses: borkdude/nbb-action-example@v0.0.2
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was ${{ steps.hello.outputs.time }}"
```

## Develop

See `bb tasks` for relevant tasks for development.
