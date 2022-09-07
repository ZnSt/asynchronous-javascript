var logger=function(e){console.log("Лог через ".concat(e,"ms, потому что не отменили таймаут"))},timerId=setTimeout(logger,2e3,2e3);console.log(timerId);var shouldCancelTimer=Math.random()>.3;console.log(shouldCancelTimer),shouldCancelTimer&&clearTimeout(timerId);
//# sourceMappingURL=timeout.8b928ac0.js.map
