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
