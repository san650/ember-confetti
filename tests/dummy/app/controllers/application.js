import Controller from '@ember/controller';

export default Controller.extend({
  isEnabled: true,

  actions: {
    toggleTheRain() {
      this.toggleProperty('isEnabled');
    },
  }
});
