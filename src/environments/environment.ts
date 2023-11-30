export const environment = {
  production: false,
  name: 'local',
  keycloak: {
    issuer: 'http://localhost:8080/auth/',
    realm: 'ffd-app',
    clientId: 'ffp-client',
  }
}
