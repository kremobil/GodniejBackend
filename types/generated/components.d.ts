import type { Struct, Schema } from '@strapi/strapi';

export interface LinkLink extends Struct.ComponentSchema {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    Tekst: Schema.Attribute.String;
    Link: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'link.link': LinkLink;
    }
  }
}
