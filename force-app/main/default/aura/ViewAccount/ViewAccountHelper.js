({
    getAccountList: function(component) {
        var action = component.get('c.GetAccount');
        // Set up the callback
        action.setCallback(this, function(actionResult) {
        component.set('v.lstAccount', actionResult.getReturnValue());
        });
        $A.enqueueAction(action);
    },

    getAccountListSortedByAccName: function(component) {
        var action = component.get('c.GetAccountsSortedByAccName');
        // Set up the callback
        action.setCallback(this, function(actionResult) {
        component.set('v.lstAccount', actionResult.getReturnValue());
        });
        $A.enqueueAction(action);
    },

    getAccountListSortedByAccOwner: function(component) {
        var action = component.get('c.GetAccountsSortedByAccOwner');
        // Set up the callback
        action.setCallback(this, function(actionResult) {
        component.set('v.lstAccount', actionResult.getReturnValue());
        });
        $A.enqueueAction(action);
    }
})
