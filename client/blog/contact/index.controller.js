(function () {
    'use strict';

    angular
        .module('app')
        .controller('Contact.IndexController', Controller);

    function Controller($location, ContactService) {
        var vm = this;

        vm.submit = submit;

        initController();

        function initController() {
            console.log('Console working!');
        };

        function submit() {
            vm.error = null;
            vm.loading = true;
            console.log('Call COntact Service on click on submit');
            console.log(vm);
            ContactService.Send(vm)
                .then(function () {
                    $location.path('/contact-thanks');
                })
                .catch(function (error) {
                    vm.error = 'Error: ' + error;
                })
                .finally(function () {
                    vm.loading = false;
                });
        };
    }

})();