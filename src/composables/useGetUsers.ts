import {ApiResponse, HttpService} from "../services/httpService";
import {User} from "../models/User";
import {Ref, ref} from "vue";

export const useGetUsers = () => {
    const httpService = new HttpService('https://jsonplaceholder.typicode.com');
    const users: Ref<User[]> = ref([]);
    const isLoading: Ref<boolean> = ref(true);
    const error: Ref<string | null> = ref(null);
    const getUsers = async () => {
        try {
            const response: ApiResponse<User[]> = await httpService.get('/users');
            users.value = response.data;
        }
        catch (error : any){
            error.value = { message : "Error in users fetching"};
            alert("error")
        }
        finally {
            isLoading.value = false;
        }
    }

    return {getUsers,users,isLoading,error}

}
