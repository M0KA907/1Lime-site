// Single source of truth for 1Lime contact + social links.
// content-model.md §Site recommends this file — header/footer/CTAs all read from here.

export type SocialLink = { label: string; url: string; handle: string };

export const site = {
  name: '1Lime',
  tagline: 'Websites, delivered like a factory.',

  // Primary contact channel: Discord (direct profile — replaces email).
  discord: {
    label: 'Discord',
    handle: 'm0ka907',
    invite: 'https://discord.com/users/809560966554452040',
  } as SocialLink & { invite: string },

  // GitHub account to link.
  github: [
    { label: 'GitHub', handle: 'm0ka907', url: 'https://github.com/m0ka907' },
  ] as SocialLink[],
};

// Convenience flat list for footers / link rows.
export const socials: SocialLink[] = [
  { label: site.discord.label, handle: site.discord.handle, url: site.discord.invite },
  ...site.github,
];
