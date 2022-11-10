import api from "@/services/api"

export default {
    getplaceholders(){
        return api().get("/?_limit=12")
    }
}