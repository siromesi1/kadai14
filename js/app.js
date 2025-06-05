//読み込み完了後に実行する
$(function() {
    //#btnがクリックされたとき
    $('#btn').on('click', function(){
        $.ajax({
            //リクエスト先のURLを設定

            //レスポンスのデータ形式を設定

        }).done(function(data){
            //通信が成功したときの処理
            if(data.results){
                //データが取得できたとき、setData関数を呼び出す

            }else{
                alert("該当するデータが見つかりませんでした");
            }
        }).fail(function(data){
            //通信が失敗したときの処理
            alert("通信に失敗しました");
        });
    });
});

function setData(data){
    //取得データを各HTML要素に代入

}