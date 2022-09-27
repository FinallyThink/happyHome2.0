import require  from "../../axios/myAxios"
export default {
   async getSelfIntroduction(){
        const response = await require({
            url:'/get/selfIntroduction'
        }
        );
        return response.data
    }
}