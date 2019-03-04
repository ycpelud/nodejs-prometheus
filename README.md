# Prometheus metrics for nodejs app

This Node application runs an express server that can export prometheus metrics.
It uses `prom-client` dependency to compute metrics.

## Start your server
```
npm install
npm start
```

## Check the metrics

Once started, you can browse the metrics with following url :

http://localhost:8080/metrics