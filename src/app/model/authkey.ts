export class Authkey {
 
    static secret ="206b2dbe-ecc9-490b-b81b-83767288bc5e";
    static api ="d1b8fb55-7a81-455d-b060-44cc86064aef";
  static getAPI(): any {
    return this.api;
  }
  static getSecret(): any {
    return this.secret;
  }

}
