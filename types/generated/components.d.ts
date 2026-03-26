import type { Schema, Struct } from '@strapi/strapi';

export interface SharedFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_items';
  info: {
    description: 'A single feature or highlight bullet point';
    displayName: 'Feature Item';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.feature-item': SharedFeatureItem;
    }
  }
}
