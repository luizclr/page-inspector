# Page Inspector

## Tabe of contents

- 1. [Requirements](#requirements)
- 2. [Installation and usage](#installation-and-usage)
- 3. [Component Structure (general)](#component-structure-general)
- 4. [Contributing](#contributing)
  - 4.1 [Branch names](#branch-names)
  - 4.2 [Commit messages](#commit-messages)

## Requirements

- NodeJs
- npm
- nvm
## 2. Installation and usage

Using `nvm`? change local node version to project's node version on `.nvmrc`.

```shell
nvm install
```

Install dependencies:
```shell
npm install
```

> Create a copy `.env` file from `.env.example` and populate the variables.

Run project on development mode:
```shell
npm run dev
```
> a new browser window will be opened on [localhost:4000](http://localhost:4000).

Run unit tests:
```shell
npm test
```

Build for production:
```shell
npm run build
```

Start server with built code:
```shell
npm start
```

## Component Structure (general)

```
\component
    index.tsx
    component.tsx
    component.styles.tsx
    component.container.tsx
    types.ts
```

## Contributing

Follow the next steps to contribute
### Branch names

Name your branch with a meaningful name that represents the changes you have done.

Examples:

```
chore/updating-changelog
fix/user-authentication
feat/add-card
```

### Commit messages

Use the format {type}({scope}): {message}.

Eg: `feat(login): added remember me`.

See [conventional commit guideline](https://www.conventionalcommits.org/en/v1.0.0/).
