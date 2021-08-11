public with sharing class imperativeService {
    @AuraEnabled
    public static List<Account> getAllAccounts(Integer numberOfRecords){
        List<Account> acc = new List<Account>();
        acc =  [SELECT Id, Name, Phone FROM Account LIMIT :numberOfRecords];
        return acc;
    }
}