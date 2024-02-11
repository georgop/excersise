import {Location} from "../Location.ts";
export function transformLocationDTOToLocation(locationDTO: LocationDTO): Location {
    return {
        state:locationDTO.address.state,
        country: locationDTO.address.country,
        city: locationDTO.address.city,
    };
}