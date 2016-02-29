System.register([], function(exports_1) {
    var CommonValidators;
    return {
        setters:[],
        execute: function() {
            CommonValidators = (function () {
                function CommonValidators() {
                }
                CommonValidators.email = function (control) {
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (control.value != "" && re.test(control.value)) {
                        return null;
                    }
                    return { "email": true };
                };
                CommonValidators.matchingPasswords = function (passwordKey, confirmPasswordKey) {
                    return function (group) {
                        var password = group.controls[passwordKey];
                        var confirmPassword = group.controls[confirmPasswordKey];
                        if (password.value !== confirmPassword.value) {
                            return {
                                matchingPasswords: true
                            };
                        }
                    };
                };
                return CommonValidators;
            })();
            exports_1("CommonValidators", CommonValidators);
        }
    }
});
//# sourceMappingURL=common.js.map