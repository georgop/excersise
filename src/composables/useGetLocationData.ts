import {ApiResponse, HttpService} from "../services/httpService.ts";
import {ref, Ref} from "vue";
import {transformLocationDTOToLocation} from "../models/transformers/LocationTransformer.ts";
import {Location} from "../models/Location.ts";

export const useGetLocationData = () => {
    const httpService = new HttpService('https://nominatim.openstreetmap.org');
    const location: Ref<Location | undefined> = ref();
    const isLoading: Ref<boolean> = ref(true);
    const error: Ref<string | null> = ref(null);

    const getLocation = async (lat:string,lng:string) => {
        try {
            const response: ApiResponse<LocationDTO> = await httpService.get('/reverse?format=json&lat='+lat+'&lon='+lng);
            location.value = transformLocationDTOToLocation(response.data);
        }
        catch (error : any){
            error.value = { message : "Error in location fetching"};
        }
        finally {
            isLoading.value = false;
        }
    }

    return {getLocation,location,isLoading,error}
}
