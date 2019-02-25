# 100% Serverless Monorepo Example

This monorepo uses Next.js + React (with server side rendering) and `micro` for the API.

This repo provides an example of how you can setup a serverless monorepo for local development where everything can be run locally with a single command - which has proven a pain point for a lot of folks.

This functionality is expected Soon™ in `now` so, while this example could be more polished, this repo shows how you can do it today with `now-lambda-runner` and `npm-run-all`.

This README assumes you are familiar with `https://now.sh`.

# Running locally 

To run locally, first run `npm i` to install dependencies then run `npm run dev`.

This will start the API at `http://localhost:3001/api` and the website on `http://localhost:3000`.

Note this is a little different to how things are run in production - where everything runs on the port, under the same hostname. There is logic in the example page to handle this and to auto-detect the hostname when running both client and server side.

Note: Hot reloading is supported in both Next.js and in the API when running in local development mode. Be aware that `now-lambda-runner` may terminate if it encounters an exception and you may need to stop the process and run `npm run dev` again to restart the server if this happens.

# Deploying

To deploy to the cloud, run `now` from the top level directory.

In production, both the website and the API endpoints in `/api` will run on the same domain.

See the `now.json` file to set your site name and for custom route configuration.