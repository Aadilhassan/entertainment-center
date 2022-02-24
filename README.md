# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

<<<<<<< HEAD
You'll need to run two terminals (or bring in a process manager like concurrently/pm2-dev if you like):

Start the Remix development asset server
=======
From your terminal:
>>>>>>> 3e6f07099cd7d2228617288c530bde89a4c0d453

```sh
npm run dev
```

<<<<<<< HEAD
In a new tab start your express app:

```sh
npm run start:dev
```

This starts your app in development mode, which will purge the server require cache when Remix rebuilds assets so you don't need a process manager restarting the express server.
=======
This starts your app in development mode, rebuilding assets on file changes.
>>>>>>> 3e6f07099cd7d2228617288c530bde89a4c0d453

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

<<<<<<< HEAD
If you're familiar with deploying express applications you should be right at home just make sure to deploy the output of `remix build`

- `server/build/`
=======
If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
>>>>>>> 3e6f07099cd7d2228617288c530bde89a4c0d453
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```
