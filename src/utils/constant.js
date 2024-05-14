const API_KEY="AIzaSyAc90s2gR8Lcx3PboGnzp2dq4h-YH_Kx6o";

export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_URL="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&videoCategoryId=0&maxResults=50&regionCode=IN&key="+API_KEY;
export const YOUTUBE_SEARCH_VIDEO="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key="+API_KEY;
export const OFFSET_LIVE_CHAT=10



export const value_converter=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}