import * as Action from '../redux/result_reducer'
import { postServerData } from '../helper/helper'

export const pushAnswer = (result) => async(dispatch)=>{
    try{
        await dispatch(Action.pushResultAction(result))
    }catch(error){
        console.log(error)
    }
}
export const updateResult = (index) => async(dispatch)=>{
    try{
        dispatch(Action.updateResultAction(index))
    }catch(error){
        console.log(error)
    }
}

export const usePublishResult = (resultData)=>{
    const {result,username} = resultData;
    (async()=>{
        try {
            if(result != [] && !username)throw new Error("Couldn't get result")
            await postServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/results`,resultData,data=>data)
        } catch (error) {
            console.log(error)
        }
    })();
}