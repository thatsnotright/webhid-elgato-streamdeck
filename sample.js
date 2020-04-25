var device;
navigator.hid.requestDevice({filters: [{vendorId: 0x0fd9}]}).then(dev => device=dev).catch(e => console.error(e))
var brightness = 90; // 0-100 for %
device.sendFeatureReport(3, new Int8Array([8, brightness, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
