const mapping: Record<string, string> = {
  organizations: 'organization',
  streams: 'stream',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
