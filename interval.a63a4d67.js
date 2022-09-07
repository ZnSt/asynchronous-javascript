var logger=function(l){console.log("Лог каждые ".concat(l,"ms - ").concat(Date.now()))},intervalId=setInterval(logger,2e3,2e3),shouldCancelInterval=Math.random()>.3;console.log(shouldCancelInterval),shouldCancelInterval&&clearInterval(intervalId);
//# sourceMappingURL=interval.a63a4d67.js.map
