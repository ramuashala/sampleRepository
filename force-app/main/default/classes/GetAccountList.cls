public with sharing class GetAccountList {
    @AuraEnabled
    public static List<Account> GetAccount()
    {
    List<Account> lstAccount=[Select Id,Name,Owner.Username,Phone,Website,AnnualRevenue FROM Account where Industry='Financial Services'];
    return lstAccount;
    } 

    @AuraEnabled
    public static List<Account> GetAccountsSortedByAccName()
    {
    List<Account> lstAccount1=[Select Id,Name,Owner.Username,Phone,Website,AnnualRevenue FROM Account where Industry='Financial Services' ORDER BY Name];
    return lstAccount1;
    } 

    @AuraEnabled
    public static List<Account> GetAccountListSortedByAccOwner()
    {
    List<Account> lstAccount2=[Select Id,Name,Owner.Username,Phone,Website,AnnualRevenue FROM Account where Industry='Financial Services' ORDER BY OwnerId];
    return lstAccount2;
    } 
    }
