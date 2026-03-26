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

export interface TeamTeamMemberLink extends Struct.ComponentSchema {
  collectionName: 'components_team_team_member_links';
  info: {
    description: 'Reference to a team member for ordering';
    displayName: 'Team Member Link';
  };
  attributes: {
    team_member: Schema.Attribute.Relation<
      'oneToOne',
      'api::team-member.team-member'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.feature-item': SharedFeatureItem;
      'team.team-member-link': TeamTeamMemberLink;
    }
  }
}
