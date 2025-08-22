angular
  .module('bc-viewit-styles', [])
  .component('prmAlmaViewitItemsAfter', {
    bindings: { parentCtrl: '<' },
    controller: function () {
      const vm = this;
      vm.$onInit = function() {
        const isGES = vm.parentCtrl.serviceType === 'GENERAL_ELECTRONIC';
        const services = vm.parentCtrl.services;

        if (isGES && services) {
          const viewitContainer = document.querySelector('prm-alma-viewit');
          const keys = Object.keys(services);

          keys.some(key => {
            let packageName = services[key].packageName.toLowerCase();
            let isInstLogin = packageName.includes('access') || packageName.includes('log in') || packageName.includes('login') || packageName.includes('watch');
            if (isInstLogin) {
              viewitContainer.classList.remove('bc-viewit-item');
              viewitContainer.classList.add('inst-login');
              return true;
            } else {
              viewitContainer.classList.add('bc-viewit-item');
              viewitContainer.classList.remove('inst-login');
            }
          })
        }
      }
    }
  });