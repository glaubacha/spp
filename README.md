# SPP Interconnection Map

Next.js app for viewing a parcel against decoded SPP generation interconnection queue projects.

## What It Shows

- Satellite basemap with OpenInfraMap power infrastructure overlays
- Highlighted active parcel, including user-supplied coordinates or KML/KMZ uploads
- SPP active queue project points decoded from the public PowerBI report
- Queue-stage table and nearby active project summary
- Optional heatmap of generation queue congestion weighted by project MW

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

No database or scheduler environment variables are required for the interconnection map.
