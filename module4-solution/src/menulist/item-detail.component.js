(function () {
'use strict';

angular.module('MenuApp')
.component('detail', {
  templateUrl: 'src/menulist/templates/detail.component.template.html',
  bindings: {
    items: '<'
  }
});

})();