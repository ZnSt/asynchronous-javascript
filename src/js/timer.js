const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockFace: document.querySelector('.js-clockface'),
};

class Timer {
  constructor({ onTick }) {
    (this.intervalId = null), (this.isActive = false), (this.onTick = onTick);
  }

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    const startTime = Date.now();
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = this.getTimeComponents(deltaTime);
      this.onTick(time);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  }

  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new Timer({
  onTick: updateClockFace,
});

refs.startBtn.addEventListener('click', () => {
  timer.start();
});

refs.stopBtn.addEventListener('click', () => {
  timer.stop();
});

function updateClockFace({ hours, mins, secs }) {
  refs.clockFace.textContent = `${hours}: ${mins}: ${secs}`;
}

const obj = {
  foo: () => console.log(this),
};

obj.foo();
