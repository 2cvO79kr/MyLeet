var isInterleave = function(s1, s2, s3) {
    let arr = [];
    if (s1.length + s2.length != s3.length) return false;
    if (s1 === '') return (s2 === s3);
    if (s2 === '') return (s1 === s3);
    for (let i = 0; i <= s1.length; i++){
        let subarr = [];
        arr[i] = subarr;
        for (let j = 0; j <= s2.length; j++){
            if (i == 0 && j == 0){
               arr[i][j] = true;
            }else if (i == 0 && j != 0){
                if (s2[j-1] == s3[i+j-1] && arr[i][j-1] == true){
                    arr[i][j] = true;
                }
            } else if (j == 0 && i != 0){
                if (s1[i-1] == s3[i+j-1] && arr[i-1][j] == true){
                    arr[i][j] = true;
                }
            } else if ((s1[i-1] == s3[i+j-1] && arr[i-1][j] == true) || (s2[j-1] == s3[i+j-1] && arr[i][j-1] == true)){
                    arr[i][j] = true;
                } else {
                    arr[i][j] = false;
                }
        }
    }
    return arr[s1.length][s2.length];
};




public boolean isInterleave(String s1, String s2, String s3) {
    if(s1.length() + s2.length() != s3.length()) return false;
    boolean[][] dp = new boolean[s2.length() + 1][s1.length() + 1];
    dp[0][0] = true;
    
    for(int i = 1; i < dp[0].length; i++) dp[0][i] = s1.charAt(i - 1) == s3.charAt(i - 1) && dp[0][i - 1];
    for(int i = 1; i < dp.length; i++) dp[i][0] = s2.charAt(i - 1) == s3.charAt(i - 1) && dp[i - 1][0];
    
    for(int i = 1; i < dp.length; i++) {
    for(int j = 1; j < dp[0].length; j++) {
    boolean placeFromS1 = s1.charAt(j - 1) == s3.charAt(i + j -1) && dp[i][j - 1];
    boolean placeFromS2 = s2.charAt(i - 1) == s3.charAt(i + j -1) && dp[i - 1][j];
    dp[i][j] = placeFromS1 || placeFromS2;
    }
    }
    return dp[s2.length()][s1.length()];
    
    }