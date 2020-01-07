public class testCmpdb {
    @AuraEnabled
    public  static signUp__c signUpMethod(signUp__c data){
        insert data;
        return data;
    }
}