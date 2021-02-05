# Good Food Api

## How to run

### Without Docker

You will need

- nodejs
- mongodb

### With Docker

Just run

```
docker-compose -d up
```

## k6

documentation

https://k6.io/docs/results-visualization/influxdb-+-grafana

```
$ git clone 'https://github.com/loadimpact/k6'
$ cd k6
$ docker-compose up -d \
    influxdb \
    grafana
$ docker-compose run -v $PWD/samples:/scripts k6 run /scripts/es6sample.js
```

docker-compose run -v ${PWD}/samples:/scripts k6 run /scripts/es6sample.js

## Déploiement Azure

### Installation Azure CLI

https://docs.microsoft.com/fr-fr/cli/azure/install-azure-cli-windows?tabs=azure-cli

### Docker CLI

Coût conteneur 0.05€ de l'heure
https://azure.microsoft.com/fr-fr/pricing/calculator/

```
docker login azure
```

```
docker context create aci goodfoodaci
```

```
docker context use goodfoodaci
```

```
docker tag good-food-api goodfoodcontainerregistry.azurecr.io/good-food-api
docker tag mongo goodfoodcontainerregistry.azurecr.io/mongo
```

```
docker-compose push
```

Modifier les url des images dans le docker-compose. préfixer par goodfoodcontainerregistry.azurecr.io/

```
docker compose up
```

### Azure CLI

https://docs.microsoft.com/fr-fr/azure/container-instances/tutorial-docker-compose

```
az group create --name goodFood --location francecentral
```

```
az acr create --resource-group goodFood --name
goodfoodcontainerregistry --sku Basic
```

```
az acr login --name goodfoodcontainerregistry
docker-compose up --build -d
```
