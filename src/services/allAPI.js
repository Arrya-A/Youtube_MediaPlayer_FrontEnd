import commonAPI from "./commonAPI"
import { serverUrl } from "./serverUrl"

//upload video API must be called by Add Component
export const uploadVideoAPI = async (uploadVideo) => {
    return await commonAPI("POST", `${serverUrl}/allVideos`, uploadVideo)
}


//api to get all videos , API must be called by view component
export const getAllVideosAPI = async () => {
    return await commonAPI("GET", `${serverUrl}/allVideos`, '')
}


//store watchhistory API must be called by VideoCard component
export const storeHistoryAPI = async (videoDetails) => {
    return await commonAPI("POST", `${serverUrl}/history`, videoDetails)
}


//gethistory API must be called by wathHistory component
export const getHistoryAPI = async () => {
    return await commonAPI("GET", `${serverUrl}/history`, '')
}


//removehistory API must be called by wathHistory component
export const removeHistoryAPI = async (historyId) => {
    return await commonAPI("DELETE", `${serverUrl}/history/${historyId}`, {})
}


//remove video API must be called by videoCaard component
export const removeVideoAPI = async (videoId) => {
    return await commonAPI("DELETE", `${serverUrl}/allVideos/${videoId}`, {})
}


//add category api
export const addCategoryAPI = async (categoryDetails) => {
    return await commonAPI("POST", `${serverUrl}/categories`, categoryDetails)
}


//get all category api
export const getCategoryAPI = async () => {
    return await commonAPI("GET", `${serverUrl}/categories`, '')
}


//remove category api
export const removeCategoryAPI = async (categoryId) => {
    return await commonAPI("DELETE", `${serverUrl}/categories/${categoryId}`, {})
}

//api to get single video
export const getSingleVideoAPI = async (id) => {
    return await commonAPI("GET", `${serverUrl}/allVideos/${id}`, '')
}
//update category api
export const updateCategoryAPI = async (categoryId,categoryDetails) => {
    return await commonAPI("PUT", `${serverUrl}/categories/${categoryId}`, categoryDetails)
}


//get single category api
export const getSingleCategoryAPI = async (id) => {
    return await commonAPI("GET", `${serverUrl}/categories/${id}`, '')
}