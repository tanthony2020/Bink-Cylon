var Cylon = require("cylon");
const { after } = require("cylon/lib/utils");

Cylon.robot({
  connections: {
    raspi: { adaptor: 'raspi' }
  },

  devices: {
    led: { driver: 'led', pin: 18 }
  },

  work: function(my) {
    every((1).second(), my.led.toggle);
  }
}).start();