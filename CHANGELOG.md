# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

When a new release is proposed:

- the _Unreleased_ section on CHANGELOG.md gets a version number and date
- update the version `package.json`

## [Unreleased]

### Added

- added `isNil()` and `isEmpty()` tests
- added pages tests
- added `<SingleInputForm />`
- added `<Clipboard />`
- added `<Clipboard />`component in `<Add />`page
- added reset action

### Fixed

- fix nav-list on reload page

### Changed

- refactor pages to `add` and `search`
- refactor `inspections[]` to `ìnspection` in `InspectionStateType`

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
- Added `ÌnspectionService` and `LocalStorageService`

### Fixed

-

### Changed

- Move webpack config for separated files - development and production

### Removed
