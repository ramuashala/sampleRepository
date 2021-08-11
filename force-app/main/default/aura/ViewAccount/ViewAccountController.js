({
    doInit : function(component, event, helper) {
        helper.getAccountList(component);
    },


    sortByAccName : function (component, event, helper) {
        helper.getAccountListSortedByAccName(component);
    },

    sortByAccOwner : function (component, event, helper) {
        helper.getAccountListSortedByAccOwner(component);
    }


})
