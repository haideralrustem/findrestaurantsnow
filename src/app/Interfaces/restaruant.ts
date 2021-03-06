export interface Restaruant {
    R: object;
    apikey: string;
    id: number;
    name: string;
    url: string;
    location: object;
    switch_to_order_menu: number;
    cuisines: string;
    average_cost_for_two: number;
    price_range: number;
    currency: string;
    offers: any [];
    opentable_support: number;
    is_zomato_book_res: number;
    mezzo_provider: string;
    is_book_form_web_view: number;
    book_form_web_view_url: string;
    book_again_url: string;
    thumb: string;
    user_rating: object;
    photos_url: string;
    menu_url: string;
    featured_image: string;
    has_online_delivery: number;
    is_delivering_now: number;
    include_bogo_offers: boolean;
    deeplink: string;
    is_table_reservation_supported: number;
    has_table_booking: number;
    events_url: string;
    establishment_types: any [];
}
