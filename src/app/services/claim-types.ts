export class ClaimTypes {
  private static claimType2005Namespace = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims';

  public static nameClaim = `${this.claimType2005Namespace}/name`;
  public static nameIdentifierClaim = `${this.claimType2005Namespace}/nameidentifier`;
}