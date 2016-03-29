var appKey    = "095c2c404066ba8a5cab0b22b9f74fc20f5dd69d8f3624f70545169037e34623";
var clientKey = "60a197b47663a55fc3b668de9199c92989f3d571fd522880a05fb024faf4fcf7";
var ncmb = new NCMB(appKey, clientKey);

///// Called when app launch
$(function() {
  $("#LoginBtn").click(onLoginBtn);
  $("#RegisterBtn").click(onRegisterBtn);
  $("#YesBtn_logout").click(onLogoutBtn);
   $("#LoginBtn2").click(saveData);
    $("#LoginBtn3").click(saveData3);
     $("#LoginBtn4").click(saveData4);
});

//----------------------------------USER MANAGEMENT-------------------------------------//
var currentLoginUser; //現在ログイン中ユーザー

function onRegisterBtn()
{
    //入力フォームからusername, password変数にセット
    var username = $("#reg_username").val();
    var password = $("#reg_password").val();
     var test123 = "1237777";
    
    var user = new ncmb.User();
    user.set("userName", username)
        .set("password", password)
        .set("test", test123);
    // 任意フィールドに値を追加 
    user.signUpByAccount()
        .then(function(user) {
            alert("新規登録に成功");
            currentLoginUser = ncmb.User.getCurrentUser();
            $.mobile.changePage('#DetailPage');
        })
        .catch(function(error) {
            alert("新規登録に失敗！次のエラー発生：" + error);
        });
}

function onLoginBtn()
{
    var username = $("#login_username").val();
    var password = $("#login_password").val();
    var test = "999";
    // ユーザー名とパスワードでログイン
    ncmb.User.login(username, password)
        .then(function(user) {
            alert("ログイン成功");
            currentLoginUser = ncmb.User.getCurrentUser();
            $.mobile.changePage('#DetailPage');
            
            //Userのインスタンスを作成

           

// 新規登録
user.signUpByAccount()
    .then(function(){
      // 登録後処理
    })
    .catch(function(err){
      // エラー処理
    });

            
        })
        .catch(function(error) {
            alert("ログイン失敗！次のエラー発生: " + error);
        });
              
        
}




function saveData(){
    //クラス名を指定して新規クラスを作成
// ニフティクラウド mobile backendを初期化します

 var Score = self.ncmb.DataStore("ScoreClass");

// [2]インスタンス生成、スコア数値とログインしているユーザー（ポインタ）をセット
var scoreData = new Score({score: score, user: self.currentUser});

// [3]送信処理
scoreData.save()
    .then(function (saved) {
      // 登録後処理
    })
}



function saveData3()
{
    var GameScore = ncmb.DataStore("GameScore999");
var gameScore = new GameScore();

gameScore.set("score", 3332)
         .set("playerName", "Taro22")
         .set("cheatMode", false)
         .save()
         .then(function(gameScore){
          // 保存後の処理
         })
         .catch(function(err){
           // エラー処理
         });
        
}


function saveData4()
{
    
  var currentUser = NCMB.User.current();
if (currentUser) {
  console.log(currentUser);
  $('#user-name').text(currentUser.get('userName'));
  var ttt = currentUser.get('createDate');
   alert(ttt);
} else {
  alert("ログインしていません");
}

        
}









function onLogoutBtn()
{
    ncmb.User.logout();
    alert('ログアウト成功');
    currentLoginUser = null;
    $.mobile.changePage('#LoginPage');
}
