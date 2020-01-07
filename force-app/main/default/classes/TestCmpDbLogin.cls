public class TestCmpDbLogin {
	@AuraEnabled
    public static String loginMethod(String email,String pwd){
        System.debug(email);
        System.debug(pwd);
        List<signUp__c>  loginData =new List<signUp__c>([select Email__c,Password__c from signUp__c where Email__c =: email limit 1]);
        if(loginData.size() == 0){
            return 'username not exist';
                }else if(loginData[0].Password__c == pwd){
                    return 'Login Successfully';
                        }else{
                            return 'Invalid password';
                        }
    }
    @AuraEnabled 
    public static List<signUp__c> retriveFrmDb(){
        List<signUp__c> frmDb = [select Email__c,Password__c,Name__c from signUp__c];
        return frmDb;
    }
    @AuraEnabled
    public static List<signUp__c> deleteMethod(String selectedId){
        List<signUp__c> del = [Select Id,Email__c,Password__c,Name__c from signUp__c where Id =: selectedId];
        delete del;
        return del;
    }
}