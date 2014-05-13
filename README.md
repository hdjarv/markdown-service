# markdown-service

Markdown parsing as a service - right on your network!

## Prerequisites

To run this software you must have [node.js](http://nodejs.org) installed.

## Installation

Use these commands to install this software.

```sh
git clone https://github.com/hdjarv/markdown-service.git
cd markdown-service/
npm install
```

## Running

Use this command (in the `markdown-service` folder) to run this software.

```sh
npm start
```

By default, the server uses port `3000`. To change port set the `PORT` environment variable when starting the server.

```sh
PORT=4000 npm start
```

## Using

This software implements a HTTP server that accepts [Markdown](http://daringfireball.net/projects/markdown/syntax) as input and converts it into HTML.

The input is sent using a HTTP POST request (to path `/markdown`) with the input in the request body. The output is sent back in the response body.

This software uses the [marked](https://www.npmjs.org/package/marked) node.js library to do the markdown to html conversion. Thus the capabilities of the conversion depends on that library. It is used with default options.

### Example usage

Here is an example (for Unix-like operating systems using curl) on how to use this software. This readme-file is used as example input.

```sh
curl -X POST --data-binary @README.md http://localhost:3000/markdown
```

## License

This software is licensed under the MIT license, see file LICENSE.

