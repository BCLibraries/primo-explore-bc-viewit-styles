angular
  .module('bc-hide-locate',[])
  .component('prmFullViewAfter', {
    bindings: { parentCtrl: '<' },
    controller: function () {
      const vm = this;
      vm.$onInit = function() {
          const callNumber = vm.parentCtrl.item.delivery.holding[0].callNumber;
          const fullViewContainer = document.querySelector('prm-full-view');

          if (callNumber && callNumber.toLowerCase().includes('newspaper')) {
            fullViewContainer.classList.add('hide-locate');
          } else {
            fullViewContainer.classList.remove('hide-locate');
          }
      };
    }
  });