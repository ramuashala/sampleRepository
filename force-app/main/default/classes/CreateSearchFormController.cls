public with sharing class CreateSearchFormController {
    @AuraEnabled(cacheable=true)
    public static List<Car_Type__c> getcarTypes(){
        return [SELECT Id, Name FROM Car_Type__c];
    }
}
