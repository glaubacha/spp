# GridMatch AI

Next.js app for matching load sites and parcels against generation queues, grid infrastructure, existing plants, and nearby pipeline screening layers.

## What It Shows

- Satellite basemap with power infrastructure, existing plants, and pipeline screening overlays
- Highlighted active parcel/load point from coordinates, KML/KMZ uploads, or the Place Parcel map control
- Active MISO and SPP queue projects with MW, queue status, COD, owner/entity, POI, and distance fields
- Nearby queue project tables, queue-stage summaries, and source-backed network upgrade cost context
- Natural-language map questions through the app's map question endpoint

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000/interconnection](http://localhost:3000/interconnection).

## Deploy

This project can deploy directly to Vercel with the default Next.js build command:

```bash
npm run build
```

No database or scheduler environment variables are required for GridMatch AI.
