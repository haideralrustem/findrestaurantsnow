export class City {
  name: string;
  country_id: string;
  is_state: number;
  state_code: number;
  state_id: number;
  state_name: string;

constructor(name, state_name, country_id, is_state, state_code, state_id) {
  this.name = name;
  this.country_id = country_id;
  this.is_state = is_state;
  this.state_code = state_code;
  this.state_id = state_id;
  this.state_name = state_name;
}
}
