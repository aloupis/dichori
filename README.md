## Dichori

![Alt Text](https://media.giphy.com/media/rAm0u2k17rM3e/giphy.gif)

### Getting started

- clone this repo

### Firing it up

- `npm run docker`

### Reset docker completely incl. volumes

- `npm run reset-infra`

### Run tests

- `npm run reset-infra`
- `npm run docker:test`
- `npm run test`

### Reset testing infra

- `npm run reset-infra:test`

## Notes

### Access Postgres from ternimal

- `docker exec -it [docker container id] psql -U postgres`
