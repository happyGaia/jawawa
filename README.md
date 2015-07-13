# Jawawa
  This is application for person that likes claw crane game to use easy way to share(save) claw crane game machine location for other person. And they can leave comments for claw crane game store. This only use in Taiwan.

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
