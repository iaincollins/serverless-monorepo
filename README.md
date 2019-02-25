# Serverless Monorepo Example

This monorepo combines serverless React site (using `next`+`react`) with a serverless API (using `micro`).

This repo provides an example of how you can setup a serverless monorepo for local development where everything can be run locally with a single command - which has proven a pain point for a lot of folks.

Demo URL: https://serverless-monorepo.now.sh

GitHub: https://github.com/iaincollins/serverless-monorepo

This functionality is expected Soon™ in `now` so, while this example could be more polished, this repo shows how you can do it today with `now-lambda-runner` and `npm-run-all`.

This README assumes you are familiar with `https://now.sh`.

# How to run locally

To run locally, first run `npm i` to install dependencies then run `npm run dev`.

This will start the API at `http://localhost:3001/api` and the website on `http://localhost:3000`.

Note this is a little different to how things are run in production on **Now**, where everything runs on the same port, under the same hostname. To handle this, there is logic in the example page to handle this and to auto-detect the hostname when running both client and server side

Note that some logic is generally required in any case, to handle `http://` locally vs `https://` when running server side and to handle detecting the hostname correctly in both client and server side flows.

Note: Hot reloading is supported in both Next.js and in the API when running in local development mode. Be aware that `now-lambda-runner` may terminate if it encounters an exception and you may need to stop the process and run `npm run dev` again to restart the server if this happens.

# How to deploy

To deploy to the cloud, run `now` from the top level directory.

In production, both the website and the API endpoints in `/api` will run on the same domain.

See the `now.json` file to set your site name and for custom route configuration.