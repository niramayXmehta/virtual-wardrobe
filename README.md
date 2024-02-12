# VirtualWardobe

## Install

```bash
npm install
```

Dont forget to add the DATABASE_URL to the .env file in the db folder

also be sure to add the following to the .env file in the native folder (it might already be there)
```bash
EXPO_USE_METRO_WORKSPACE_ROOT=1
```

## Usage

```bash
npm run db-generate # generate the prisma client
npm run server # start the server
npm run start # start the expo app
```


## Explination

- `apps/native` is the main app
- `apps/server` is the backend
- `packages/db` is the database
- `packages/api` is the defined api between the server and the app (trpc router)
- `packages/app` is the main app code for calling the api (and handling context providers), here goes comp