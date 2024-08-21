class Signal {
  constructor(value) {
    this.value = value;
    this.subscribers = [];
  }

  getValue() {
    return this.value;
  }

  setValue(newValue) {
    this.value = newValue;
    this.emit();
  }

  emit() {
    this.subscribers.forEach((subcriber) => subcriber(this.value));
  }

  subscribe(callback) {
    this.subcribers.push(callback);
  }
}
