module.exports = {
  async bootstrap({ strapi }) {
    // Check if we've already seeded data
    const teamMemberCount = await strapi.entityService.count('api::team-member.team-member');

    if (teamMemberCount > 0) {
      console.log('📦 Data already exists, skipping seed...');
      return;
    }

    console.log('🌱 Seeding initial data...');

    // Seed Team Members
    const teamMembers = [
      {
        name: "JoEllen Luke",
        title: "Yoga Instructor",
        image: null,
        order: 1,
        active: true,
        bio: "JoEllen is the heart and soul of Love More. With years of dedication to the practice and community, she brings warmth, wisdom, and transformative energy to every class."
      },
      {
        name: "Mackenzie Halloran",
        title: "Yoga Instructor",
        image: null,
        order: 2,
        active: true,
        bio: "Mackenzie is a passionate yoga instructor dedicated to helping students discover the transformative power of movement and mindfulness. With years of experience and a deep commitment to the Love More community, Mackenzie creates a welcoming and supportive environment for practitioners of all levels."
      }
    ];

    for (const member of teamMembers) {
      await strapi.entityService.create('api::team-member.team-member', {
        data: { ...member, publishedAt: new Date() }
      });
      console.log(`✓ Created team member: ${member.name}`);
    }

    // Seed Classes
    const classes = [
      {
        name: "Power Flow (Hot)",
        type: "heated",
        image: null,
        order: 1,
        active: true,
        description: "Power Flow is a vinyasa yoga class that focuses on building strength, alignment, flexibility, core, and stamina. This faster paced class combines traditional yoga postures with more intense movements and cardiovascular exercises while promoting focused breathing and mindfulness.\n\n* Each class will end with an extended period of relaxation (savasana) and cool lavender cloths. Power Flow (hot) is heated to above body temperature and approximately 40% humidity."
      },
      {
        name: "Flow (Warm)",
        type: "heated",
        image: null,
        order: 2,
        active: true,
        description: "Flow (warm) is a yoga class that typically focuses on slow and smooth movements combined with deep breathing and relaxation techniques. Great for all levels, including beginners.\n\n*Each class will end with an extended period of relaxation (savasana) and cool lavender cloths."
      },
      {
        name: "Functional Flow (Warm)",
        type: "non-heated",
        image: null,
        order: 3,
        active: true,
        description: "Experience the combination of vinyasa, core, and mobility exercises to enhance balance, strength, and flexibility. This class helps develop physical stability which may positively impact your emotional and mental well-being.\n\n*Each class will end with an extended period of relaxation (savasana) and cool lavender cloths."
      },
      {
        name: "Bikram (Hot)",
        type: "heated",
        image: null,
        order: 4,
        active: true,
        description: "Classic 26/2 Hot Yoga (Bikram style) class. A set sequence of 26 asanas and 2 pranayamas completed twice throughout the 90-minute class.\n\nPracticed in a room heated to 105° F with 40% humidity."
      },
      {
        name: "Yoga Sculpt (Warm)",
        type: "healing-room",
        image: null,
        order: 5,
        active: true,
        description: "A dynamic class that includes yoga poses with strength training exercises for a full-body workout. Use light weights to tone and define targeted muscle groups.\n\nPerfect for anyone looking for a challenging workout that combines yoga and strength training."
      }
    ];

    for (const classItem of classes) {
      await strapi.entityService.create('api::class.class', {
        data: { ...classItem, publishedAt: new Date() }
      });
      console.log(`✓ Created class: ${classItem.name}`);
    }

    // Seed Retreats
    const retreats = [
      {
        name: "ROOTED: A Rainforest Experience",
        location: "Finca Luna Nueva Lodge, Costa Rica",
        image: null,
        order: 1,
        active: true,
        highlights: [
          "Transportation from and to the airport",
          "Room stay at the farm",
          "2/3 daily movement practices",
          "3 meals a day",
          "Meditations and Breathwork",
          "Farm tour and Cacao ceremony",
          "Waterfall tour and Nature hikes",
          "Ice bath and Pool workouts"
        ],
        description: "Take a journey into the rainforest of Costa Rica to unveil your highest potential. Awaken your healing journey through breath work, yoga, sound, lymphatic releases, nervous system resets, adventure, and more!\n\nOur 7 Day/6 Night retreat offers opportunities to deepen your connection with your higher self."
      },
      {
        name: "EmpowerU Women's Wellness Retreat",
        location: "Sedona, Arizona",
        image: null,
        order: 2,
        active: true,
        highlights: [
          "Yoga and Meditation",
          "Breathwork and Journaling",
          "Ice baths and Ecstatic dance",
          "Hiking and Sound baths",
          "Sauna and Conscious conversations",
          "Empowering workshops",
          "Lodging, Meals, and Airport transportation"
        ],
        description: "Join JoEllen and Jax for our transformative EmpowerU - Women's Wellness and Empowerment Retreat.\n\n5 days and 4 nights surrounded by breathtaking red rock mountains and energy vortexes of Sedona, Arizona.\n\nReconnect with yourself and tap into your inner truth and power."
      }
    ];

    for (const retreat of retreats) {
      await strapi.entityService.create('api::retreat.retreat', {
        data: { ...retreat, publishedAt: new Date() }
      });
      console.log(`✓ Created retreat: ${retreat.name}`);
    }

    // Enable public permissions for API access
    const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
      where: { type: 'public' }
    });

    if (publicRole) {
      await strapi.query('plugin::users-permissions.permission').createMany({
        data: [
          { action: 'api::team-member.team-member.find', role: publicRole.id },
          { action: 'api::team-member.team-member.findOne', role: publicRole.id },
          { action: 'api::class.class.find', role: publicRole.id },
          { action: 'api::class.class.findOne', role: publicRole.id },
          { action: 'api::retreat.retreat.find', role: publicRole.id },
          { action: 'api::retreat.retreat.findOne', role: publicRole.id },
        ]
      });
      console.log('✓ Enabled public API permissions');
    }

    console.log('✅ Seed data created successfully!');
  },
};
