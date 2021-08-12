public with sharing class GetAccount {
    
    @AuraEnabled
    public static List<Account> getAccounts()
    {
    List<Account> lstAccount=[Select Id,Name,OwnerId,Phone,Website,AnnualRevenue FROM Account where Industry='Financial Services'];
    return lstAccount;
    } 

    @AuraEnabled
    public static List<Account> getAccountsSortedByAccName()
    {
    List<Account> lstAccountSortByAccName=[Select Id,Name,OwnerId,Phone,Website,AnnualRevenue FROM Account where Industry='Financial Services' Order By Name];
    return lstAccountSortByAccName;
    } 

    @AuraEnabled
    public static List<Account> getAccountsSortedByAccOwner()
    {
    List<Account> lstAccountSortByAccOwner=[Select Id,Name,OwnerId,Phone,Website,AnnualRevenue FROM Account where Industry='Financial Services' Order By OwnerId];
    return lstAccountSortByAccOwner;
    } 

    @AuraEnabled
    public static List<Account> getAccountsByUserInput(String searchString)
    {
    List<Account> lstAccountSearchByUserInput=[Select Id,Name,OwnerId,Phone,Website,AnnualRevenue FROM Account where Industry='Financial Services' AND Name = :searchString];
    return lstAccountSearchByUserInput;
    }


}
