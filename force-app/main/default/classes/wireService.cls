public with sharing class wireService {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAllAccounts(){
        return [SELECT Id, Name, Phone FROM Account LIMIT 10];
}}
