# Adonis API authentication example

## Setup

### Generate a new key and save it to the `.env` file.

```shell
node ace generate:key
```

### Configure the database

```shell
node ace configure @adonisjs/lucid
```

### Run migrations

```shell
node ace migration:run
```

### Starting the development server

```shell
node ace serve --watch
```
