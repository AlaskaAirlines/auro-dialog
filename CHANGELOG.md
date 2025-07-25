# Semantic Release Automated Changelog

## [3.1.5](https://github.com/AlaskaAirlines/auro-dialog/compare/v3.1.4...v3.1.5) (2025-07-25)


### Bug Fixes

* disable pointer-events on overlay when dialog is not open [#66](https://github.com/AlaskaAirlines/auro-dialog/issues/66) ([462bdf2](https://github.com/AlaskaAirlines/auro-dialog/commit/462bdf2474624c7e96e5ba2cb77f82f55da07bb4))

## [3.1.4](https://github.com/AlaskaAirlines/auro-dialog/compare/v3.1.3...v3.1.4) (2025-07-16)


### Bug Fixes

* add themeable type classes ([c1e5ed4](https://github.com/AlaskaAirlines/auro-dialog/commit/c1e5ed483f595510689048cc5a336a720a5ef56b))
* update docs head content ([64183fc](https://github.com/AlaskaAirlines/auro-dialog/commit/64183fc5500253053d8d2082aac73422a093b116))

## [3.1.3](https://github.com/AlaskaAirlines/auro-dialog/compare/v3.1.2...v3.1.3) (2025-07-16)


### Bug Fixes

* remove bottom position on bigger screen ([e5d2161](https://github.com/AlaskaAirlines/auro-dialog/commit/e5d2161f11debab16094072855f887b307993640))

## [3.1.2](https://github.com/AlaskaAirlines/auro-dialog/compare/v3.1.1...v3.1.2) (2025-06-04)


### Performance Improvements

* update version and dependencies to latest ([bf83414](https://github.com/AlaskaAirlines/auro-dialog/commit/bf834148bd80fa9d44d34bf0bc851df2d3cbde26))

## [3.1.1](https://github.com/AlaskaAirlines/auro-dialog/compare/v3.1.0...v3.1.1) (2025-05-01)


### Bug Fixes

* update SCSS token formatting ([f17792d](https://github.com/AlaskaAirlines/auro-dialog/commit/f17792d40498ede25d94efba02cf1ad2ef3d8933))

# [3.1.0](https://github.com/AlaskaAirlines/auro-dialog/compare/v3.0.2...v3.1.0) (2025-04-30)


### Features

* update to use new color theme tokens [#50](https://github.com/AlaskaAirlines/auro-dialog/issues/50) ([f9d6358](https://github.com/AlaskaAirlines/auro-dialog/commit/f9d63587c8f0887decd682fc59ab82d489e38e3a))

## [3.0.2](https://github.com/AlaskaAirlines/auro-dialog/compare/v3.0.1...v3.0.2) (2025-04-15)


### Performance Improvements

* add wca script for docs api ([f79ab38](https://github.com/AlaskaAirlines/auro-dialog/commit/f79ab38d7434f585b16eb53583757762e7313cc7))

## [3.0.1](https://github.com/AlaskaAirlines/auro-dialog/compare/v3.0.0...v3.0.1) (2025-03-11)


### Bug Fixes

* width of the dialog no longer causes content to overflow the screen [#46](https://github.com/AlaskaAirlines/auro-dialog/issues/46) ([82f7f62](https://github.com/AlaskaAirlines/auro-dialog/commit/82f7f62b79f996fc3a9a5b9653e0c794f6936db4))

# [3.0.0](https://github.com/AlaskaAirlines/auro-dialog/compare/v2.3.3...v3.0.0) (2025-02-28)


* feat!: move peer dependencies to "real" dependencies ([d16d380](https://github.com/AlaskaAirlines/auro-dialog/commit/d16d3807e81cd199303df61a22409664831cdfb7))


### BREAKING CHANGES

* last change was breaking _on a patch version_ because of peer dependencies

Summary:
  Our current build process relies on peer dependencies being present, but
  the peer dependency pipeline is causing far more issues than it's worth.
  Why not just make them regular dependencies? This is what this PR does :)

## [2.3.3](https://github.com/AlaskaAirlines/auro-dialog/compare/v2.3.2...v2.3.3) (2025-02-08)


### Performance Improvements

* update dependencies ([bbe2813](https://github.com/AlaskaAirlines/auro-dialog/commit/bbe28139ac18864ad2385f67e7d6aaa9a88d6798))
* update mixin per new WCSS spec ([99b8790](https://github.com/AlaskaAirlines/auro-dialog/commit/99b879083c23db0522777b395734e789cdcdfd3e))

## [2.3.2](https://github.com/AlaskaAirlines/auro-dialog/compare/v2.3.1...v2.3.2) (2024-12-27)


### Bug Fixes

* close any open dropdown or related components with overlay clicks [#40](https://github.com/AlaskaAirlines/auro-dialog/issues/40) ([1face94](https://github.com/AlaskaAirlines/auro-dialog/commit/1face94b13d142e3b5cb73155b447cc121e29a8b))
* dialog stays open with overlay clickes if datepicker was open ([40b2e49](https://github.com/AlaskaAirlines/auro-dialog/commit/40b2e49d2dee748db60f5ce47f78d998ff0b7e31))


### Performance Improvements

* update dependencies ([d54e0a9](https://github.com/AlaskaAirlines/auro-dialog/commit/d54e0a9a7f0cf3135eec141244f90bc4eed83ae5))

## [2.3.1](https://github.com/AlaskaAirlines/auro-dialog/compare/v2.3.0...v2.3.1) (2024-12-21)


### Performance Improvements

* update node to version 22 ([a327586](https://github.com/AlaskaAirlines/auro-dialog/commit/a327586a9e485483a9d82908a51065beebffd2b1))

# [2.3.0](https://github.com/AlaskaAirlines/auro-dialog/compare/v2.2.1...v2.3.0) (2024-11-14)


### Features

* update auro-library to 3.0.1 ([77e5cf6](https://github.com/AlaskaAirlines/auro-dialog/commit/77e5cf63983c9884ee89329b06e4b158f87dcdc1))


### Performance Improvements

* update library to 3.0.2 ([99331ae](https://github.com/AlaskaAirlines/auro-dialog/commit/99331aef7fef6d1480cddf47badb4c9d91f26f2e))

## [2.2.1](https://github.com/AlaskaAirlines/auro-dialog/compare/v2.2.0...v2.2.1) (2024-11-05)


### Performance Improvements

* fix unresolved dependency error [#33](https://github.com/AlaskaAirlines/auro-dialog/issues/33) ([48440f3](https://github.com/AlaskaAirlines/auro-dialog/commit/48440f3f95cfd1f5af41d3cdd88a28d00dd5a825))

# [2.2.0](https://github.com/AlaskaAirlines/auro-dialog/compare/v2.1.0...v2.2.0) (2024-11-01)


### Features

* apply latest token ds-auro-icon-size [#28](https://github.com/AlaskaAirlines/auro-dialog/issues/28) ([a0f0f45](https://github.com/AlaskaAirlines/auro-dialog/commit/a0f0f451866f435e12e769dafdadffe056927973))
* update auro-icon package [#28](https://github.com/AlaskaAirlines/auro-dialog/issues/28) ([7eb9665](https://github.com/AlaskaAirlines/auro-dialog/commit/7eb96656f66fa619f0a0d38ef4d126c4e7f68d7d))


### Performance Improvements

* update dependencies ([af459cf](https://github.com/AlaskaAirlines/auro-dialog/commit/af459cfd5db990bb930df17facbad18bd24ae4fd))

# [2.1.0](https://github.com/AlaskaAirlines/auro-dialog/compare/v2.0.1...v2.1.0) (2024-10-25)


### Features

* **api:** add register static method [#26](https://github.com/AlaskaAirlines/auro-dialog/issues/26) ([a5882af](https://github.com/AlaskaAirlines/auro-dialog/commit/a5882af95970c0973bd97eed2a86c653948c8ef3))


### Performance Improvements

* update dependency versions ([ac77559](https://github.com/AlaskaAirlines/auro-dialog/commit/ac775591e2aa2bbd07a06e90434410f4398684ae))

## [2.0.1](https://github.com/AlaskaAirlines/auro-dialog/compare/v2.0.0...v2.0.1) (2024-10-08)


### Bug Fixes

* moves auro library to dependencies in package.json [#23](https://github.com/AlaskaAirlines/auro-dialog/issues/23) ([7251994](https://github.com/AlaskaAirlines/auro-dialog/commit/7251994d2f6f00b2faf3bd7fab5b584483bcb0e2))

# [2.0.0](https://github.com/AlaskaAirlines/auro-dialog/compare/v1.0.9...v2.0.0) (2024-10-04)


### Bug Fixes

* resolve minor color theming issues ([d114353](https://github.com/AlaskaAirlines/auro-dialog/commit/d1143539c09896ca0725a1ef58e1c5b2f4ce2958))


### Features

* add tag name as attribute when custom registered ([6b846d2](https://github.com/AlaskaAirlines/auro-dialog/commit/6b846d2d2f6a77e88c3025cd923124e3d5b9441c))
* refactor color token structure with tier 3 tokens [#13](https://github.com/AlaskaAirlines/auro-dialog/issues/13) ([f5243a5](https://github.com/AlaskaAirlines/auro-dialog/commit/f5243a503d4eb204b61b540fb09402d240dfe3ed))
* **version:** use custom versioned auro components ([e8a46bb](https://github.com/AlaskaAirlines/auro-dialog/commit/e8a46bbdc7079c2d4bb1ee9f8739ff2a3dd22307))


### Performance Improvements

* **button:** use new version of flat variant button ([450c28a](https://github.com/AlaskaAirlines/auro-dialog/commit/450c28ac73628fbb80ac493aaa1cff88d0336168))
* refactor custom component registration config ([abe479a](https://github.com/AlaskaAirlines/auro-dialog/commit/abe479a491ffd10366e56f4662c3d034d1985ece))
* update dependencies ([204145c](https://github.com/AlaskaAirlines/auro-dialog/commit/204145cbea5e53fb18356ade46570ee2eef1ba51))


### BREAKING CHANGES

* trigger major release for color theme support #13

## [1.0.9](https://github.com/AlaskaAirlines/auro-dialog/compare/v1.0.8...v1.0.9) (2024-04-05)


### Bug Fixes

* **scroll:** make dialog content scroll [#15](https://github.com/AlaskaAirlines/auro-dialog/issues/15) ([4f69654](https://github.com/AlaskaAirlines/auro-dialog/commit/4f696542e23d345fe5f1f26215b18e519609e6b8))

## [1.0.8](https://github.com/AlaskaAirlines/auro-dialog/compare/v1.0.7...v1.0.8) (2024-02-23)


### Bug Fixes

* **unformatted:** fix error from unformatted dialog opening ([7371148](https://github.com/AlaskaAirlines/auro-dialog/commit/73711488f5ca69b78dadc89552af89bac88573c2))


### Performance Improvements

* **deps:** update deps ([791254c](https://github.com/AlaskaAirlines/auro-dialog/commit/791254c25a0061b8669976754115819f3edb9e49))
* **min:** update min file system for docsite ([f86089a](https://github.com/AlaskaAirlines/auro-dialog/commit/f86089a8b02bbb1c1aa416e315f6b9fb9a831369))

## [1.0.7](https://github.com/AlaskaAirlines/auro-dialog/compare/v1.0.6...v1.0.7) (2024-02-21)


### Performance Improvements

* **deps:** update dependencies ([c16a351](https://github.com/AlaskaAirlines/auro-dialog/commit/c16a3511ab43356af8ef35138edc21679b6ab631))
* **examples:** implement minified js system [#10](https://github.com/AlaskaAirlines/auro-dialog/issues/10) ([0f336c2](https://github.com/AlaskaAirlines/auro-dialog/commit/0f336c2e30db48a2227b8394ca8cb12ec8899e5a))

## [1.0.6](https://github.com/AlaskaAirlines/auro-dialog/compare/v1.0.5...v1.0.6) (2024-02-13)


### Performance Improvements

* update auro dependencies ([672d5b1](https://github.com/AlaskaAirlines/auro-dialog/commit/672d5b152b6cbbabb8a6e88c17b2fb4e1e834d1a))

## [1.0.5](https://github.com/AlaskaAirlines/auro-dialog/compare/v1.0.4...v1.0.5) (2024-02-13)


### Performance Improvements

* **demo:** update demo file names ([cb48514](https://github.com/AlaskaAirlines/auro-dialog/commit/cb48514e0893b405d0eba3d46e002e3c814804b6))
* **fixed:** remove fixed support ([6cbd252](https://github.com/AlaskaAirlines/auro-dialog/commit/6cbd252f3a7f51575db4b8b3d2c1a4e2e363cb51))
* **imports:** update style unformatted import [#8](https://github.com/AlaskaAirlines/auro-dialog/issues/8) ([3ce2507](https://github.com/AlaskaAirlines/auro-dialog/commit/3ce2507c17963f719f6180d15d75996cbac58bf2))

## [1.0.4](https://github.com/AlaskaAirlines/auro-dialog/compare/v1.0.3...v1.0.4) (2024-02-11)


### Performance Improvements

* update for ESM support ([7fd7b6d](https://github.com/AlaskaAirlines/auro-dialog/commit/7fd7b6dd95e7311ba956f83ce3a181980caf998d))

## [1.0.3](https://github.com/AlaskaAirlines/auro-dialog/compare/v1.0.2...v1.0.3) (2024-02-05)


### Bug Fixes

* **dist:** add apiExample js to dist folder [#6](https://github.com/AlaskaAirlines/auro-dialog/issues/6) ([565af94](https://github.com/AlaskaAirlines/auro-dialog/commit/565af94c93c89a1d63662d1d2f65eef4f304686a))
* **label:** update labels to auro-dialog ([7ab983f](https://github.com/AlaskaAirlines/auro-dialog/commit/7ab983fb11fa93ba5b8eb501fe3320caec610576))

## [1.0.2](https://github.com/AlaskaAirlines/auro-dialog/compare/v1.0.1...v1.0.2) (2024-01-31)


### Performance Improvements

* alaskaairux ref updates ([bd558fd](https://github.com/AlaskaAirlines/auro-dialog/commit/bd558fd138684c0e3401e1c4290bfa368f905743))

## [1.0.1](https://github.com/AlaskaAirlines/auro-dialog/compare/v1.0.0...v1.0.1) (2024-01-27)


### Performance Improvements

* update index per SSR support ([e6c9dde](https://github.com/AlaskaAirlines/auro-dialog/commit/e6c9dde8eee2b9e1d2989f4d7782a1cc113f4cd5))

# 1.0.0 (2024-01-24)


### Bug Fixes

* **eslint:** update eslint disable rule ([3c30f66](https://github.com/AlaskaAirlines/auro-dialog/commit/3c30f66238e4f83719e42e63fb93bc0161c5b22a))
* **postcss:** update postcss to handle multiple css files ([46d1a1f](https://github.com/AlaskaAirlines/auro-dialog/commit/46d1a1fcf3ae899ba4f4204e219c7e82dac195ae))
* **readme:** remove readme from checked in files ([db9d473](https://github.com/AlaskaAirlines/auro-dialog/commit/db9d4730fae82e15788713dacf25923d8efbe604))
* **workflows:** update node version in github workflows ([3be7f17](https://github.com/AlaskaAirlines/auro-dialog/commit/3be7f17ded2945a1b0501c7ad58133efc8974b98))


### Features

* **generator:** rebuild component using generator [#1](https://github.com/AlaskaAirlines/auro-dialog/issues/1) ([a385f25](https://github.com/AlaskaAirlines/auro-dialog/commit/a385f25cc900e055aa208bb32073220839997454))
* **tokens:** implement new design tokens [#2](https://github.com/AlaskaAirlines/auro-dialog/issues/2) ([aee9b59](https://github.com/AlaskaAirlines/auro-dialog/commit/aee9b592932e6bb4522d03e8f144ed99999350dc))


### Performance Improvements

* **accordion:** use new version of accordion ([e7333b7](https://github.com/AlaskaAirlines/auro-dialog/commit/e7333b744964e972cb7cf1cdc8c0cf48de9ed57b))
* **docs:** implement Auro doc system ([baf1bf2](https://github.com/AlaskaAirlines/auro-dialog/commit/baf1bf26b1a2e2f226cce1c3463eb8fd6bef2725))
* **src:** implement all component src code ([a75225a](https://github.com/AlaskaAirlines/auro-dialog/commit/a75225ad71bacbf12eb9c7ca549d0b7940611168))
