interface LocationDTO {
    copyright: string;
    osm_type: string;
    osm_id: number;
    lat: string;
    lon: string;
    class: string;
    type: string;
    place_rank: number;
    importance: number;
    addresstype: string;
    name: string;
    display_name: string;
    address: AddressDTO;
    boundingbox: string[];
}

interface AddressDTO {
    tourism: string;
    house_number: string;
    road: string;
    quarter: string;
    suburb: string;
    city: string;
    state_district: string;
    state: string;
    ISO3166_2_lvl4: string;
    postcode: string;
    country: string;
    country_code: string;
}