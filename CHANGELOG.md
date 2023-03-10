# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

When a new release is proposed:

- the _Unreleased_ section on CHANGELOG.md gets a version number and date
- update the version `package.json`

## [Unreleased]

### Added

-

### Fixed

-

### Changed

-

### Removed

## [1.1.2] - 10/01/2023

### Added

- added images to readme file

## [1.1.1] - 10/01/2023

### Added

- added circleci config file


## [1.1.0] - 10/01/2023

### Added

- added `isNil()` and `isEmpty()` tests
- added pages tests
- added `<SingleInputForm />`
- added `<Clipboard />`
- added `<Clipboard />`component in `<Add />`page
- added reset action
- added tests do `<Card />`, `<Clipboard />` components and all pages

### Fixed

- fix nav-list on reload page

### Changed

- refactor pages to `add` and `search`
- refactor `inspections[]` to `√¨nspection` in `InspectionStateType`

### Removed

- `LocalStorageService`
- no more necessary action types

## [1.0.0] - 09/01/2023
### Added

- Added `webpack` configuration with `react`
- Added `styled-components` configuration
- Added tests configuration
- Added eslint configuration
- Added server to production
- Added `<Card />` component
- Added `<Loading />` component
- Added `<NavList />` component
- Added `<AddSearch />` page
- Added `<Searches />` page
- Added `<Base />` page
- Added `√ĆnspectionService` and `LocalStorageService`

### Fixed

-

### Changed

- Move webpack config for separated files - development and production

### Removed
