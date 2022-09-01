export default class Race {
  constructor(result) {
    this.round = result.round;
    this.raceName = result.raceName;
    this.circuit = result.Circuit.circuitName;
    this.circuitUrl = result.Circuit.url;
    this.country = result.Circuit.country;
    this.date = result.date;
  }
}
