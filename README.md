# [bittydash](https://github.com/Yukiniro/bittydash)

![npm](https://img.shields.io/npm/v/bittydash)
![GitHub](https://img.shields.io/github/license/yukiniro/bittydash)

The `bittydash` A small JavaScript utility library. And there is the [document website](https://bittydash.vercel.app/).

## Basic Use

npm

```shell
npm i bittydash -S
```

pnpm

```shell
pnpm add bittydash -S
```

## Example

```javascript
import { isNaN, uniq } from "bittydash";

console.log(isNaN(1)); // false
console.log(isNaN(NaN)); // true

console.log(uniq([1, 1, 2, 3, 3])); // [1,2,3]
```
