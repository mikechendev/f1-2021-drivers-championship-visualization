export default class Race {
  constructor(result) {
    this.round = result.round;
    this.raceName = result.raceName;
    this.circuit = result.Circuit.circuitName;
    this.circuitUrl = result.Circuit.url;
    this.locality = result.Circuit.Location.locality;
    this.country = result.Circuit.Location.country;
    this.date = result.date;
    this.results = result.Results;
  }
}
