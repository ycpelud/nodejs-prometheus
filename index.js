'use strict';

const express = require('express');
const client = require('prom-client');
const server = express();
const register = new client.Registry();

/**
 * Prometheus client example
 */

const h = new client.Histogram({
	name: 'test_histogram',
	help: 'Example of a histogram',
	labelNames: ['code']
});

const c = new client.Counter({
	name: 'test_counter',
	help: 'Example of a counter',
	labelNames: ['code']
});

const g = new client.Gauge({
	name: 'test_gauge',
	help: 'Example of a gauge',
	labelNames: ['method', 'code']
});

setTimeout(() => {
	h.labels('200').observe(Math.random());
	h.labels('300').observe(Math.random());
}, 10);

setInterval(() => {
	c.inc({ code: 200 });
}, 5000);

setInterval(() => {
	c.inc({ code: 400 });
}, 2000);

setInterval(() => {
	c.inc();
}, 2000);

setInterval(() => {
	g.set({ method: 'get', code: 200 }, Math.random());
	g.set(Math.random());
	g.labels('post', '300').inc();
}, 100);

server.get('/metrics', (req, res) => {
	res.set('Content-Type', register.contentType);
	var jsonToReturn = '{"version":"3.0.0","gauges":{"io.dropwizard.db.ManagedPooledDataSource.phenix.active":{"value":2},"io.dropwizard.db.ManagedPooledDataSource.phenix.idle":{"value":0},"io.dropwizard.db.ManagedPooledDataSource.phenix.size":{"value":2},"io.dropwizard.db.ManagedPooledDataSource.phenix.waiting":{"value":0},"jvm.attribute.name":{"value":"7@despatch-advice-lmua-74-7z6qp"},"jvm.attribute.uptime":{"value":241381628},"jvm.attribute.vendor":{"value":"Oracle Corporation OpenJDK 64-Bit Server VM 25.151-b12 (1.8)"},"jvm.buffers.direct.capacity":{"value":2230987},"jvm.buffers.direct.count":{"value":398},"jvm.buffers.direct.used":{"value":2230987},"jvm.buffers.mapped.capacity":{"value":0},"jvm.buffers.mapped.count":{"value":0},"jvm.buffers.mapped.used":{"value":0},"jvm.classloader.loaded":{"value":6918},"jvm.classloader.unloaded":{"value":0},"jvm.filedescriptor":{"value":5.054473876953125E-5},"jvm.gc.PS-MarkSweep.count":{"value":2},"jvm.gc.PS-MarkSweep.time":{"value":4693},"jvm.gc.PS-Scavenge.count":{"value":16},"jvm.gc.PS-Scavenge.time":{"value":2558},"jvm.memory.heap.committed":{"value":1003487232},"jvm.memory.heap.init":{"value":1073741824},"jvm.memory.heap.max":{"value":1003487232},"jvm.memory.heap.usage":{"value":0.23938374135686064},"jvm.memory.heap.used":{"value":240218528},"jvm.memory.non-heap.committed":{"value":67526656},"jvm.memory.non-heap.init":{"value":2555904},"jvm.memory.non-heap.max":{"value":-1},"jvm.memory.non-heap.usage":{"value":-6.6597224E7},"jvm.memory.non-heap.used":{"value":66597224},"jvm.memory.pools.Code-Cache.usage":{"value":0.07083765665690105},"jvm.memory.pools.Compressed-Class-Space.usage":{"value":0.0049142614006996155},"jvm.memory.pools.Metaspace.usage":{"value":0.9855743572489326},"jvm.memory.pools.PS-Eden-Space.usage":{"value":0.5494393409766587},"jvm.memory.pools.PS-Old-Gen.usage":{"value":0.16506802739021895},"jvm.memory.pools.PS-Survivor-Space.usage":{"value":0.06778297961597711},"jvm.memory.total.committed":{"value":1071013888},"jvm.memory.total.init":{"value":1076297728},"jvm.memory.total.max":{"value":1003487231},"jvm.memory.total.used":{"value":306815752},"jvm.threads.blocked.count":{"value":0},"jvm.threads.count":{"value":23},"jvm.threads.daemon.count":{"value":7},"jvm.threads.deadlock.count":{"value":0},"jvm.threads.deadlocks":{"value":[]},"jvm.threads.new.count":{"value":0},"jvm.threads.runnable.count":{"value":9},"jvm.threads.terminated.count":{"value":0},"jvm.threads.timed_waiting.count":{"value":9},"jvm.threads.waiting.count":{"value":5},"org.eclipse.jetty.util.thread.QueuedThreadPool.dw.jobs":{"value":0},"org.eclipse.jetty.util.thread.QueuedThreadPool.dw.size":{"value":8},"org.eclipse.jetty.util.thread.QueuedThreadPool.dw.utilization":{"value":0.375},"org.eclipse.jetty.util.thread.QueuedThreadPool.dw.utilization-max":{"value":0.12}},"counters":{"io.dropwizard.jetty.MutableServletContextHandler.active-dispatches":{"count":0},"io.dropwizard.jetty.MutableServletContextHandler.active-requests":{"count":0},"io.dropwizard.jetty.MutableServletContextHandler.active-suspended":{"count":0}},"histograms":{},"meters":{"ch.qos.logback.core.Appender.all":{"count":14,"m15_rate":1.392197252864183E-117,"m1_rate":2.964393875E-314,"m5_rate":1.4821969375E-313,"mean_rate":5.800074988795404E-5,"units":"events/second"},"ch.qos.logback.core.Appender.debug":{"count":0,"m15_rate":0.0,"m1_rate":0.0,"m5_rate":0.0,"mean_rate":0.0,"units":"events/second"},"ch.qos.logback.core.Appender.error":{"count":0,"m15_rate":0.0,"m1_rate":0.0,"m5_rate":0.0,"mean_rate":0.0,"units":"events/second"},"ch.qos.logback.core.Appender.info":{"count":14,"m15_rate":1.392197252864183E-117,"m1_rate":2.964393875E-314,"m5_rate":1.4821969375E-313,"mean_rate":5.800075022563725E-5,"units":"events/second"},"ch.qos.logback.core.Appender.trace":{"count":0,"m15_rate":0.0,"m1_rate":0.0,"m5_rate":0.0,"mean_rate":0.0,"units":"events/second"},"ch.qos.logback.core.Appender.warn":{"count":0,"m15_rate":0.0,"m1_rate":0.0,"m5_rate":0.0,"mean_rate":0.0,"units":"events/second"},"io.dropwizard.jetty.MutableServletContextHandler.1xx-responses":{"count":0,"m15_rate":0.0,"m1_rate":0.0,"m5_rate":0.0,"mean_rate":0.0,"units":"events/second"},"io.dropwizard.jetty.MutableServletContextHandler.2xx-responses":{"count":0,"m15_rate":0.0,"m1_rate":0.0,"m5_rate":0.0,"mean_rate":0.0,"units":"events/second"},"io.dropwizard.jetty.MutableServletContextHandler.3xx-responses":{"count":0,"m15_rate":0.0,"m1_rate":0.0,"m5_rate":0.0,"mean_rate":0.0,"units":"events/second"},"io.dropwizard.jetty.MutableServletContextHandler.4xx-responses":{"count":0,"m15_rate":0.0,"m1_rate":0.0,"m5_rate":0.0,"mean_rate":0.0,"units":"events/second"},"io.dropwizard.jetty.MutableServletContextHandler.5xx-responses":{"count":0,"m15_rate":0.0,"m1_rate":0.0,"m5_rate":0.0,"mean_rate":0.0,"units":"events/second"},"io.dropwizard.jetty.MutableServletContextHandler.async-dispatches":{"count":0,"m15_rate":0.0,"m1_rate":0.0,"m5_rate":0.0,"mean_rate":0.0,"units":"events/second"},"io.dropwizard.jetty.MutableServletContextHandler.async-timeouts":{"count":0,"m15_rate":0.0,"m1_rate":0.0,"m5_rate":0.0,"mean_rate":0.0,"units":"events/second"}},"timers":{"com.adeo.phenix.east.bl.BLResource.createBL":{"count":0,"max":0.0,"mean":0.0,"min":0.0,"p50":0.0,"p75":0.0,"p95":0.0,"p98":0.0,"p99":0.0,"p999":0.0,"stddev":0.0,"m15_rate":0.0,"m1_rate":0.0,"m5_rate":0.0,"mean_rate":0.0,"duration_units":"seconds","rate_units":"calls/second"},"com.adeo.phenix.east.bl.BLResource.updateBL":{"count":0,"max":0.0,"mean":0.0,"min":0.0,"p50":0.0,"p75":0.0,"p95":0.0,"p98":0.0,"p99":0.0,"p999":0.0,"stddev":0.0,"m15_rate":0.0,"m1_rate":0.0,"m5_rate":0.0,"mean_rate":0.0,"duration_units":"seconds","rate_units":"calls/second"},"io.dropwizard.jetty.MutableServletContextHandler.connect-requests":{"count":0,"max":0.0,"mean":0.0,"min":0.0,"p50":0.0,"p75":0.0,"p95":0.0,"p98":0.0,"p99":0.0,"p999":0.0,"stddev":0.0,"m15_rate":0.0,"m1_rate":0.0,"m5_rate":0.0,"mean_rate":0.0,"duration_units":"seconds","rate_units":"calls/second"},"io.dropwizard.jetty.MutableServletContextHandler.delete-requests":{"count":0,"max":0.0,"mean":0.0,"min":0.0,"p50":0.0,"p75":0.0,"p95":0.0,"p98":0.0,"p99":0.0,"p999":0.0,"stddev":0.0,"m15_rate":0.0,"m1_rate":0.0,"m5_rate":0.0,"mean_rate":0.0,"duration_units":"seconds","rate_units":"calls/second"},"io.dropwizard.jetty.MutableServletContextHandler.dispatches":{"count":0,"max":0.0,"mean":0.0,"min":0.0,"p50":0.0,"p75":0.0,"p95":0.0,"p98":0.0,"p99":0.0,"p999":0.0,"stddev":0.0,"m15_rate":0.0,"m1_rate":0.0,"m5_rate":0.0,"mean_rate":0.0,"duration_units":"seconds","rate_units":"calls/second"},"io.dropwizard.jetty.MutableServletContextHandler.get-requests":{"count":0,"max":0.0,"mean":0.0,"min":0.0,"p50":0.0,"p75":0.0,"p95":0.0,"p98":0.0,"p99":0.0,"p999":0.0,"stddev":0.0,"m15_rate":0.0,"m1_rate":0.0,"m5_rate":0.0,"mean_rate":0.0,"duration_units":"seconds","rate_units":"calls/second"},"io.dropwizard.jetty.MutableServletContextHandler.head-requests":{"count":0,"max":0.0,"mean":0.0,"min":0.0,"p50":0.0,"p75":0.0,"p95":0.0,"p98":0.0,"p99":0.0,"p999":0.0,"stddev":0.0,"m15_rate":0.0,"m1_rate":0.0,"m5_rate":0.0,"mean_rate":0.0,"duration_units":"seconds","rate_units":"calls/second"},"io.dropwizard.jetty.MutableServletContextHandler.move-requests":{"count":0,"max":0.0,"mean":0.0,"min":0.0,"p50":0.0,"p75":0.0,"p95":0.0,"p98":0.0,"p99":0.0,"p999":0.0,"stddev":0.0,"m15_rate":0.0,"m1_rate":0.0,"m5_rate":0.0,"mean_rate":0.0,"duration_units":"seconds","rate_units":"calls/second"},"io.dropwizard.jetty.MutableServletContextHandler.options-requests":{"count":0,"max":0.0,"mean":0.0,"min":0.0,"p50":0.0,"p75":0.0,"p95":0.0,"p98":0.0,"p99":0.0,"p999":0.0,"stddev":0.0,"m15_rate":0.0,"m1_rate":0.0,"m5_rate":0.0,"mean_rate":0.0,"duration_units":"seconds","rate_units":"calls/second"},"io.dropwizard.jetty.MutableServletContextHandler.other-requests":{"count":0,"max":0.0,"mean":0.0,"min":0.0,"p50":0.0,"p75":0.0,"p95":0.0,"p98":0.0,"p99":0.0,"p999":0.0,"stddev":0.0,"m15_rate":0.0,"m1_rate":0.0,"m5_rate":0.0,"mean_rate":0.0,"duration_units":"seconds","rate_units":"calls/second"},"io.dropwizard.jetty.MutableServletContextHandler.post-requests":{"count":0,"max":0.0,"mean":0.0,"min":0.0,"p50":0.0,"p75":0.0,"p95":0.0,"p98":0.0,"p99":0.0,"p999":0.0,"stddev":0.0,"m15_rate":0.0,"m1_rate":0.0,"m5_rate":0.0,"mean_rate":0.0,"duration_units":"seconds","rate_units":"calls/second"},"io.dropwizard.jetty.MutableServletContextHandler.put-requests":{"count":0,"max":0.0,"mean":0.0,"min":0.0,"p50":0.0,"p75":0.0,"p95":0.0,"p98":0.0,"p99":0.0,"p999":0.0,"stddev":0.0,"m15_rate":0.0,"m1_rate":0.0,"m5_rate":0.0,"mean_rate":0.0,"duration_units":"seconds","rate_units":"calls/second"},"io.dropwizard.jetty.MutableServletContextHandler.requests":{"count":0,"max":0.0,"mean":0.0,"min":0.0,"p50":0.0,"p75":0.0,"p95":0.0,"p98":0.0,"p99":0.0,"p999":0.0,"stddev":0.0,"m15_rate":0.0,"m1_rate":0.0,"m5_rate":0.0,"mean_rate":0.0,"duration_units":"seconds","rate_units":"calls/second"},"io.dropwizard.jetty.MutableServletContextHandler.trace-requests":{"count":0,"max":0.0,"mean":0.0,"min":0.0,"p50":0.0,"p75":0.0,"p95":0.0,"p98":0.0,"p99":0.0,"p999":0.0,"stddev":0.0,"m15_rate":0.0,"m1_rate":0.0,"m5_rate":0.0,"mean_rate":0.0,"duration_units":"seconds","rate_units":"calls/second"},"org.eclipse.jetty.server.HttpConnectionFactory.9080.connections":{"count":0,"max":0.0,"mean":0.0,"min":0.0,"p50":0.0,"p75":0.0,"p95":0.0,"p98":0.0,"p99":0.0,"p999":0.0,"stddev":0.0,"m15_rate":0.0,"m1_rate":0.0,"m5_rate":0.0,"mean_rate":0.0,"duration_units":"seconds","rate_units":"calls/second"},"org.eclipse.jetty.server.HttpConnectionFactory.9081.connections":{"count":52293,"max":30.02231816,"mean":2.3839827235434408,"min":5.13419E-4,"p50":9.728680000000001E-4,"p75":0.00118997,"p95":30.005732081,"p98":30.006131102,"p99":30.006131102,"p999":30.008040509,"stddev":8.113198869584126,"m15_rate":0.21733237834847557,"m1_rate":0.21970178430512677,"m5_rate":0.2175480770276991,"mean_rate":0.2166661440661406,"duration_units":"seconds","rate_units":"calls/second"}}}';
	
	res.send(jsonToReturn)
	// res.end(register.metrics()));
});

server.get('/metrics/counter', (req, res) => {
	res.set('Content-Type', register.contentType);
	res.end(register.getSingleMetricAsString('test_counter'));
});

//Enable collection of default metrics
client.collectDefaultMetrics({ register });

/**
 * JSON HTTP logging example
 */
const log4js = require('log4js');
const logger = log4js.getLogger();
log4js.configure({
  appenders: {
    console: { type: "console" },
    logfaces: { type: 'logFaces-HTTP', url: 'http://localhost:9700' }
  },
  categories: {
    default: { appenders: [ 'console', 'logfaces' ], level: 'info' }
  }
});
setInterval(() => {
	logger.level = 'debug';
	logger.debug("Some debug message");
}, 2000);


/**
 * Starting server
 */

console.log('Server listening to 8080, metrics exposed on /metrics endpoint');
server.listen(8080);
