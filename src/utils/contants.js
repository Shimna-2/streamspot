const GOOGLE_API_KEY = "AIzaSyDADHtcRWsMpkL73Ph3jCNZIW-OCxTJQDE";

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = `https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

//  const data= fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=", {
//     mode: "no-cors",
//   })

// Live Chat >>>> Infinite Scroll >>>>>> Pagination
