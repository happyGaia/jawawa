# 娃娃機地圖
  主要方便喜歡夾娃娃的人，到夾娃娃機店後，能一鍵取得娃娃機店地址、經緯度等(html5 geo、google map)資訊儲存，讓其它人可以藉此應用可以看到訊息;去過店裡也可以評論/討論這家店好不好夾、爪子是不是有力等。這是Demo版本。

## Tech
  google map, html5 geo ,sass
  
## Backend API description
  1. api/location/{city} - 
     query "claw crane game machine" locations and the comments in {city}, and you will get "Locations" object for response.

      - Locations object

      {
        “Locations”:[
      	  {location object}, {location object}
        ]
      }

      - location object
      
      {
        “Id”:”(auto)"
        “Address”:”xxxx”
        “Lng”:”經度”
        “Lat”:”緯度”
        “Time”:”2015-01-01 00:00”,
        “Comments”:[{comment object}]
      }
      
      - comment object
      
      {
        “Id”:1234,
        "LocId": 455,
        “Content”:””,
        “Star”: 12,
        “Time”:”xxx”
      }

  2. api/location - 
     add new "claw crane game machine" location.

  3. api/locations - 
     query all "claw crane game machine" location which person added.

  4. api/comment - 
     add new comment for the "claw crane game" store.

  5. comment/{comment id} - 
     delete comments for the "claw crane game" store, you can press "X" in the comment right-top.

## 畫面
  1. 一開始先用html5 Geo取得所在地經緯度，用此經緯度去查目前所在地地址、縣市，如下第1畫面，此時畫面是空的。
     用取得的縣市透由api/location/{city}去查詢資料庫中有此city資料，傳回Locations object。此時畫面會將Locations object和comment object用js方式產生出，如下第2畫面。第3個畫面，則是可以切換不同縣市去看娃娃店資訊，此時會再透由api/location/{city}去拿Locations object。在此階段，在js暫存經緯度、完整地址、所在縣市。

     <img src="https://github.com/happyGaia/jawawa/raw/master/snapshot/1.jpg" width="230px" alt="第1畫面" title="第1畫面">
     <img src="https://github.com/happyGaia/jawawa/raw/master/snapshot/2_1.png" width="230px" alt="第2畫面" title="第2畫面">
     <img src="https://github.com/happyGaia/jawawa/raw/master/snapshot/3.png" width="230px" alt="第3畫面" title="第3畫面">
     
     
  2. 點選上面第3畫面 "新增 娃娃機 地點" 按鈕時，會去拿目前所在地經緯度(第一階段暫存經緯度等)資料，呼叫api/location，將資料新增到資料庫，並顯示於頁面。
  

  3. 新增comment - 每個娃娃機店都有其"地圖"與"評論"2個按鈕，你可以對店做評論。點下評論時按鈕時，如果已有評論(其它人評論)，則會如第6畫面一樣，點開"評論"按鈕，就會顯示出來，如沒有時則會如第4畫面所示。新增comment如下第4~6畫面所示，在第5畫面時，會呼叫api/comment，去資料庫新增評論，並傳回新增完評論Id供頁面顯示使用。每個評論右上角有個"x"，則是可以刪除該篇評論用，刪除時會呼叫comment/{comment id}去資料庫刪除，並不再顯示於頁面。
  
    <img src="https://github.com/happyGaia/jawawa/raw/master/snapshot/4.png" width="230px" alt="第4畫面" title="第4畫面">
    <img src="https://github.com/happyGaia/jawawa/raw/master/snapshot/5.png" width="230px" alt="第5畫面" title="第5畫面">
    <img src="https://github.com/happyGaia/jawawa/raw/master/snapshot/6.png" width="230px" alt="第6畫面" title="第6畫面">


  4. 看各別娃娃機站位址地圖 - 點開"地圖"按鈕，則會另開一頁顯示其店所在地址。點全台娃娃機資訊返回。此地圖會用到google map。
     不像評論在同一頁下面顯示，是由於在開啟地圖時，如要滑動上下查看娃娃機店資訊，很容易易滑動到地圖，不好操作，因此改像單頁式。
  
    <img src="https://github.com/happyGaia/jawawa/raw/master/snapshot/7.jpg" width="230px" alt="第7畫面" title="第7畫面">
  

  5. 大地圖 - 則是將全台娃娃機資訊顯示於地圖上，並以你目前所在位址為地圖中心點顯示，此頁會呼叫api/locations，把所有地圖資訊顯示在google map上，當你放大或移動地圖時，想回到目前所在地，則可以如"第10畫面"，點選地圖右下箭頭回去，如8、9、10所示。
  
    <img src="https://github.com/happyGaia/jawawa/raw/master/snapshot/8.jpg" width="230px" alt="第8畫面" title="第8畫面">
    <img src="https://github.com/happyGaia/jawawa/raw/master/snapshot/9.jpg" width="230px" alt="第9畫面" title="第9畫面">
    <img src="https://github.com/happyGaia/jawawa/raw/master/snapshot/10.jpg" width="230px" alt="第10畫面" title="第10畫面">
