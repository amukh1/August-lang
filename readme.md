[![npm version](https://badge.fury.io/js/august-lang.svg)](https://www.npmjs.com/package/august-lang)

# august-lang

> My first *complete* computer language.

<br>

> Contact me for help, because I *will* respond. amukh1#9613

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation
<br>

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

<br>

To install and set up the library, run:

```sh
$ npm install august-lang
```

Or if you prefer using Yarn:

```sh
$ yarn add --dev august-lang
```

## Usage

august-lang takes 2 file extentions, .aug and .asm.
<br>

aug is the language.. (August) and putting in an aug file compiles it to an asm file.

```sh
$ aug ./file.aug
```

```sh
$ august ./file.aug
```

ASM is the ASSEMBLY language, which compiles to bytecode.

```sh
$ aug ./file.asm
```

## Example program:
<br>

```
Load 06 I love programming;
Output 06 06;
STDOUT >>programming is cool>>;
Math 01 14,15;
Output 05 01;
End;
```

