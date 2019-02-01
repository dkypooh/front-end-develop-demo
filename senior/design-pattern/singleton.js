class Singleton {
  constructor(options) {
    this.options = options
  }
  show(message) {
    alert(message)
  }
}

function ProxyClass() {
  const instance = null
  return function(options) {
    if (!instance) {
      instance = new Singleton(optoins);
    }

    return instance;
  }
}

export default ProxyClass();