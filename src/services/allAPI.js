import commonAPI from "./commonAPI"
import { serverUrl } from "./serverUrl"

//upload video API must be called by Add Component
export const uploadVideoAPI = async (uploadVideo)=>{
    return await commonAPI("POST",`${serverUrl}/allVideos`,uploadVideo)
}

//api to get all videos , API must be called by view component
export const getAllVideosAPI=async()=>{
    return await commonAPI("GET",`${serverUrl}/allVideos`,'')
}


//store watchhistory API must be called by VideoCard component
export const watchHistoryAPI=async(videoDetails)=>{
    return await commonAPI("GET",`${serverUrl}/history`,videoDetails)
}